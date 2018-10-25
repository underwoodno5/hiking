const express = require('express');
const mongoose = require ('mongoose');
const dbConfig = require('./config/dbconfig')
const { GraphQLServer } = require( 'graphql-yoga');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const { graphiqlExpress, graphqlExpress } = require ('graphql-server-express');
const app = express();
//app.use(bodyParser.urlencoded({ extended:true }));



//------------------
//---- GraphQL setup
//------------------
const typeDefs = routes.types
const resolvers = routes.resolve
const server = new GraphQLServer({ typeDefs, resolvers })

/*
//----------------------
//---- JWT Authorization
//----------------------

-const addUser = async (req,res) => {
    const token = req.headers['authentication'];
    try{
       const{user} = jwt.verify(token, 'secretkey');
       req.user = user;
    }catch (err){
        console.log(err)
    }
    res.next();
}

app.use(addUser);-
*/

app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    }),
  );

//----------------------------
//---- GRAPHQL EXPRESS CONNECT
//----------------------------

app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(req => ({
      schema,
      context: {
        resolvers,
        user: req.user,
      },
    })),
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