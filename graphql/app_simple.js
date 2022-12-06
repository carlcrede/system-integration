import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            message: {
                type: GraphQLString,
                resolve: () => 'Hello World',
            }
        }
    })
});

// express static public
app.use(express.static('public'));

const PORT = 8080;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
