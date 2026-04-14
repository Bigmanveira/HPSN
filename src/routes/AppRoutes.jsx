import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import Events from '../pages/Events';
import Resources from '../pages/Resources';
import ResourceCategory from '../pages/ResourceCategory';
import ResourceDetail from '../pages/ResourceDetail';
import GetInvolved from '../pages/GetInvolved';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/events" element={<Events />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/:slug" element={<ResourceCategory />} />
      <Route path="/resources/:slug/:resourceSlug" element={<ResourceDetail />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
