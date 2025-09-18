import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Authentication from './pages/authentication';
import LandingPage from './pages/landing';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/:url" element={<VideoMeetComponent />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
