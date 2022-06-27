import gql from 'graphql-tag';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';

export const TEST_QUERY = gql`
  {
    currencies {
        label
        symbol
    }
  }
`;

export const PRODUCT_QUERY = (type) => {
  const req = gql`
    {
      category(input: { title: "${type}" }) {
        name
        products {
            id
            name
            inStock
            gallery
            description
            category
            brand
            attributes {
                id
                name
                type
                items {
                    displayValue
                    value
                    id
                }
            }
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
        }
      }
    }
`;
  return req;
};
