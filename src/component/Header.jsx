import '../style/Header.css';
import profile from '../assets/profile.jpg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('../pages/ProfileTab.jsx');
  };

  const handleSellClick = () => {
    navigate('/Main_sell');
  };

  return (
    <div className="header">
      <div className="header-left">
        <div className="profile-section" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
          <img 
            src={profile}
            alt="Profile" 
            className="profile-image"
          />
          <div className="greeting">
            <span className="hello">Farmer</span>
            <h2 className="profile-name">Tarzen</h2>
          </div>
        </div>
      </div>

      <div className="header-right">
        <span className="khmer-text" onClick={handleSellClick} style={{ cursor: 'pointer' }}>ទិញទំនិញ</span>
        <svg className="notification-icon" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"/>
          <path d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"/>
        </svg>
      </div>
    </div>
  );
}

export default Header;