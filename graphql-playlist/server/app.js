const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose')

const app = express();


mongoose.connect('mongodb+srv://Ennyola:bolingku@cluster0-hf39w.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log("Database Connected")
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}));

app.listen(4000, () => {
    console.log("App is now listening on port 4000")

})