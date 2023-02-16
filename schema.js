const graphQL = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema} = graphQL;

const data = [
    {
        registrationID: '1',
        name: 'saurab',
        degree: 'B.Tech.',
        pincode: '121211'
    },    
    {
        registrationID: '2',
        name: 'saub',
        degree: 'B.T.',
        pincode: '1211'
    }
]

const studentType = new GraphQLObjectType({
    name: 'Student',
    fields: ()=>({
        registrationID: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        degree: {
            type: GraphQLString
        },
        pincode: {
            type: GraphQLInt
        }
    })
});

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        student: {
            type: studentType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args){
                console.log(typeof args.id);
                return data.filter(el => el.registrationID === args.id)[0]
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: rootQuery
})