import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Catagory from "../../Pages/Catagory/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import TermsAndConditions from "../../Pages/Others/TermAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            loader: () => fetch('http://localhost:5000/news'),
            element: <Home></Home>
         },
         {
            path: '/catagory/:id',
            loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`),
            element: <Catagory></Catagory>
         },
         {
            path: '/news/:id',
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/terms',
            element: <TermsAndConditions></TermsAndConditions>
         },
      ]
   }
])