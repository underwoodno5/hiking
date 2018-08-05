//const express = require('express');
const mongoose = require ('mongoose');
//const bodyParser = require('body-parser');
const dbConfig = require('./config/dbconfig')
const { GraphQLServer } = require( 'graphql-yoga');
const routes = require('./routes/routes')

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