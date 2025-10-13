import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import InsightsIcon from '@mui/icons-material/Insights';

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>SerenoStream Call <InsightsIcon /> </h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router('/aljk23');
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router('/auth');
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router('/auth');
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div className="landingText">
          <h1>
            <span style={{ color: '#5293cf' }}>Connect</span> with your loved
            Ones
          </h1>

          <p>Cover a distance by SerenoStream Call</p>
          <div className="landingBtn" role="button">
            <Link to={'/auth'}>Get Started</Link>
          </div>
        </div>
        <div className="landingImg">
          <img src="/mobile.png" alt="" />
        </div>
      </div>

      <footer className="landingFooter">
        <div class="f-info">
          <div class="f-info-brand">&copy; SerenoStream Private Limited</div>
          <div className="credits">
            Credits for photos To @brenoanp & @bertellifotografia on Pexels
          </div>
        </div>
      </footer>
    </div>
  );
}
