const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

const { getOrders,getUserCollection}  = require('./Queries');
const admin = require("../Config/config");
const db = admin.firestore();

const {
    AddressCollection,
    UsersCollection,
    OrdersType
} = require("./graphqlTypes")

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",

    fields: () =>({
        orders: {
            type: new GraphQLList(OrdersType),
            description: "List of all orders",
            resolve: getOrders
        },

        users: {
            type: new GraphQLList(UsersCollection),
            description: "Returns all users",
            resolve: getUserCollection
        },

        order: {
            type: new GraphQLList(OrdersType),
            description: "Return a single older based on id",
            args: {
                id: {type: GraphQLString},
            },
            resolve:  async (parent, args)  => {
                let data = [];
                const citiesRef = db.collection('orders');
                const snapshot = await citiesRef.where('uid', '==', args.id).get();
             if(snapshot.empty){
                    console.log("empty list");
                    return;
                }

                snapshot.forEach(docs =>{
                    
                    data.push({
                        ...docs.data()
                    })
                })
                return data;
            }
        },

        emailOrders: {
            type: new GraphQLList(OrdersType),
            description: "Return a single older based on id",
            args: {
                email: {type: GraphQLString},
            },

            resolve: async (parent, args) =>{
                let data = [];
                const citiesRef = db.collection('orders');
                const snapshot = await citiesRef.where('customer.email', '==', args.email).get();
                if(snapshot.empty){
                    console.log("empty list");
                    return;
                }

                snapshot.forEach(docs =>{
                    data.push({
                        ...docs.data()
                    })
                })
                return data;
            }
        }
    })
})


const schema = new GraphQLSchema({
    query: RootQueryType,
})

module.exports = schema;