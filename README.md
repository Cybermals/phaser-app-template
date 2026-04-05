# phaser-app-template

A template for a Phaser app.

## Development Instructions
01. create a new repository using this template
02. edit `package.json` as needed
03. execute `npm install` to install the project dependencies
04. execute `npm run serve` to start a development server on port 8000
05. create your app

Note: If you want to create a `README.md` file for your project, rename this one to something like `README-template.md` and create a new `README.md` file.

## Deployment Instructions
### GitHub Pages
01. create a `gh-pages` branch
02. goto the Settings page for your project
03. click the Actions > General tab
04. check the Read and write permissions option under Workflow permissions
05. open `src/ghp-index.html` and change the base URL to `https://<your_github_username>.github.io/<repository_name>/`
06. your project will be automatically built and deployed to GitHub Pages whenever you push to the `main` branch
07. visit `https://<your_github_username>.github.io/<repository_name>/` to view your live project

### Other
01. execute `npm run build`
02. copy the contents of `dist/` to a web server
