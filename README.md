![Living Pokédex Banner](https://pbs.twimg.com/profile_banners/1470800535443943425/1647530094/1500x500)

# Living Pokédex 📝🎮

### [1. Getting Started with Create React App ](#getting-started-with-create-react-app) 💻
### [2. Firebase](#firebase) 🔥
### [3. Sprites](#sprites) 🎨
### [4. Deployment](#deployment) 📦


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<br>

# Firebase

## [.firebaserc](https://firebase.google.com/docs/cli#initialize_a_firebase_project)
>The **`.firebaserc`** file stores your settings for [managing project aliases](https://firebase.google.com/docs/cli#project_aliases) and [managing deploy targets](https://firebase.google.com/docs/cli/targets#manage_deploy_targets).

## [firebase.json](https://firebase.google.com/docs/hosting/full-config#where-to-define-config)
>You define your Firebase Hosting configuration in your **`firebase.json`** file. Firebase automatically creates your **`firebase.json`** file at the root of your project directory when you run the `firebase init` command.
>
>You can find a [full **`firebase.json`** configuration example](https://firebase.google.com/docs/hosting/full-config#firebase-json_example) (covering only Firebase Hosting) at the bottom of the Firebase Docs page. Note that a **`firebase.json`** file can also contain [configurations for other Firebase services](https://firebase.google.com/docs/cli#the_firebasejson_file).
>
>You can check the deployed **`firebase.json`** content using the [Hosting REST API](https://firebase.google.com/docs/reference/hosting/rest/v1beta1/sites.releases/list?apix_params=%7B%22parent%22%3A%22sites%2F%3Cyour-site-name%3E%22%2C%22pageSize%22%3A1%7D).

## [firestore.indexes.json](https://firebase.google.com/docs/reference/firestore/indexes)
>Cloud Firestore automatically creates indexes to support the most common types of queries, but allows you to define custom indexes and index overrides as described in the [Cloud Firestore guides](https://firebase.google.com/docs/firestore/query-data/index-overview).
>
>You can create, modify and deploy custom indexes in the Firebase console, or using the CLI. From the CLI, edit your index configuration file, with default filename **`firestore.indexes.json`**, and deploy using the `firebase deploy` command.

## [firestore.rules](https://firebase.google.com/docs/firestore/security/get-started#use_the_firebase_cli)
>You can deploy rules using the [Firebase CLI](https://firebase.google.com/docs/cli). Using the CLI allows you to keep your rules under version control with your application code and deploy rules as part of your existing deployment process.
>
>With [Cloud Firestore Security Rules](https://firebase.google.com/docs/firestore/security/rules-structure), you can focus on building a great user experience without having to manage infrastructure or write server-side authentication and authorization code.
>
>Security rules provide access control and data validation in a simple yet expressive format. To build user-based and role-based access systems that keep your users' data safe, you need to use Firebase Authentication with Cloud Firestore Security Rules.

# Sprites
We get the pokemon data from here: https://github.com/msikma/pokesprite/blob/master/data/pokemon.json

We get the sprites from this same repo: https://github.com/msikma/pokesprite

We only grab the sprites that we're gonna use, by running the script below:

```bash
#!/bin/bash
INDEX=1
for POKEMON in $(cat /mnt/c/Users/Josh/Projects/pokesprite/data/pokemon.json | jq -r 'to_entries[] | "\(.value | .slug.eng) \n "')
do
    if [ "$INDEX" -gt "898" ]
    then
        exit 0
    else
        echo $POKEMON
        cp /mnt/c/Users/Josh/Projects/pokesprite/pokemon-gen8/regular/$POKEMON.png /mnt/c/Users/Josh/Projects/Living-Pokedex-Create-React-App/public/sprites/
        ((INDEX++))
    fi
done
```

# Deployment

## Manual - [Firebase CLI](https://firebase.google.com/docs/cli)

### Deploy to Firebase Hosting Preview Channel

Windows
```PowerShell
npm run build
$Date = Get-Date -Format "dddd-MM-dd-yyyy-HH-mm-ss"
$Channel = "Preview-" + $Date
firebase hosting:channel:deploy $Channel --expires 7d --project living-pokedex-de070 --json
```

Linux
```Bash
npm run build
Date=$(date +'%A-%m-%d-%Y-%H-%M-%S')
Channel="Preview-"$Date
firebase hosting:channel:deploy $Channel --expires 7d --project living-pokedex-de070 --json
```

### Deploy to Firebase Hosting Live Channel
Windows
```PowerShell
npm run build
firebase deploy --only hosting --project living-pokedex-de070 --json
```

Linux
```Bash
npm run build
firebase deploy --only hosting --project living-pokedex-de070 --json
```

## Automatic - [Firebase Hosting GitHub Action](https://github.com/marketplace/actions/deploy-to-firebase-hosting)

1. Create a Pull Request to merge new feature branch into the Main branch.
2. Firebase Hosting GitHub Action will build and deploy the new changes to a Preview Channel on Firebase Hosting.
3. After testing the features at the Preview Channel URL, merge the Pull Request into the Main branch.
4. Firebase Hosting GitHub Action will build and deploy the new changes to the Live Channel on Firebase Hosting.

# TODO:
- [ ] Improve README about Sprites. Add bash script for PowerShell.


GitHub FIREBASE_TOKEN secret was created using `firebase login:ci` to create a token so that we can use the Firebase Tools CLI on the CI/CD system in GitHub Actions. When I get the list of existing preview channels.