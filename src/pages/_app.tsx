import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

import "@/styles/globals.css";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
