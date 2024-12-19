import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const FaqsPage = lazy(() => import('./pages/FaqsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Router>
      <Suspense >
        <Routes>
          <Route path='/about-page' element={<AboutUsPage />} />
          <Route path='/product-page' element={<ProjectPage />} />
          <Route path='/faqs-page' element={<FaqsPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/contact-page' element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
