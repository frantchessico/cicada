const firebase = require('../firebase/config');

module.exports = {
    async createUser(req, res) {
        const { email, password } = req.body;
        const auth = firebase.auth();

        await auth.createUserWithEmailAndPassword(email, password)
       .then((data) => {
            console.log('Your account was created succefully');
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


