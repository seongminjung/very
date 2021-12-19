import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fb_info";
import Loading from "routes/Loading";
import "css/reset.css";
import "css/app.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faCaretDown);

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  return <>{init ? <AppRouter userObj={userObj} /> : <Loading />}</>;
}

export default App;
