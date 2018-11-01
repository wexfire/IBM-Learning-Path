<<<<<<< HEAD
/**
 * @file application server file.
 * @author Rabah Zeineddine
 */

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let path = require('path');
let routes = require('./buildSrc/routes');

let w3id = require('./buildSrc/w3id');


app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.get('/ofertas_mp', routes.ofertas_mp);
app.get('/ofertas_indev', routes.ofertas_indev);
app.get('/ofertas_dba', routes.ofertas_dba);
app.get('/was', routes.was);
app.get('/icp_cursos', routes.icp_cursos);
app.get('/foundation_skill_series', routes.foundation_skill_series);
app.get('/cursos_icp_4_app', routes.cursos_icp_4_app);
app.get('/cognitive_call_center', routes.cognitive_call_center);
app.get('/dba_digital_worker', routes.dba_digital_worker);
app.get('/api_connect', routes.api_connect);
app.get('/aspera', routes.aspera);
app.get('/flex_devops', routes.flex_devops);
app.get('/ibm_app_connect', routes.ibm_app_connect);
app.get('/digitalize_negocios_na_cloud', routes.digitalize_negocios_na_cloud);
app.get('/digital_labor', routes.digital_labor);



/* W3ID app configurations */
w3id.setAppURL("https://ibm-learning-path.mybluemix.net/");
w3id.setAssertPage("auth.html");
w3id.setAssertEndpoint("/assert");
w3id.init(app);

// Starting point for login
app.get("/login", w3id.login);

// Assert endpoint for when login completes
app.post("/assert", w3id.assert);

app.get('/metadata.xml', w3id.metadata);

// Use your own strategy to authenticate a user, we are going to use BlueGroup.
app.post('/api/v1/authenticate', (req, res) => {
    let user = req.body;
    let authenticated = false;
    for(let bluegroup of user.blueGroups){
        if(bluegroup.name == "W3ID Sample") { // You can choose whatever you want, as long as you add your users to that bluegroup.
            authenticated = true;
            break;
        }
    }
    if(authenticated){
        res.status(200).json({authenticated, redirect: '/home'});
    }else{
        res.status(403).json({authenticated, redirect: '/'});
    }
});


app.listen(app.get('port'), '0.0.0.0', () => {
    console.log(`Server starting on ${app.get('port')} `);
=======
/**
 * @file application server file.
 * @author Rabah Zeineddine
 */

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let path = require('path');
let routes = require('./buildSrc/routes');

let w3id = require('./buildSrc/w3id');


app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.get('/ofertas_mp', routes.ofertas_mp);
app.get('/ofertas_indev', routes.ofertas_indev);
app.get('/ofertas_dba', routes.ofertas_dba);
app.get('/was', routes.was);
app.get('/icp_cursos', routes.icp_cursos);
app.get('/foundation_skill_series', routes.foundation_skill_series);
app.get('/cursos_icp_4_app', routes.cursos_icp_4_app);
app.get('/cognitive_call_center', routes.cognitive_call_center);
app.get('/dba_digital_worker', routes.dba_digital_worker);
app.get('/api_connect', routes.api_connect);
app.get('/aspera', routes.aspera);
app.get('/flex_devops', routes.flex_devops);
app.get('/ibm_app_connect', routes.ibm_app_connect);
app.get('/digitalize_negocios_na_cloud', routes.digitalize_negocios_na_cloud);
app.get('/digital_labor', routes.digital_labor);



/* W3ID app configurations */
w3id.setAppURL("https://ibm-learning-path.mybluemix.net/");
w3id.setAssertPage("auth.html");
w3id.setAssertEndpoint("/assert");
w3id.init(app);

// Starting point for login
app.get("/login", w3id.login);

// Assert endpoint for when login completes
app.post("/assert", w3id.assert);

app.get('/metadata.xml', w3id.metadata);

// Use your own strategy to authenticate a user, we are going to use BlueGroup.
app.post('/api/v1/authenticate', (req, res) => {
    let user = req.body;
    let authenticated = false;
    for(let bluegroup of user.blueGroups){
        if(bluegroup.name == "W3ID Sample") { // You can choose whatever you want, as long as you add your users to that bluegroup.
            authenticated = true;
            break;
        }
    }
    if(authenticated){
        res.status(200).json({authenticated, redirect: '/home'});
    }else{
        res.status(403).json({authenticated, redirect: '/'});
    }
});


app.listen(app.get('port'), '0.0.0.0', () => {
    console.log(`Server starting on ${app.get('port')} `);
>>>>>>> 64cc3e297596dfd73b047b91fc99761009c9d840
})