import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Page/Dashboard';
import Navbar from './Page/Dashboard/Navbar';
import About from "../src/Page/Dashboard/about"
import Contact from './Page/Dashboard/Contact';
import Servicess from './Page/Dashboard/service';
import Footer from './Page/Dashboard/Footer';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />,
        <Dashboard />
        <Footer /> </>
    },
    {
      path: "/about",
      element: <>

        <Navbar /> ,  <About />, <Footer />  </>

    },
    {
      path: "/service",
      element: <><Navbar />,   <Servicess /> , <Footer /> </>
    },
    {
      path: "/contact",
      element: <> <Navbar />, <Contact />  , <Footer />  </>
    },
  ])
  return (

    <>

      <RouterProvider router={router}>

      </RouterProvider>
    </>


  );
}

export default App;
