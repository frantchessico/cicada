const mongoose = require('mongodb');

const url = 'mongodb://localhost/itrends';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
   
})
.then(() => console.log('DB is connected successfully'))
.catch(() => console.log('Error in connection'))


module.exports = mongoose;


