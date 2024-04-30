import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { deleteUser } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPSgh2yUtFn1TsVM8YfmL8uHIaDo6yA5A",
  authDomain: "foodordering-eead9.firebaseapp.com",
  projectId: "foodordering-eead9",
  storageBucket: "foodordering-eead9.appspot.com",
  messagingSenderId: "51995432358",
  appId: "1:51995432358:web:e46f03fb4be7a42bbcab67",
  measurementId: "G-1JB8T8WLT5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Function to delete user account (example)
const deleteUserAccount = () => {
  const user = auth.currentUser;

  if (user) {
    user.delete().then(() => {
      console.log("User account deleted successfully.");
    }).catch((error) => {
      console.error("Error deleting user account:", error.message);
    });
  }
};

export { app, auth, provider, deleteUserAccount };
