import React, { useState, useEffect } from "react";

import WithHeader from "src/components/WithHeader";

const UnityScreen = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      <View style={Styles.container}>
        <Text>Hello JPHacks2020!</Text>
        <WebView
          originWhitelist={["*"]}
          // ここに使用URLを流す
          source={require("http://google.com")}
          style={{ marginTop: 50, marginBottom: 50 }}
        />
        <Text>Hello JPHacks2020</Text>
      </View>
    </>
  );
};

export default WithHeader(UnityScreen, "Unity");
