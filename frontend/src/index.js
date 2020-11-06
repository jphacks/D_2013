import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { registerRootComponent } from "expo";
import React from "react";
import App from "src/App";

import firebase from "firebase";
import { FireclientProvider } from "react-fireclient";
import { AuthProvider } from "src/utils/auth";
import { config } from "src/utils/config";

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

const Root = () => (
  <FireclientProvider firestoreDB={db}>
      <AuthProvider auth={auth}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <App />
        </ApplicationProvider>
      </AuthProvider>
    </FireclientProvider>
);

registerRootComponent(Root);
