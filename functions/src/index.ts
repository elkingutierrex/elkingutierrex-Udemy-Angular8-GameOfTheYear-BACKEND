import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://game-of-the-year-1ce4f.firebaseio.com"
})

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.json({
    mensaje: "Hola mundo desde funciones de Firabase!! OK"
 });
});

 export const getGOTY = functions.https.onRequest( async(request, response) => {

   // const nombre = request.query.nombre;

   const gotyRef  = db.collection('goty');
   const docsSnap = await gotyRef.get();
   const juegos = docsSnap.docs.map( doc => doc.data() );

   response.json( juegos );

});
