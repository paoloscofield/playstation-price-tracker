<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/paoloscofield/playstation-price-tracker">
    <img src="images/logo.png" alt="Logo" height="80">
  </a>
<h3 align="center">Playstation Store - Price Tracker</h3>

</div>
<br />
<!-- TABLE OF CONTENTS -->
<details style='background-color: #f2f2f2; padding: 20px;'>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#packages">Packages</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/paoloscofield/playstation-price-tracker)

Playstation Store Price Tracker is a demonstrative app made by a developer who needs to practise React development and loves Playstation games.

The digital games market is constantly increasing and many players prefer to buy digital games instead of physical copies from Amazon or other stores.<br>

Every two weeks, Playstation publishes promotions in his digital store, with very high discounts on so many games. The main goal of this application is to track automatically games prices and help the user to choose the right time to buy the game. The user chooses his favourite game, adds it to his personal list, and the server part of the app will download information about the game every Thursday. Generating a dedicated page for each game, the app will show current, the latest and the lowest price with a user-friendly chart.

The app is just a demonstrative app to test my skills and not for commercial purpose.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React.js]][React-url]
[![Node.js][Node.js]][Node-url]
[![Express.js][Express.js]][Express.js-url]

### Packages

[![Cheerio][Cheerio]][Cheerio-url]
[![Axios][Axios]][Axios-url]
[![Node-cron][Node-cron]][Node-cron-url]
[![React-router][React-router]][React-router-url]
[![Chart.js][Chart.js]][Chart.js-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

There are two folder: `Frontend` and `Backend`. The following instructions will help you to install both locally with VS Code.
Since it automatically tracks price history from Playstation Store page, for full functionality you must upload the `Backend` part on web service like Heroku or Netlify. Let's start.

### Prerequisites

To run the project you need Node.js. Download the setup of LTS version here and install:

[https://nodejs.org/en](https://nodejs.org/en)

Check if your system is good to go typing on terminal:

```sh
node -v
```

If the result is "v(number of actual version)" continue.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/paoloscofield/playstation-price-tracker
   ```

2. Open on VS Code both "Frontend" and "Backend"

3. Install NPM packages on both folders:
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

There are two ways to use the app: locally and online.

### Locally

Locally you have to start both `Frontend` and `Backend`. If you use this kind of setup, you can try the app features but the `Backend` needs to run on background to track game prices. If you restart the server, it loses stored data. For full functionality see next section (Online)

- `Backend` will run on http://localhost:3000 typing on terminal:

  ```sh
  npm start
  ```

  This is the automatic part of the app. Since it starts, it creates an endpoint that storage games list and games info receiving requests from `Frontend`.
  <br>
  <br>

- `Frontend` is made with Vite so it will run on http://localhost:5173. On terminal type:

  ```sh
  npm run dev
  ```

  This is the GUI and the user is able to make his own games list adding the Playstation Store game url on the main text input. This must start with "https://store.playstation.com/it-it/product". So far the app accepts url from italian Playstation Store only.

### Online

- In the `Backend` folder Change this `package.json` string:

  ```sh
  "start": "node app.js",
  ```

  Then just upload the `Backend` part of the app in services like Netlify or Heroku. Here's a guide for Netlify:

  https://docs.netlify.com/frameworks/express/#deploy-an-express-app-on-netlify
  <br>
  <br>

- In the `Frontend` folder, change the `config.js` file where is located the address of the server endpoint. Replace `ENDPOINT` value with your endpoint url.

  Build the static site from `Frontend` folder typing on terminal:

  ```sh
  npm run build
  ```

  and upload the content of `dist` folder on your favourite host.
  <br/>
  <br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

I would like to use this app to train my development skills. I will implement new features like authentication, centralized server, database and much more. For this project I prefer to develop it by myself, without external help. I know Github is a sharing platform and I will open my future projects to contributes. Maybe this one too.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Centralized server
- [ ] Authentication
- [ ] Games database
- [ ] ...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under a modified version of MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Paolo Scofield - [Linkedin](https://www.linkedin.com/company/paolo-scofield-design/) - info@paoloscofield.it

Project Link: [https://github.com/paoloscofield/playstation-price-tracker](https://github.com/paoloscofield/playstation-price-tracker)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Riccardo Sirgu](https://github.com/ricsirigu) for technical support and helpful advices

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/paoloscofield/playstation-price-tracker.svg?style=for-the-badge
[contributors-url]: https://github.com/paoloscofield/playstation-price-tracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/paoloscofield/playstation-price-tracker.svg?style=for-the-badge
[forks-url]: https://github.com/paoloscofield/playstation-price-tracker/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/paoloscofield/playstation-price-tracker/issues
[license-shield]: https://img.shields.io/github/license/paoloscofield/playstation-price-tracker.svg?style=for-the-badge
[license-url]: https://github.com/paoloscofield/playstation-price-tracker/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/paolo-scofield-design
[product-screenshot]: images/screenshot.png

<!-- Badge packages -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=for-the-badge
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=for-the-badge
[Express.js-url]: https://expressjs.com/
[Cheerio]: https://img.shields.io/badge/Cheerio-E88C1F?logo=cheerio&logoColor=fff&style=for-the-badge
[Cheerio-url]: https://cheerio.js.org/
[Axios]: https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=for-the-badge
[Axios-url]: https://axios-http.com/
[Node-cron]: https://img.shields.io/badge/NPM-Node--cron-%2300BAA9?style=for-the-badge
[Node-cron-url]: https://github.com/kelektiv/node-cron
[React-router]: https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=for-the-badge
[React-router-url]: https://reactrouter.com/en/main
[Chart.js]: https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=fff&style=for-the-badge
[Chart.js-url]: https://www.chartjs.org/
[Nodemon]: https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=for-the-badge
[Nodemon-url]: https://nodemon.io/
