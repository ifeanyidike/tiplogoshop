import React, {useState} from "react"
import HomePage from "./pages/HomePage"
import {Switch, Route} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import SideDrawer from "./components/SideDrawer"


function App() {
  const [showDrawer, setShowDrawer] = useState(false)
  
  return (
    <AnimatePresence>  
          
      <SideDrawer key="sidedrawer" showDrawer={showDrawer} setShowDrawer={setShowDrawer} />  
      <Switch>
        <Route path="/" exact>
          <HomePage setShowDrawer={setShowDrawer} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
