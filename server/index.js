const express = require('express');
const mongoose = require ('mongoose');
const redis = require("redis");
//const bodyParser = require('body-parser');
const dbConfig = require('./config/dbconfig')
const { GraphQLServer } = require( 'graphql-yoga');
const routes = require('./routes/routes');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const SESSION_SECRET = "apineconefull";


const app = express();


//const app = express();
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended:true }));
//mongoose.Promise = global.Promise;

//------------------
//---- GraphQL setup
//------------------
const typeDefs = routes.types
const resolvers = routes.resolve
const server = new GraphQLServer({ typeDefs, resolvers })

//-------------------
//---- EPRESS SESSION
//-------------------
app.use(
    session({
      store: new RedisStore({}),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    })
  );

//--------------
//---- DB setup
//--------------

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
.then(()=>{
    console.log('successful db connection');
}).catch(err => {
    console.log('coule not connect to db. exiting');
    process.exit();
});

mongoose.connection.once('open',function() {
    server.start(() => console.log("server is running on 4000"));
});