# Git Commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits


# Various commands.  See package.json
yarn install :  builds dependencies
yarn run dev-server    :   runs the dev server

# Git Commands



# setup instructions

The app uses firebase so you must install that first.  If you wish to bypass this I recommend setting the dashboard to be a
private route in src/routers/AppRouter.js.  If you go in this direction you will need to change other firebase vars.

0.  At the console enter "yarn install" to build dependencies
1.  Create a firebase project at console.firebase.google.com (or use an existing project)
2.  On the console homepage choose "Add Firebase to your web app". Pick an app name. Note the data on the next screen. 
2.  In "Realtime" page, create a Realtime Database.  Choose for it to be in "test mode" so that it is wide open.
3.  Go to "Authentication" and then "Sign-in Method" tab.  Enable "Google". Be sure to add your Heroku domain to the Authentication tab in console.
4.  We are storing firebase auth info in two separate files that you will need to create in root.
    These files contain the auth information for dev and test db (prod details are stored directly into heroko account)
    a. .env.development      - this is the config file for dev.  It is already in .gitignore
    b. .env.test             - this is the config file for test.  It is already in production
5.  Both files will have the same format. Note that you can have different dbs and config files for each environment. Note that in production you will note have these files as they aren't in git and thus wouldn't be pushed to production. Instead, use heroku cli to add them to heroku.  example:  heroku config:set FIREBASE_API_KEY=AIzaSyDQ029y4TdX8rGRYh0gTzzzzzzzzzzzz.  Note that you can do them all in a single statement - just separate each key pair with a space.
    Example (insert your own data):

    FIREBASE_API_KEY=AIzaSyDQ029y4TdX8rGRYh0gTzzzzzzzzzzzz
    FIREBASE_AUTH_DOMAIN=movie-reviews-77f2.firebaseapp.com
    FIREBASE_DATABASE_URL=movie-reviews-83f22.firebaseapp.com
    FIREBASE_PROJECT_ID=https://movie-reviews-83f22.firebaseio.com
    FIREBASE_STORAGE_BUCKET=movie-reviews-83f22.appspot.com
    FIREBASE_MESSAGING_SENDER_ID=252234567

6.  The configuration has the bones for automatic builds when pushed to heroku.  You will need to set up the connection using Heroku CLI (this assumes that you have already had git installed). Once this is done you can simply issue 'git push heroku master' and your app will be pushed to heroku and automatically built.

