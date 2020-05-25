const express = require('express');

const app = express();

require('./db/db');
const routes = require('./routes/routes')





app.use(express.json())

app.use(routes)

const port = process.env.PORT || 3000;








app.listen(3000, console.log(`server on port ${port}`))

