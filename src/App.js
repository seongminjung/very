import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import AppRouter from "components/Router";
import Loading from "routes/Loading";
import "css/reset.css";
import "css/app.css";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faCaretDown);

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, []);
  return <>{init ? <AppRouter /> : <Loading />}</>;
}

export default App;
