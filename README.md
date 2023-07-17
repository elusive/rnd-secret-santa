<svg fill="none" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
            <style>
            img {
                display: flex;
                justify-items: right;
                align-items: right;
                float: middle;
                vertical-align: middle;
                width: 90px;
                height: 90px;
                margin: auto auto;
                border-radius: 50%;
            }
            </style>
            <img src="./public/logo192.png" alt="Secret Santa Logo" />
    </foreignObject>
</svg>

# Secret Santa Web App 

This application is designed using React hooks, SQLite and Material Design UI components. The application allows the employees to sign in and identify themselves. Once identified a random number [service](https://random.org) is used to acquire a truly random number used to select the user's secret santa assignment from the list of unassigned employees that remains at the time of the user signing in.

You can run the application locally using _yarn_ or _npm_ with the instructions in this document.

## Getting Started

In the project directory, you can run the web app using:

### `yarn start`

This runs the app in the development mode.<br />
Open [http://localhost:9999](http://localhost:9999) to view it in the browser.

### `yarn build`

Builds the app for production to the `dist` folder.<br />

### `yarn debug`

This builds the application code and executes using node inspect for debugging.


## Roadmap
This is a small todo list:
1. Add back a script to copy static assets to the `dist` folder.
2. Automate the deployment of the dist folder somehow.
3. Fix the display of the form errors on signup page.
