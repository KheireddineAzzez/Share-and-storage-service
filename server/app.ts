import expresse from 'express'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import  cors from 'cors'
import session from 'express-session'
import mongose from 'mongoose'
import Userrout from './routes/User_router'
import cokieparser from 'cookie-parser'
import filerouter from './routes/File_route'
import  Sharedrouter  from './routes/Share_files_router'
const app=expresse();
mongose.connect(" mongodb+srv://khayry:azzez"+
"@cluster0.70l28.mongodb.net/project 0?retryWrites=true&w=majority",{
})

app.use(morgan('dev'))

app.use(cokieparser())
app.use(session({secret:'secret',saveUninitialized:true,resave:true,cookie:{maxAge:800000}}))


app.use(bodyparser.urlencoded({extended:false,limit:'500mb'}) )
app.use(bodyparser.json({limit:'500mb'}));
app.use(function (req, res, next) {

res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");

next();
});
app.use(cors())
app.set('trust proxy',1);

/**
 * Route of user
*/
app.use('/user',Userrout)
/**
 * Route of upload file
*/
app.use('/image',filerouter)
app.use('/shared',Sharedrouter)


export default app;
