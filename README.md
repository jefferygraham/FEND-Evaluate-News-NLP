# # Evaluate a News Article with Natural Language Processing
This project requires is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. The tool uses an exciting new api called [Aylien](https://aylien.com/) to interact with their NLP system. This tool will gives back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

To install this project:

 1. Clone into repo:
	 - `$ git clone https://github.com/jefferygraham/FEND-Evaluate-News-NLP.git`
 2. Go to the root of the project 
	 - `$ cd FEND-Evaluate-News-NLP/`
 3. Install the dependencies
	 - `$ npm install`
## Running the project

The project has two modes: development & production.

### Run in development mode

To run in development mode on port 8080

- `$ npm run build-dev`

### Run in production mode

To run in production mode on port 8081

- `$ npm run build-prod`

- `$ npm run start`
## Testing

Testing is done with Jest. To run test, use the command

 - `$ npm run test`
## Project Resources
The is project uses:
 - [Webpack](https://webpack.js.org/) (for bundling & managing assets)
 - [Express](https://expressjs.com/)
 - [Aylien API](https://aylien.com/text-api/)
 - [Sass](https://sass-lang.com/)
 - [Bulma CSS](https://bulma.io/)
 - [Workbox](https://developers.google.com/web/tools/workbox/guides/codelabs/webpack) (for caching)