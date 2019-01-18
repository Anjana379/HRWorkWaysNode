import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import employeeRoute from './api/employee/routes/employeeRoute';
import departmentRoute from './api/department/routes/departmentRoute';
import loginRoute from './api/login/routes/loginRoutes';
import visitorRoutes from './api/visitor/routes/visitorRoutes';
import lookupRoutes from './api/lookup/routes/lookupRoutes';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import config from './api/config';
const app = express();
const LISTEN_PORT = process.env.LISTEN_PORT || process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('dev')); 
app.set('superSecret', config.secret); // secret variable 

// route middleware to verify a token
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                console.log(decoded);
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});


employeeRoute(app);

app.listen(LISTEN_PORT, function () {
    console.log(`Listening on port ${LISTEN_PORT}`);
});

departmentRoute(app);
loginRoute(app);
visitorRoutes(app);
lookupRoutes(app);

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).send('Application error occured, Please contact System Administrator.');
});


