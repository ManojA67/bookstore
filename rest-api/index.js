//const bodyParser = require('body-parser')
let express = require('express')
    
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDb = require('./database/db');
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
    useNewurlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connected')
},
    error => {
        console.log('database error:' + error)
    }
)
//next we create port and server
const bookRoute = require("./node-backend/routes/book.routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

//API root
app.use('/api', bookRoute);

//PORT create

const port = 4000
app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  });




