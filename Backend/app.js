const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const cron = require("node-cron");

const app = express();
const PORT = process.env.port || 3000;

/* Saved games list */
let games = [];

const generateId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const checkId = (element) => element.id === id;
  if (games.some(checkId)) {
    generateId();
  } else {
    return id;
  }
};

const scrape = async (originSite) => {
  const response = await axios(originSite);
  const $ = cheerio.load(response.data);

  /*Product ID*/
  const dataRaw = $('script[id*="env:"]').get(2);
  const data = JSON.parse(dataRaw.firstChild.data);
  const productId = data.args.productId;

  /*Images*/
  const imgRaw = $('script[id*="env:"]').get(0);
  const images = JSON.parse(imgRaw.firstChild.data);
  const arrayImg = images.cache[`Product:${productId}`].media;
  const gameImgUrls = arrayImg.map((img) => {
    return img.url;
  });

  /* DATA */
  /*Name*/
  const name = $('[data-qa*="mfe-game-title#name"]').text();

  /*Publisher*/
  const publisher = $('[data-qa*="mfe-game-title#publisher"]').text();

  /*Product Tags*/
  const productTags = [];
  $('[data-qa*="mfe-game-title#productTag"]').each((i, element) => productTags.push($(element).text()));

  /*Final price*/
  let finalPrice = $('[data-qa*="mfeCtaMain#offer0#finalPrice"]').text();
  finalPrice = Number(finalPrice.replace("€", "").replace(",", "."));

  /*Original price*/
  let originalPrice = $('[data-qa*="mfeCtaMain#offer0#originalPrice"]').text();
  originalPrice = Number(originalPrice.replace("€", "").replace(",", "."));

  /*Discount*/
  let discount = "";
  if (originalPrice === 0) {
    discount = 0;
  } else {
    discount = Math.round((1 - finalPrice / originalPrice) * 100);
  }

  /* Generate id */
  const id = generateId();

  /*Dataset chart.js*/
  const d = new Date();
  const time = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  const prices = [];
  prices.push({ time: time, price: finalPrice });

  /*Constructor game */
  const game = {
    id: id,
    name: name,
    publisher: publisher,
    tags: productTags,
    url: originSite,
    finalPrice: finalPrice,
    originalPrice: originalPrice,
    discount: discount,
    media: gameImgUrls[0],
    priceHistory: prices,
  };

  return game;
};

/*Scrape price every Thursday*/

const scrapeNewPrice = async (url) => {
  const response = await axios(url);
  const $ = cheerio.load(response.data);

  /*Actual price*/
  let fp = $('[data-qa*="mfeCtaMain#offer0#finalPrice"]').text();
  fp = Number(fp.replace("€", "").replace(",", "."));

  /*Original price*/
  let op = $('[data-qa*="mfeCtaMain#offer0#originalPrice"]').text();
  op = Number(op.replace("€", "").replace(",", "."));

  /*Discount*/
  let dscnt = "";
  if (op === 0) {
    dscnt = 0;
  } else {
    dscnt = Math.round((1 - tp / op) * 100);
  }

  const newGameData = {
    final: fp,
    original: op,
    discount: dscnt,
  };

  return newGameData;
};

const scrapeThursday = cron.schedule("* * 3 * * Thursday", () => {
  const d = new Date();
  const time = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  games.map(async (game) => {
    const dataNow = await scrapeNewPrice(game.url);
    /*Get new price*/
    game.finalPrice = dataNow.final;
    game.originalPrice = dataNow.original;
    game.discount = dataNow.discount;
    game.priceHistory.push({ time: time, price: dataNow.final });
  });
});

scrapeThursday.start();

/* CORS policy */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  return res.send(games);
});

app.post("/", async (req, res) => {
  const newGame = req.body.url;
  if (newGame.startsWith("https://store.playstation.com/it-it/product")) {
    if (games.length !== 0) {
      if (games.find((element) => element.url === newGame)) {
        return res.send("Gioco già presente");
      } else {
        const addNewGame = await scrape(newGame);
        games.push(addNewGame);
        return res.send("Gioco aggiunto alla lista");
      }
    } else {
      const addNewGame = await scrape(newGame);
      games.push(addNewGame);
      return res.send("Gioco aggiunto alla lista");
    }
  } else {
    return res.send("Non è un gioco del Playstation Store italiano");
  }
});

app.delete("/", (req, res) => {
  const deleteId = req.body.id;
  if (games.length !== 0) {
    const newList = games.filter((element) => element.id !== deleteId);
    games = newList;
  } else {
    return res.send("Lista vuota");
  }
  return res.send("Gioco eliminato");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
