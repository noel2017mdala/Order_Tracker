const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');


const OrdersType = new GraphQLObjectType({
    name: "Orders",
    description: "This represents all the orders",
    fields: () => ({
        uid: {type: GraphQLString},
        title: {type: GraphQLString},
        customer: {type: UsersCollection},
        bookingDate: {type: GraphQLString},
        address:  {type: AddressCollection},
    })
})

const UsersCollection = new GraphQLObjectType({
    name: "UsersCollection",
    description: "represents all customers",
    fields: () =>({
        uid:  {type: GraphQLString},
        name:  {type: GraphQLString},
        phone: {type: GraphQLString},
        email: {type: GraphQLString},
    })
})

const AddressCollection = new GraphQLObjectType({
    name: "AddressCollection",
    description: "this is a users address",
    fields: () =>({
        city: {type: GraphQLString},
        country: {type: GraphQLString},
        street: {type: GraphQLString},
        zip: {type: GraphQLString},
    })
})


module.exports = {
    AddressCollection,
    UsersCollection,
    OrdersType
}