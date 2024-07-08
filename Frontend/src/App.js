import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutFrontend from './Layouts/frontend';
import LayoutBackend from './Layouts/backend';
// import Contact from "./pages/frontend/Contact";
// import Product from "./pages/frontend/Product";
// import Home from "./pages/frontend/Home";
import AppRouter from './router';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LayoutFrontend/>}>
          <Route index element={<Home/>}/>
          <Route path='san-pham' element={<Product/>}/>
          <Route path='lien-he' element={<Contact/>}/>
        </Route> */}

        <Route path="/" element={<LayoutFrontend />}>
          {AppRouter.FrontendRouter.map((route, index) => {
            const Page = route.component;
            return < Route key={index} path={route.path} element={<Page />} />
          })}
        </Route>
        <Route path="/admin" element={<LayoutBackend />}>
          {AppRouter.BackendRouter.map((route, index) => {
            const Page = route.component;
            return < Route key={index} path={route.path} element={<Page />} />
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
