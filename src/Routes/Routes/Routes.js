import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Catagory from "../../Pages/Catagory/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> , 
children:[
           {
              path: '/',
              loader: () => fetch('http://localhost:5000/news'),
              element: <Home></Home>
           },
           {
            path: '/catagory/:id',
            loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`),
            element: <Catagory></Catagory>
           },
           {
             path: '/news/:id',
             element: <News></News>,
             loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
           }
        ]
    }
])