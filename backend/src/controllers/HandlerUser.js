const firebase = require('../firebase/config');
const FackeAvatar = require('../util/fackeAvatar')

module.exports = {
    async index(req, res) {
         const auth = firebase.auth();
         const currenctUser = await auth.currentUser;

         return res.json(currenctUser)
    },

    
    async createUser(req, res) {
        const { 
            email,
            userName, 
            password, 
            firstName, 
            lastName, 
            phoneNumber } = req.body;
            console.log(userName)
        const auth = firebase.auth();

        await auth.createUserWithEmailAndPassword(email, password)
       .then( async (data) => {
            const firestore = firebase.firestore();
            const saveUserInffo = firestore
            .doc(`users/${userName}`)
            .set({
                uid: data.user.uid,
                email,
                userName,
                firstName,
                lastName,
                phoneNumber,
                photoURL: FackeAvatar,
                createdAt: Date.now()
            }, { merge: true});
           
            await data.user.updateProfile({
                displayName: firstName + ' '+ lastName,
                photoURL: FackeAvatar
             })
            return res.json(data)
        })
        .catch((err) => {
            console.log('Something is wrong', err);
            return res.json(err)
        });

       
    },


   
    
async updateUser(req, res) {
    const { 
        firstName, 
        lastName, 
        photoUrl, 
        userName, 
        phoneNumber 
    }  = req.body;

   const auth = firebase.auth();

  await auth.currentUser.updateProfile({
    displayName: firstName + ' ' +lastName,
    photoUrl, 
    
   }).then(async data => {
       const db = firebase.firestore();
       await db.collection('users').add({
        firstName, 
        lastName, 
        photoUrl, 
        userName, 
        phoneNumber 
       }).then(data => {
        return res.json(data)
       }).catch(err => {
        return res.json(err)
       })
       
   })
   .catch(err => {
       return res.json(err)
   })
}
    
}


