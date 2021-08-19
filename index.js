import routes from './src/routes/crmRoutes';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';

const express = require('express')
const app = express();
const PORT = 5500;


// Mongoos Connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// setup bodyparser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
routes(app);
// Serving Statics files 
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send(` Node and Express Server Runing in Port ${PORT}`)
});


app.listen(PORT, () => {
  console.log(` Server is runing on port ${PORT}`);
});
