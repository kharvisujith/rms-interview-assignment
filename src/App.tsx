import React, { useContext } from "react";
import { componentProps, uiJson } from "./utils";
import Canvas from "./uiEngine";
import { GET_ALL_COMPONENTS } from "./utils/componentConfigs";
import { AuthContext } from "./context/AuthContectProvider";
import StartQuiz from "./screens/quiz/StartQuiz";
import RoutesPage from "./routes/RoutesPage";

function App() {
  const authContext = useContext(AuthContext);

  // Show the loading spinner while the user is not authenticated
  if (!authContext.isAuthenticated) {
    return <p>Loading</p>;
  }
  // If the user is authenticated display the home component
  else {
    return (
      <>
        {/* {console.log(
          "the valueof authcontext is",
          authContext,
          authContext.isAuthenticated
        )} */}
        {/* <Canvas componentProps={componentProps} getComponent={GET_ALL_COMPONENTS} layoutConfig={uiJson} /> */}
        {/* <StartQuiz /> */}
        {/* <button onClick={authContext.logout}>logout</button> */}

        <RoutesPage />
      </>
    );
  }
}

export default App;
