// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  name: 'Development',
  firebaseConfig: {
    apiKey: "AIzaSyAJqEztFRYYgp-S-WAJO20M_YNOnA_xfv8",
    authDomain: "sopps.firebaseapp.com",
    databaseURL: "https://sopps.firebaseio.com",
    projectId: "firebase-sopps",
    storageBucket: "firebase-sopps.appspot.com",
    messagingSenderId: "630469965694"
		/*apiKey: "YOUR_DEV_API_KEY",
		 authDomain: "YOUR_DEV_PROJECT_ID.firebaseapp.com",
		 databaseURL: "https://YOUR_DEV_PROJECT_ID.firebaseio.com",
		 storageBucket: "YOUR_DEV_PROJECT_ID.appspot.com",
		 messagingSenderId: "YOUR_DEV_MESSAGE_ID"*/
  }
};
