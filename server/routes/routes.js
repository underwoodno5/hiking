//const Todo = require('../models/hikeschema')
const mongoose = require('mongoose');

const Trail = mongoose.model('Trail', {
    text: String,
    complete: Boolean,
    rating: Number
});

exports.types = `
type Query {
  hello(name: String): String!
}

type Trail{
    id: ID!
    text: String!
    complete: Boolean!
    rating: Int
}

type Mutation{
    createTrail(text: String!, rating: Int): Trail
}
`

exports.resolve = {
    Query: {
      hello: (_, { name }) => `Hello ${name || 'World'}`,
    },

    Mutation: {
        createTrail: async (_, { text, rating }) => {
            const trail = new Trail({ text, complete:false, rating});
            await trail.save();
            return trail;
        }
    }
  }