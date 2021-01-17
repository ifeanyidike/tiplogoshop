import React, {useState, useEffect} from "react"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import AllServicesPage from "./pages/AllServicesPage"
import ProfilePage from "./pages/ProfilePage"
import CardPage from "./pages/CardPage"
import AllCardsPage from "./pages/AllCardsPage"
import ChangeOfCourseInstitutionPage from "./pages/ChangeOfCourseInstitutionPage"
import EditItem from "./pages/EditItemPage"
import PayOrder from "./pages/PayOrderPage"
import OLevelUploadPage from "./pages/OLevelUploadPage"
import JambPasswordResetPage from "./pages/JambPasswordResetPage"
import ActivateAccount from "./pages/ActivateAccount"
import ResendEmail from "./pages/ResendEmail"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import Admin from "./pages/Admin/"
import {Switch, Route} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import SideDrawer from "./components/SideDrawer"

function App() {  
  
  return (
    <AnimatePresence>  
          
      <SideDrawer key="sidedrawer" />  
      <Switch>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Route path="/services/change-of-course-institution" exact>
          <ChangeOfCourseInstitutionPage />
        </Route>
        <Route path="/services/result-upload" exact>
          <OLevelUploadPage />
        </Route>
        <Route path="/services/jamb-password-reset" exact>
          <JambPasswordResetPage />
        </Route>
        <Route path="/services" exact>
          <AllServicesPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route path="/buycards/:id" exact>
          <CardPage />
        </Route> 
        <Route path="/edititem/:item" exact>
          <EditItem />
        </Route>
        <Route path="/payorder/:item/" exact>
          <PayOrder />
        </Route>
        <Route path="/auth/activate/:token/" exact>
          <ActivateAccount />
        </Route>
        <Route path="/auth/forgotpassword/" exact>
          <ForgotPassword />
        </Route>
        <Route path="/auth/resendemail/" exact>
          <ResendEmail />
        </Route>
        <Route path="/auth/passwordreset/:token/" exact>
          <ResetPassword />
        </Route>
        <Route path="/allcards" exact>
          <AllCardsPage />
        </Route>  
        <Route path="/" exact>
          <HomePage />
        </Route>      
      </Switch>
    </AnimatePresence>
  );
}

export default App;
