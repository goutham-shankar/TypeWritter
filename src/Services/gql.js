import { request, gql } from 'graphql-request'
const graphqlAPI = 'https://api-ap-south-1.hygraph.com/v2/clepw9juv03z601sz6w2kbvlf/master'
export const getPosts = async () => {
    const query = gql`
    query Seos {
        posts {
          id
          publishedBy {
            id
            name
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
      
      
    `
    const result = await request(graphqlAPI, query)
    return result.post   

}