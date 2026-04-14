import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
