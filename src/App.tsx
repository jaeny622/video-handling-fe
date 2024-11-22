import { Suspense, useEffect } from "react";

import GlobalRoutes from "./Routes/Routes";
import Loading from "./Pages/Loading";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:4000";
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <GlobalRoutes />
    </Suspense>
  );
}

export default App;
