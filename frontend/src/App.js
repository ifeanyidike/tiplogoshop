import React, { useEffect } from "react"
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
import AdminEmailMain from "./pages/Admin/Emails/ManageEmails"
import AdminUsers from "./pages/Admin/Users/UsersMain"
import AdminCards from "./pages/Admin/Cards/CardsMain"
import AdminCardOrders from "./pages/Admin/CardOrders/CardOrdersMain"
import AdminChangeOfCourse from "./pages/Admin/ChangeOfCourse/ChangeOfCourseMain"
import AdminOLevelUpload from "./pages/Admin/OLevelUpload/OLevelUploadMain"
import AdminJambPasswordReset from "./pages/Admin/JambPasswordReset/JambPasswordResetMain"
import AdminServiceSettings from "./pages/Admin/ServiceSettings/ServiceMain"
import NotFoundPage from "./pages/NotFoundPage"
import UnauthorizedPage from "./pages/UnauthorizedPage"
import HelpPage from "./pages/HelpPage"
import { Switch, Route } from "react-router-dom"
// import { AnimatePresence } from "framer-motion"
import SideDrawer from "./components/SideDrawer"
import Footer from "./components/Footer"
import { useHistory, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { DRAWER_CLOSE } from "./redux/constants/utilConstants"


function App() {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const pathname = location.pathname.split(/\//)
  const { userInfo } = useSelector(state => state.userLogin)

  useEffect(() => {
    dispatch({ type: DRAWER_CLOSE })
  }, [dispatch])

  useEffect(() => {
    if (pathname.includes('admin')) {
      if ((userInfo && !userInfo.isAdmin) || !userInfo) {
        history.push('/unauthorized')
      }
    }
  }, [pathname, userInfo, history])

  return (
    <>
      <SideDrawer key="sidedrawer" />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/admin/service-settings">
          <AdminServiceSettings />
        </Route>
        <Route path="/admin/emails">
          <AdminEmailMain />
        </Route>
        <Route path="/admin/jambpasswordreset">
          <AdminJambPasswordReset />
        </Route>
        <Route path="/admin/olevelupload">
          <AdminOLevelUpload />
        </Route>
        <Route path="/admin/changeofcourse">
          <AdminChangeOfCourse />
        </Route>
        <Route path="/admin/cardorders">
          <AdminCardOrders />
        </Route>
        <Route path="/admin/cards">
          <AdminCards />
        </Route>
        <Route path="/admin/users">
          <AdminUsers />
        </Route>
        <Route path="/admin" exact>
          <AdminUsers />
        </Route>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Route path="/services/change-of-course-institution">
          <ChangeOfCourseInstitutionPage />
        </Route>
        <Route path="/services/result-upload">
          <OLevelUploadPage />
        </Route>
        <Route path="/services/jamb-password-reset">
          <JambPasswordResetPage />
        </Route>
        <Route path="/services">
          <AllServicesPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/buycards/:id">
          <CardPage />
        </Route>
        <Route path="/edititem/:item">
          <EditItem />
        </Route>
        <Route path="/payorder/:item/">
          <PayOrder />
        </Route>
        <Route path="/auth/activate/:token/">
          <ActivateAccount />
        </Route>
        <Route path="/auth/forgotpassword/">
          <ForgotPassword />
        </Route>
        <Route path="/auth/resendemail/">
          <ResendEmail />
        </Route>
        <Route path="/auth/passwordreset/:token/">
          <ResetPassword />
        </Route>
        <Route path="/allcards">
          <AllCardsPage />
        </Route>
        <Route path="/unauthorized">
          <UnauthorizedPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
