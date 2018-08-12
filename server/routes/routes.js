//const Todo = require('../models/hikeschema')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


//-----------------------
//------- Mongoose Models
//-----------------------

const User = mongoose.model('User', {
    name: String,
    password: String
});

const Trail = mongoose.model('Trail', {
    name: String,
    difficulty: String,
    location: String,
    complete: Boolean,
    rating: Number
});

const Camp = mongoose.model('Camp', {
    name: String,
    location: String,
    distance: String,
    rating: Number
});

const Activity = mongoose.model('Activity', {
    name: String,
    location: String,
    type: String,
    rating: Number
});

exports.types = `
type Query {
  hello(name: String): String!
  users: [User]
  trails: [Trail]
  camps: [Camp]
  activities: [Activity]
}

type User{
    id: ID!
    name: String!
    password: String!
}

type Trail{
    id: ID!
    name: String!
    difficulty: String!
    location: String!
    complete: Boolean!
    rating: Int
}

type Camp{
    id: ID!
    name: String!
    location: String!
    distance: String!
    rating: Int!
}

type Activity{
    id: ID!
    name: String!
    location: String!
    type: String!
    rating: Int!
}



type Mutation{
    createTrail(
        name: String!,
        location: String!,
        difficulty: String!,
        rating: Int,
    ): Trail

    createUser(
        name: String!,
        password: String!,
    ): User

    createCamp(
        name: String!,
        location: String!,
        distance: String!,
        rating: Int!
    ): Camp

    createActivity(
        name: String!,
        location: String!,
        type: String!,
        rating: Int!
    ): Activity
}
`

exports.resolve = {
    Query: {
      hello: (_, { name }) => `Hello ${name || 'World'}`,
      trails: ()=> Trail.find(),
      users: ()=> User.find(),
      camps: ()=> Camp.find(),
      activities: ()=> Activity.find(),

    },

    Mutation: {
        createUser: async (_, { name, password}) => {
            password = await bcrypt.hash(password, 12);
            const user = await new User({ name, password });
            await user.save();
            return user;
        },

        createTrail: async (_, { name, location, difficulty, rating  }) => {
            const trail = new Trail({ name, location, difficulty, rating, complete:false});
            await trail.save();
            return trail;
        },

        createCamp: async (_, { name, location, distance, rating}) => {
            const camp = new Camp({ name, location, distance, rating});
            await camp.save();
            return camp;
        },

        createActivity: async (_, { name, location, type, rating}) => {
            const activity = new Activity({ name, location, type, rating});
            await activity.save();
            return activity;
        },
    }
  }