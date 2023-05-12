import React from 'react';
import ReactDOM from 'react-dom/client';
import{FirebaseContext}from './stor/firebasecontext'
import App from './App';
import Firebase from './component/constants/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


   <FirebaseContext.Provider value={{Firebase}}>
       <App />
   </FirebaseContext.Provider> 
  
,document.getElementById('root')
);



