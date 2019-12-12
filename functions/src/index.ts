import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://game-of-the-year-1ce4f.firebaseio.com"
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.json({
    mensaje: "Hola mundo desde funciones de Firabase!! OK"
 });
});
