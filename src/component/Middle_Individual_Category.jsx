import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../style/Middle_Category.css';

const categoryProducts = {
  rice: {
    title: "ស្រូវ",
    products: [
      { name: "អង្ករស្រូវ", price: "៣,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80", bookmarked: false, path: "/product/rice1" },
      { name: "អង្ករដំណើប", price: "៤,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80", bookmarked: false, path: "/product/rice2" },
      { name: "ស្រូវវែង", price: "៣,៥០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80", bookmarked: false, path: "/product/rice3" },
      { name: "អង្ករស្រូវ", price: "៣,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80", bookmarked: false, path: "/product/rice1" }
    ]
  },
  vegetables: {
    title: "បន្លែ",
    products: [
      { name: "ស្ពៃក្តោប", price: "២,០០០ ៛/ដុំ", img: "https://images.unsplash.com/photo-1591101755177-1d5cd4c8f8b2?w=300&q=80", bookmarked: false, path: "/product/cabbage" },
      { name: "ត្រសក់", price: "១,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&q=80", bookmarked: false, path: "/product/cucumber" },
      { name: "ប៉េងប៉ោះ", price: "២,៥០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa2a4?w=300&q=80", bookmarked: false, path: "/product/tomato" }
    ]
  },
  fruits: {
    title: "ផ្លែឈើ",
    products: [
      { name: "ទុរេន", price: "៥,០០០ ៛/គ្រាប់", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300&q=80", bookmarked: true, path: "/product/durian" },
      { name: "មង្ឃុត", price: "៣,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&q=80", bookmarked: false, path: "/product/mangosteen" },
      { name: "ស្វាយ", price: "២,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&q=80", bookmarked: false, path: "/product/mango" }
    ]
  },
  "animal-products": {
    title: "ផលិតផលសត្វ",
    products: [
      { name: "សាច់គោ", price: "២០,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=300&q=80", bookmarked: false, path: "/product/beef" },
      { name: "សាច់ជ្រូក", price: "១៥,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80", bookmarked: false, path: "/product/pork" },
      { name: "សាច់មាន់", price: "១០,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1587593810168-a84919bcdebd?w=300&q=80", bookmarked: false, path: "/product/chicken" }
    ]
  },
  grains: {
    title: "គ្រាប់ធញ្ញជាតិ",
    products: [
      { name: "ពោត", price: "២,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1551754655-cd0e9e3e6f7f?w=300&q=80", bookmarked: false, path: "/product/corn" },
      { name: "សណ្តែក", price: "៣,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1515543904379-3d757afe72d5?w=300&q=80", bookmarked: false, path: "/product/beans" },
      { name: "ល្ង", price: "៤,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1615485500704-8e990f28671b?w=300&q=80", bookmarked: false, path: "/product/sesame" }
    ]
  }
};

export default function IndividualCategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState(
    categoryProducts[categoryName]?.products.map(p => p.bookmarked) || []
  );
  
  const category = categoryProducts[categoryName];
  
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

  const toggleBookmark = (i, e) => {
    e.stopPropagation();
    setBookmarks(b => b.map((v, idx) => idx === i ? !v : v));
  };

  const handleViewClick = (path, e) => {
    e.stopPropagation();
    navigate(path);
  };

  return (
    <div className="app">
      <div className="phone">
        <div className="scroll-content">
          {/* Back Button & Category Title */}
          <div className="search-wrap" style={{ cursor: 'pointer' }}>
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input placeholder="ស្វែងរកប្រភេទផលិតផល" readOnly className="search-input"/>
              </div>
          </div>
          
          <div style={{ paddingLeft: '20px' , paddingRight: '20px' }}>
            <h1 className="scroll-name">{category.title}</h1>
          </div>

          {/* Products Section - Same layout as your home page products */}
          <div className="section">
             <div className="section-header">
                <span className="section-title">លក់ដាច់បំផុត</span>
                <button className="see-all">មើលបន្ថែម</button>
              </div>
            <div className="product-list">
              {category.products.map((p, i) => (
                <div 
                  className="product-card" 
                  key={i}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={p.img} alt={p.name} />
                  <button className="bookmark-btn" onClick={(e) => toggleBookmark(i, e)}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={bookmarks[i] ? "#2e7d32" : "none"}
                      stroke={bookmarks[i] ? "#2e7d32" : "#555"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      <button className="view-btn" onClick={(e) => handleViewClick(p.path, e)}>មេីល</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="divider" />

            <div className="section-header">
                <span className="section-title">សម្រាប់អ្នក</span>
                <button className="see-all">មើលបន្ថែម</button>
              </div>
            <div className="product-list">
              {category.products.map((p, i) => (
                <div 
                  className="product-card" 
                  key={i}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={p.img} alt={p.name} />
                  <button className="bookmark-btn" onClick={(e) => toggleBookmark(i, e)}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={bookmarks[i] ? "#2e7d32" : "none"}
                      stroke={bookmarks[i] ? "#2e7d32" : "#555"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      <button className="view-btn" onClick={(e) => handleViewClick(p.path, e)}>មេីល</button>
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