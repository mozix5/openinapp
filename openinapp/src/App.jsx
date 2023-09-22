import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Users from "./pages/Users";
import Transactions from "./pages/Transactions";
import Schedules from "./pages/Schedules";
import Settings from "./pages/Settings";

import Signin from "./pages/Signin";
import { UserProvider, useUser } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div className="font-['Montserrat'] bg-[#F5F5F5]">
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="schedules" element={<Schedules />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </UserProvider>
  );
};

export default App;
