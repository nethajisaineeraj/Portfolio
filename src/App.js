import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import ExploreSkills from './components/ExploreSkills';
import ExploreProjects from './components/ExploreProjects';
import ExploreCertificates from './components/ExploreCertificates';
import WorkshopDetails from './components/WorkshopDetails';
import ContactMe from './components/ContactMe';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exploreskills" element={<ExploreSkills />} />
          <Route path="/exploreprojects" element={<ExploreProjects />} />
          <Route path="/explorecertificates" element={<ExploreCertificates />} />
          <Route path="/workshops/:id" element={<WorkshopDetails />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
