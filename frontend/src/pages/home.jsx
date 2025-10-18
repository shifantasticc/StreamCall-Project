import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import style from '../styles/home.module.css';
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import InsightsIcon from '@mui/icons-material/Insights';

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState('');

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className={style.HomeContainer}>
        <div className={style.navbar}>
          <div className={style.logo}>
            <h2>
              SerenoStream Call{' '}<InsightsIcon />{' '}
            </h2>
          </div>

          <div className={style.navIcons}>
            <IconButton
              onClick={() => {
                navigate('/history');
              }}
            >
              <RestoreIcon style={{ color: '#d4d9f1' }} />
            </IconButton>
            <p>History</p>

            <Button
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/auth');
              }}
            >
              Logout
            </Button>
          </div>
        </div>

        <div className={style.meetContainer}>
          <div className={style.leftPanel}>
            <div>
              <h2>Providing Quality Video Call</h2>

              <div style={{ display: 'flex', gap: '10px' }}>
                <TextField
                  onChange={(e) => setMeetingCode(e.target.value)}
                  id="outlined-basic"
                  label="Meeting Code"
                  variant="outlined"
                />
                <Button onClick={handleJoinVideoCall} variant="contained">
                  Join
                </Button>
              </div>
            </div>
          </div>
          <div className={style.rightPanel}>
            <img srcSet="/logo3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
