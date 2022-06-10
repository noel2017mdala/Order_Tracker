const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require("./GraphQl/Config");
require("dotenv/config");

const app = express();
const port = process.env.PORT || 8000;



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.ENVIRONMENT,

}))

app.listen(port, () =>{
    
    console.log(`Server started on port ${port}`);
})