import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';



const app = express(); 

//conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb+srv://herwintorres:Curso01606@cluster0.zlern.mongodb.net/AdministracionIPv6';
const options = {useNewUrlParser:true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => {
        console.log('Conetado a base de datos');
    },
    err => { console.log(err )}
);

//Middleware
//Pintar peticiones HTTP request
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

//Ruta
// app.get('/', function (req, res) { 
//     res.send('Hello World!'); 
// });
app.use('/api', require('./routes/usuario'));
app.use('/api', require('./routes/octetoprincipal'));
app.use('/api', require('./routes/octetounidad'));
app.use('/api', require('./routes/octetoequipo'));

// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback'); 
app.use(history());
// app.use(express.static(path.join(_dirname,'public')));

//puerto automatico en un hosting 
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
    console.log('Example app listenong on port'+app.get('puerto'));
});





