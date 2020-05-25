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


   
    

    
}


