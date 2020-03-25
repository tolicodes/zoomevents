import firebase from 'firebase';

const {
  REACT_APP_FIREBASE_API_KEY,
} = process.env;

const config = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: "ADD-YOUR-DETAILS-HERE",
  databaseURL: "ADD-YOUR-DETAILS-HERE"
};

export default () => {
  console.log(config);

  firebase.initializeApp(config);
  return {
    auth: firebase.auth,
    db: firebase.database()
  }
}
