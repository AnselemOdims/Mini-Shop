import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

async function sendRequests(query) {
  const res = await client.query({ query });
  return res;
}

export default sendRequests;
