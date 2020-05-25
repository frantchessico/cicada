const firebase = require('../firebase/config');

module.exports = {
    

    async login(req, res) {
        const auth = firebase.auth();
        
        const {email, password} = req.body
        const user = auth.signInWithEmailAndPassword(email, password)
        .then( user => {
            return res.json(user)
        })
        .catch((err) => console.log(err))

        
    }, 

    

    
}


