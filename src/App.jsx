import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Navbar from './components/Navbar';
import NotificationBanner from './components/NotificationBanner';
import StudentListPage from './pages/StudentListPage';
import FavouriteStudentsPage from './pages/FavouriteStudentsPage';
import './index.css';

// 404 Not Found Page Component
const NotFound = () => (
  <div className="page-wrapper">
    <div className="empty-state">
      <div className="empty-icon">🧭</div>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Return to Student List
      </Link>
    </div>
  </div>
);

function App() {
  return (
    // Wrap entire app with StudentProvider to provide global state via createContext
    <StudentProvider>
      {/* React Router for seamless navigation without page reload */}
      <Router>
        <div className="app-layout">
          <Navbar />
          <NotificationBanner />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<StudentListPage />} />
              <Route path="/favourites" element={<FavouriteStudentsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <div className="footer-content">
              <div className="footer-pill">
                <span className="dot dot-green"></span>
                <span>Global State: <code>useContext(StudentContext)</code></span>
              </div>
              <div className="footer-pill">
                <span className="dot dot-blue"></span>
                <span>Client-Side Routing: <code>&lt;Link&gt;</code> without page reload</span>
              </div>
              <div className="footer-pill">
                <span className="dot dot-purple"></span>
                <span>Duplicate Prevention &amp; Instant UI Updates</span>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;

