// @flow
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import { graphql } from "graphql";
import schemaString from "./schema.gql";

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs: schemaString });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema });

const query = `
query tasksForUser {
  user(id: 6) { id, name }
}
`;

graphql(schema, query).then(result => console.log("Got result", result));
