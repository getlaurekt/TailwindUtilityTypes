<a name="readme-top"></a>

<div align="center">

<!-- [![Contributors][contributors-shield]][contributors-url] -->

[![Forks][forks-shield]][forks-url]

<!-- [![Stargazers][stars-shield]][stars-url] -->

[![Issues][issues-shield]][issues-url]

<!-- [![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/getlaurekt/TailwindUtilityTypes">
    <img src="https://i.imgur.com/1fmmYt9.png" alt="Logo" width="250" height="105">
  </a>

  <h3 align="center">Tailwind Utility Types</h3>

  <p align="center">
    Types for all utility classes in Tailwind
    <br />
    This supports tailwind version <a href="https://github.com/tailwindlabs/tailwindcss/compare/v3.2.3...v3.2.4"><strong>3.2.4</strong></a>
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
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
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <!-- <li><a href="#contact">Contact</a></li> -->
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

I have built this package mainly for one specific project and my own usage to keep stable structure and design system in the [astro](https://astro.build/) components to don't allow others to use utility classes or overall css classes that are not a part of tailwind or of the props typed by me. It's giving more restricted range of styles that we can use if our styling is based on tailwind and we can use one of utility types as a one of our props. It's giving similiar feeling what styled components are giving us, but in more class based way using tailwind. Many people are using tailwind in wrong way making classes out of the tailwind directives scope and trying to use them inside directives(that's not cool) and I don't really like it, so I wanna allow to use only default tailwind classes and this is the reason why I have made this package for. So in conclusion the goal is to set all font-weight utility classes to a prop that's for styling our text for an example, so we can limit specific font/text based utility classes to this prop and we can don't allow others to use any other classes out of this range.

This project is not for public usage and here's why:

- This was mainly made for one specific project and for my own usage and needs
- You shouldn'use it for production apps or any of your own project, since it wasn't designed to be used by others and to provide great DX
- You can use this package, but don't expect me to implement x cause you need something, do it by yourself

Of course I'm open for SUGGESTIONS cause sometimes somebody can give a cool idea and I'm gonna try to improve the usage of this project and yes I know I could use postcss to generate types, but it wasn't good for my needs and my own case.

Documentation will pop up in the nearest future to give some hints, how you can use it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Typescript][ts-shield]][ts-url]
- [![Vite][vite-shield]][vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

<!-- ## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. -->

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ``` -->

<!-- ### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

## Roadmap

- [x] Add Utility Classes
  - [ ] Modifiers
- [x] Add Collection Classes
  - [x] Single Class
  - [ ] Multi Class

See the [open issues](https://github.com/getlaurekt/TailwindUtilityTypes/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTACT -->

<!-- ## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Shotout to:

- [Tailwind Docs](https://tailwindcss.com/docs/installation)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/getlaurekt/TailwindUtilityTypes.svg?style=for-the-badge
[forks-url]: https://github.com/getlaurekt/TailwindUtilityTypes/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/getlaurekt/TailwindUtilityTypes.svg?style=for-the-badge
[issues-url]: https://github.com/getlaurekt/TailwindUtilityTypes/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[ts-shield]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[ts-url]: https://www.typescriptlang.org/
[vite-shield]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev/
