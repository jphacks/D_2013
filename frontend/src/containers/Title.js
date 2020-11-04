import React, { useState, useEffect } from "react";

import WithHeader from "src/components/WithHeader";

const UnityScreen = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      
    </>
  );
};

export default WithHeader(UnityScreen, "Unity");
