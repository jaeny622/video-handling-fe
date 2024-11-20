import { Suspense } from "react";

import GlobalRoutes from "./Routes/Routes";
import Loading from "./Pages/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <GlobalRoutes />
    </Suspense>
  );
}

export default App;
