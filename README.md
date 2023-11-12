<a name="readme-top"></a>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
 
  <h3 align="center">Language learning app</h3>

  <p align="center">
    Application that can insert a message on Spanish, English or Serbian, and app will translate the message to 2 of the remaining languages.
    <br />
    <a href="https://language-learning-app-milosdjurica.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/milosdjurica/language-learning-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/milosdjurica/language-learning-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Language learning app][product-screenshot]](https://language-learning-app-milosdjurica.vercel.app/)

Application that can insert a message on Spanish/English/Serbian, and app will translate the message to 2 of the remaining languages. I am planning to add useful language learning resources on another page in future. Also I want to add functionality to insert a specific word and then get more info about that word like pronunciation, and how word should be used in different context. How to use it in future or past tenses, how to change the gender, etc...

Application is created using Next.js. For authentication I used NextAuth. User can log in with credentials and with Google OAuth.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Application is created using Next.js. For authentication I used NextAuth. User can log in with credentials and with Google OAuth. For translations I am using Microsoft Translator Text API.

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Tailwind CSS](https://img.shields.io/badge/tailwind-css-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- [![NextAuth.js](https://img.shields.io/badge/nextauth.js-000000?style=for-the-badge&logo=next-dot-js&logoColor=white)](https://next-auth.js.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you can create your own copy of this app on your own machine, you will need a few things to get started.
You will need to provide GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET keys, and put them into .env file.
You also need to get API key from Microsoft Translator Text API. You should save that key into the MICROSOFT_API_KEY variable in .env file.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text/pricing](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text/pricing)
2. Clone the repo
   ```sh
   git clone https://github.com/milosdjurica/language-learning-app.git
   ```
3. Install NPM packages

   ```sh
   npm install
   ```

   Or

   ```sh
   yarn
   ```

4. Enter your API in `.env`
   ```js
   MICROSOFT_API_KEY = "ENTER YOUR API KEY";
   ```
5. Add Google Client ID and Google Client Secret to `.env`
   You can find more about it on this link: [https://next-auth.js.org/providers/google](https://next-auth.js.org/providers/google)

```js
GOOGLE_CLIENT_ID = "Google Client ID here";
GOOGLE_CLIENT_SECRET = "Google Client Secret goes here";
```

6. You will need to add a few more things to the .env file

```js
NEXTAUTH_URL = "http://localhost:3000";
NEXTAUTH_SECRET = "secret string for JWT";
NEXT_SECRET_USERNAME = "test username for credentials log in";
NEXT_SECRET_PASSWORD = "test password for credentials log in";
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Now you should be able to start application in your local environment and translate messages with it. Have fun learning!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/milosdjurica/language-learning-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Miloš Đurica - [My LinkedIn](https://www.linkedin.com/in/milosdjurica/) - milosdjurica.work@gmail.com

Project Link: [https://github.com/milosdjurica/language-learning-app](https://github.com/milosdjurica/language-learning-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/milosdjurica/language-learning-app.svg?style=for-the-badge
[contributors-url]: https://github.com/milosdjurica/language-learning-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/milosdjurica/language-learning-app.svg?style=for-the-badge
[forks-url]: https://github.com/milosdjurica/language-learning-app/network/members
[stars-shield]: https://img.shields.io/github/stars/milosdjurica/language-learning-app.svg?style=for-the-badge
[stars-url]: https://github.com/milosdjurica/language-learning-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/milosdjurica/language-learning-app.svg?style=for-the-badge
[issues-url]: https://github.com/milosdjurica/language-learning-app/issues
[license-shield]: https://img.shields.io/github/license/milosdjurica/language-learning-app.svg?style=for-the-badge
[license-url]: https://github.com/milosdjurica/language-learning-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/milosdjurica
[product-screenshot]: public/assets/translator.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[NextAuth.js]: https://img.shields.io/badge/nextauth.js-000000?style=for-the-badge&logo=next-dot-js
[NextAuth-url]: https://next-auth.js.org/
[Tailwind-url]: https://tailwindcss.com
