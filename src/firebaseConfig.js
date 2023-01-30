import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBMALsEJdY-5mcAWMCAwjJq9qrJ-3VkVyA", // use environment variable for the API key later on
    authDomain: "dandy-chat-app.firebaseapp.com",
    databaseURL: "https://dandy-chat-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dandy-chat-app",
    storageBucket: "dandy-chat-app.appspot.com",
    messagingSenderId: "586617026997",
    appId: "1:586617026997:web:58472965a4b47987c441fc",
    measurementId: "G-7ZFKJXEFEK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)