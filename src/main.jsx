import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import localClient from "./apolloClients/localClient";
import externalClient from "./apolloClients/externalClient";
import { ApolloProvider as LocalApolloProvider } from "@apollo/client";
import { ApolloProvider as ExternalApolloProvider } from "@apollo/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalApolloProvider client={localClient}>
      <ExternalApolloProvider client={externalClient}>
        <App />
      </ExternalApolloProvider>
    </LocalApolloProvider>
  </React.StrictMode>
);
