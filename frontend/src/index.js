import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { registerRootComponent } from "expo";
import React from "react";
import App from "src/App";

import { FireclientProvider } from "react-fireclient";

const Root = () => (
  <FireclientProvider firestoreDB={db}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <App />
      </ApplicationProvider>
  </FireclientProvider>
);

registerRootComponent(Root);
