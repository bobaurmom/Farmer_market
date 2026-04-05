import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addFav, removeFav, isFav } from '../Data/favstore';
import '../style/Middle_item.css';

export default function IndividualItem() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(isFav(state));

  if (!state) return <p>រកមិនឃើញផលិតផល</p>;

  const handleBookmark = () => {
    if (bookmarked) {
      removeFav(state);
    } else {
      addFav(state);
    }
    setBookmarked(b => !b);
  };

  return (
    <div className="app">
      <div className="phone">
          <div className='item-header'>
            <button className='item-return-btn' onClick={() => navigate(-1)}><img width="25" height="25" src="https://img.icons8.com/ios-filled/50/return.png" alt="return"/></button>
            <span className='item-info-title'>ព័ត៌មានបន្ថែម</span>
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/appointment-reminders.png" alt="appointment-reminders"/>
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
            <img src={state.img} alt={state.name} style={{ width: '70%', height: '260px', objectFit: 'cover' }} />
          </div>
          <div className='item-info-container'>
            <div className='price-title-container'>
              <div className='item-info-temp'>
                {state.name}
                <span style={{fontSize: "20px"}}>{state.category}</span>
                <span style={{fontSize: "15px", textAlign: "start"}} >{state.description}</span>
              </div>
              <div className='item-price'>
                {state.price}
              </div>
            </div>
            <div className='divider'></div>
            <div className='User-info'>
              <div className='item-info-temp'>
                Seller Info
                <span style={{fontSize: "20px"}}>+855 85424269</span>
              </div>
              <div className='item-info-temp'>
                Location
                <span style={{fontSize: "20px"}}>Phnom Penh</span>
              </div>
            </div>
            <div className='liked-btn'>
              <button
                onClick={handleBookmark}
                style={{ color: bookmarked ? "white" : "#008000", 
                  background: bookmarked ? "#008000" : "white"
                }}
              >
                ចូលចិត្ត
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}