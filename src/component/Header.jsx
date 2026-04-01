import '../style/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="user-info">
          <div className="avatar" style={{ cursor: 'pointer' }}>🧑‍🌾</div>
            <div className="user-text">
                <div className="hello">Hello</div>
                <div className="name" style={{ cursor: 'pointer' }}>Targaryen</div>
            </div>
          </div>
            <div className="header-right">
                <button className="login-btn">លក់ទំនិញ</button>
                <span className="bell" style={{ cursor: 'pointer' }}>🔔</span>
            </div>
        </div>
  );
}

export default Header;