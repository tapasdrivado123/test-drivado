import React from "react";
import { BrowserRouter as Router, Routes as RoutePath, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import UserManagement from "./pages/userManagement";
import RegionSec from "./components/RegionSec"
import VehicleSec from "./components/VehicleSec";
import Lazy from "./components/lazy";
import Count from "./Hooks/Count";
import Event from "./pages/Event";
import Time from "./pages/PickTime";
import EventNew from "./pages/EventNew";
import EventNew2 from "./pages/EventNew2";
import EmailInvoice from "./pages/EmailInvoice";
import DropDown from "./pages/DropDown";



const Routes = () => {
  return (
    <>
      <Router>
        <div className="container">
            <Header />
            <RoutePath>
                <Route path='/' element={<Dashboard />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/register' element={<Register />} />
                <Route path='/userManagement' element={<UserManagement />} />
                <Route path='/region' element={<RegionSec />} />
                <Route path='/vehicle' element={<VehicleSec />} />
                <Route path='/lazy' element={<Lazy />} />
                <Route path='/count' element={<Count />} />
                <Route path='/Event' element={<Event />} />
                <Route path='/Time' element={<Time />} />
                <Route path='/EventNew' element={<EventNew />} />
                <Route path='/EventNew2' element={<EventNew2 />} />
                <Route path='/EmailInvoice' element={<EmailInvoice />} />
                <Route path='/DropDown' element={<DropDown />} />


            </RoutePath>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default Routes;
