<!-- TITLE -->
<div align="center">
  <h1 align="center">Geonotes Express React</h1>
</div>

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#run">Run</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>  



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://www.geonotes.app)

This is an example of how to set up a project using Express, React and Open Layers.

It includes an example of a CRUD API endpoint for retrieving GeoJSON and a React front-end that uses axios to consume it.

See an example of this app running here: 
[https://www.geonotes.app](https://www.geonotes.app)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

<!-- PREREQUISITES -->
### Prerequisites

Make sure Node and NPM are installed.
* npm
  ```sh
  npm install npm@latest -g
  ```
<!-- INSTALLATION -->
### Installation

Clone the repo and install the required packages:

1. Clone the repo
   ```sh
   git clone https://github.com/OliverAHolmes/geonotes-express-react
   ```
2. Navigate to the project directory
   ```sh
   cd geonotes-express-react
   ```
3. Install Express Server NPM packages
   ```sh
   npm install
   ```
4. Install React Client NPM packages
   ```sh
   cd client && npm install && cd ..
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- RUN -->
## Run 

To run the project locally you can run the Express API server on one terminal and the React front-end server on another:

1. Open a terminal and run:
   ```sh
   npm run start
   ```
2. Open another terminal and run:
   ```sh
   cd client && npm run start
   ```

Happy hacking!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Create Express API.
- [x] Create React front-end with Open Layers integration.
- [x] Display GeoJSON on Open Layers map.
- [x] Create GeoJSON API link to Express server.
- [x] Add Express GeoJson link.
- [ ] Add GraphQL support.
- [ ] Create Rest Integration Tests.
- [ ] Create GraphQL Integration Tests.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Oliver Holmes - [Medium](https://oliverholmes.com.au/)

Project Link: [https://github.com/OliverAHolmes/geonotes-express-react](https://github.com/OliverAHolmes/geonotes-express-react)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: images/screenshot.png