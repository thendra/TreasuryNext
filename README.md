A rebuild of a React client SPA in Next.js with Hasura, Apollo, Material UI and authentication with 0Auth to demonstrate the differences between client and server side applications with these key technologies. 

Important take aways:
- To use material-ui we must wrap the context of the application with the 'ServerStyleSheets' from the library, passing the styles the the children along with initial props. Easy to implement following docs https://material-ui.com/guides/server-rendering/
- Apollo is quite complicated to integrate and understand but is doable by following this tutorial https://hasura.io/learn/graphql/nextjs-fullstack-serverless/apollo-client/
