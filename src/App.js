import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import Resource from "./pages/listResource/Resource";
import ResourceById from "./pages/listResource/ResourceById";
import UserById from "./pages/user/UserById";
import Create from "./pages/crud/Create";
import EditUser from "./pages/user/EditUser";
import DelayedResponse from "./pages/delayed/DelayedResponse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<ProtectedRoutes />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/users" element={<User />} />
          <Route exact path="/resources" element={<Resource />} />
          <Route exact path="/details/:id" element={<ResourceById />} />
          <Route exact path="/read/:id" element={<UserById />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/delayed" element={<DelayedResponse />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
