# moviedb-front_vite

moviedb-front_vite is a front end for The Movie Database (TMDb) API.

## Prerequisite

1. Create an account on [TMDb](https://www.themoviedb.org/)
2. Generate an API key (as described [here](https://developers.themoviedb.org/3/getting-started/introduction) .
3. have a package manager. I personnaly use npm

## Installation

To run moviedb-front_vite locally, follow these steps:

1. Clone the repository and navigate to the project folder:
```bash
git clone git@github.com:lchan42/moviedb_front_vite.git
cd moviedb-front_vite
cd tmdb_frontend
```
2. Create a .env file in the root directory of the project:
``` bash
mkdir .env
```

3. Inside the .env file, add the following line with your TMDb API key. Don't forget to replace "your_api_key" with your actual API key and make sure to keep the double quotes::
``` bash
VITE_API_KEY="your_api_key"
```

4. Install dependencies:
```bash
npm install
```
5. Start the development server:
```bash
npm run dev
```

## Usage

Open http://localhost:5173 in your browser to view the application.
