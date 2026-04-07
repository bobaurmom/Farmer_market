import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../style/Middle_Category.css';
import categoryProducts from "../Data/Individual_item";
import { addFav, removeFav, isFav } from "../Data/favstore"; // ← add this

export default function IndividualCategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [, forceUpdate] = useState(0); // ← just to trigger re-render
  
  const category = categoryProducts[categoryName];
  const [showAll, setShowAll] = useState(false);
  
  if (!category) {
    return (
      <div className="app">
        <div className="phone">
          <div className="scroll-content" style={{ padding: '20px', textAlign: 'center' }}>
            <h2>ប្រភេទមិនស្គាល់</h2>
            <button onClick={() => navigate('/')}>← ត្រឡប់ទៅទំព័រដើម</button>
          </div>
        </div>
      </div>
    );
  }

  const toggleBookmark = (p, e) => {
    e.stopPropagation();
    if (isFav(p)) {
      removeFav(p);
    } else {
      addFav(p);
    }
    forceUpdate(n => n + 1); // ← re-render to reflect change
  };

  const handleViewClick = (p, e) => {
    e.stopPropagation();
    navigate(p.path, { state: p });
  };

  return (
    <div className="app">
      <div className="phone">
        <div className="scroll-content">
          <div className="search-wrap" style={{ cursor: 'pointer' }}>
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input placeholder="ស្វែងរកប្រភេទផលិតផល" readOnly className="search-input"/>
              </div>
          </div>
          
          <div style={{ paddingLeft: '20px' , paddingRight: '20px' }}>
            <h1 className="scroll-name">{category.title}</h1>
          </div>

          <div className="section">
             <div className="section-header">
                <span className="section-title">លក់ដាច់បំផុត</span>
                <button className="see-all" onClick={() => setShowAll(s => !s)}>{showAll ? "បង្រួម" : "មើលបន្ថែម"}</button>
              </div>
            <div className="product-list">
              {category.products.slice(0, showAll ? category.products.length : 4).map((p, i) => (
                <div className="product-card" key={i} style={{ cursor: 'pointer' }}>
                  <img src={p.img} alt={p.name} />
                  <button className="bookmark-btn" onClick={(e) => toggleBookmark(p, e)}>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill={isFav(p) ? "#2e7d32" : "none"}
                      stroke={isFav(p) ? "#2e7d32" : "#555"}
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                  <div className="product-info-container">
                    <div className="product-info">
                      <div className="product-name">{p.name}</div>
                      <div className="product-price">{p.price}</div>
                    </div>
                    <div className="view-btn-container">
                      <button className="view-btn" onClick={(e) => handleViewClick(p, e)}>មេីល</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="divider" />

            <div className="section-header">
                <span className="section-title">សម្រាប់អ្នក</span>
                <button className="see-all" onClick={() => setShowAll(s => !s)}>{showAll ? "បង្រួម" : "មើលបន្ថែម"}</button>
              </div>
            <div className="product-list">
              {category.products.slice(0, showAll ? category.products.length : 4).map((p, i) => (
                <div className="product-card" key={i} style={{ cursor: 'pointer' }}>
                  <img src={p.img} alt={p.name} />
                  <button className="bookmark-btn" onClick={(e) => toggleBookmark(p, e)}>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill={isFav(p) ? "#2e7d32" : "none"}
                      stroke={isFav(p) ? "#2e7d32" : "#555"}
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                  <div className="product-info-container">
                    <div className="product-info">
                      <div className="product-name">{p.name}</div>
                      <div className="product-price">{p.price}</div>
                    </div>
                    <div className="view-btn-container">
                      <button className="view-btn" onClick={(e) => handleViewClick(p, e)}>មេីល</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
