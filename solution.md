# Project Purple Cow
This is a proof of concept for a customer.  The customer would like a web application that shows
the number of hits on the app.

## My Solution
This app uses ReactJS and was created with Create React App(CRA).  It currently does not use any additional NPM or third-party libraries other than the ones CRA installs.  When the user enters the app, the hit count is incremented by one through a request to the countapi service.  It then displays the latest hit count data.  There is also a button that re-fetches and updates the view with the latest hit count data.  All HTTP requests are done with JavaScript's `fetch` method.


# Development
To run the app for development, run `yarn start`.  This will use Webpack to create a bundle, and then start a simple web server to serve the app.  Any changes saved to the source files will be hot-reloaded.
## Build the App
To build a production-ready version of the app, run `yarn build`.  In its current version, CRA uses Webpack to bundle the app source and static assets.  This is output to a folder called `build`.

## Run the App for Production
I am using the [serve](https://www.npmjs.com/package/serve) program to serve the static, bundled app files.  This is recommended by CRA's documentation, but any webserver can be used.  Such as nginx or apache.  To run using serve, first install it globally using `npm install -g serve`.  Then run with `serve -s build -l <port>`.

## Configure the Port
The port number that CRA will use is stored in the `.env` file with the name `PORT`.  This
can be changed to any valid, open port number on the server.  CRA will use the latest value
automatically.

## Build and Run with Docker
This app can be run with the provided `Dockerfile`.  Run the following command to build the image:

`docker build -t project_purple_cow .`

And run the following command to run the image in a container:

`docker run --env-file .env -p 3000:3000 project_purple_cow`

**Note: If you change the port number in `.env`, the port you tell Docker to open through the `-p` parameter needs to reflect that.**
### Future Updates
- Show current hit count in real time.  Polling, websocket, or real-time DB.
- Store the hit count state in a global context.  That way, parent components do no have to pass state down to deep child components.
- Unit tests.
- Switch to server-side rendering for faster first page loading.
- Use a CSS framework such as Tailwind or Styled-components for more maintainable CSS styles.