import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default class InitFirebase {
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyCY7fMnKd2EeV1PgSio6IQUpn28EQsLMF4",
            authDomain: "justnotes-8ff79.firebaseapp.com",
            projectId: "justnotes-8ff79",
            storageBucket: "justnotes-8ff79.appspot.com",
            messagingSenderId: "995329747537",
            appId: "1:995329747537:web:919cbd8c337938af4e2670",
        };

        const app = firebase.initializeApp(firebaseConfig);
    }
}
