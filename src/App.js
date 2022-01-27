import Home from "./Components/Pages/Home/MainHome/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Components/Contexts/AuthProvider/AuthProvider";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import AddABlog from "./Components/Pages/Dashboard/AddABlog/AddABlog";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import PrivateRoute from "./Components/Pages/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./Components/Pages/Login/AdminRoute/AdminRoute";
import MyOrders from "./Components/Pages/Dashboard/MyOrders/MyOrders";
import Review from "./Components/Pages/Dashboard/Review/Review";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageProducts from "./Components/Pages/Dashboard/ManageProducts/ManageProducts";
import ManageRequestedBlogs from "./Components/Pages/Dashboard/ManageRequestedBlogs/ManageRequestedBlogs";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Details from "./Components/Pages/Details/Details";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addABlog" element={<AddABlog />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Details />} />
          <Route
            path="/details/:blogId"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />
          {/* <Route path="/manageRequestedBlog" element={<ManageAllOrders />} /> */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="addABlog" element={<AddABlog />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route
              path="manageRequestedBlogs"
              element={<ManageRequestedBlogs />}
            />
            <Route path="manageProducts" element={<ManageProducts />} />
            <Route path="addABlog" element={<AddABlog />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          {/* <Route
            path="/productExplore"
            element={
              <PrivateRoute>
                <ProductExplore />
              </PrivateRoute>
            }
          />
          <Route
            path="/details/:productId"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="addAProduct"
              element={
                <AdminRoute>
                  <AddAProduct />
                </AdminRoute>
              }
            />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="pay" element={<Pay />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="manageAllOrders" element={<ManageAllOrders />} />
            <Route path="manageProducts" element={<ManageProducts />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
