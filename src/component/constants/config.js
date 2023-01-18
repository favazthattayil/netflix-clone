import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDUdPB4mXNgdfnZvrMHcKnz-hqchgRY05w",
    authDomain: "netflixsignin-c6628.firebaseapp.com",
    projectId: "netflixsignin-c6628",
    storageBucket: "netflixsignin-c6628.appspot.com",
    messagingSenderId: "136879632297",
    appId: "1:136879632297:web:142f2b798111e3ea955eb8",
    measurementId: "G-WB2HL5NW0B"
  };
  
  const Firebase = initializeApp(firebaseConfig);
   
export default Firebase