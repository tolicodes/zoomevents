import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDY1h4HSvIHB5nTMbIcccj9WhZOy8bgqe0",
  authDomain: "zoomevents-47195.firebaseapp.com",
  databaseURL: "https://zoomevents-47195.firebaseio.com",
  projectId: "zoomevents-47195",
  storageBucket: "zoomevents-47195.appspot.com",
  messagingSenderId: "779883000126",
  appId: "1:779883000126:web:273b0e87c758eb5011fc6f",
  measurementId: "G-PFNKQDPYWD"
};

export default async () => {
  Firebase.initializeApp(firebaseConfig);

  const eventsRef = Firebase.database().collection('events').get();

  console.log(eventsRef.docs)
}