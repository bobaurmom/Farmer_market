import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/Middle_Category.css'
const categories = [
  { label: "ស្រូវ", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_rice_panicle.jpg/320px-Single_rice_panicle.jpg", path: "/category/rice" },
  { label: "បន្លែ", img: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=300&q=80", path: "/category/vegetables" },
  { label: "ផ្លែឈើ", img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&q=80", path: "/category/fruits" },
];

const categories2 = [
  { label: "ផលិតផលសត្វ", img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80", large: true, path: "/category/animal-products" },
  { label: "គ្រាប់ធញ្ញជាតិ", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80", large: true, path: "/category/grains" },
];

const products = [
  { name: "ទុរេន", price: "៥,០០០ ៛/គ្រាប់", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300&q=80", bookmarked: true, path: "/product/durian" },
  { name: "អង្ករ", price: "៣,០០០ ៛/គីឡូ", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=300&q=80", bookmarked: false, path: "/product/rice" },
  { name: "ក្រូច", price: "២,០០០ ៛/គ្រាប់", img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=300&q=80", bookmarked: false, path: "/product/orange" },
];

export default function AgriApp() {
  const [bookmarks, setBookmarks] = useState(products.map(p => p.bookmarked));
  const navigate = useNavigate();
  
  const toggleBookmark = (i, e) => {
    e.stopPropagation();
    setBookmarks(b => b.map((v, idx) => idx === i ? !v : v));
  };

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  const handleViewClick = (path, e) => {
    e.stopPropagation();
    navigate(path);
  };

  const handleSeeAllClick = (section) => {
    navigate(`/category/${section}`);
  };

  return (
    <>
      <div className="app">
        <div className="phone">
          <div className="scroll-content">
            {/* Search */}
            <div className="search-wrap" style={{ cursor: 'pointer' }}>
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input placeholder="ស្វែងរកប្រភេទផលិតផល" readOnly className="search-input"/>
              </div>
            </div>

            {/* ផលិតផល Section */}
            <div className="section">
              <div className="section-header">
                <span className="section-title">ផលិតផល</span>
              </div>
              <div className="category-grid">
                {categories.map((c, i) => (
                  <div 
                    className="cat-card" 
                    key={`img-${i}`}
                    onClick={() => handleCategoryClick(c.path)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={c.img} alt={c.label} />
                  </div>
                ))}
                {categories.map((c, i) => (
                  <div 
                    className="cat-card" 
                    key={`label-${i}`}
                    onClick={() => handleCategoryClick(c.path)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="cat-label">{c.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ height: 10 }} />
              <div className="category-grid two-col">
                {categories2.map((c, i) => (
                  <div 
                    className={`cat-card${c.large ? " large" : ""}`} 
                    key={`img2-${i}`}
                    onClick={() => handleCategoryClick(c.path)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={c.img} alt={c.label} />
                  </div>
                ))}
                {categories2.map((c, i) => (
                  <div 
                    className={`cat-card${c.large ? " large" : ""}`} 
                    key={`label2-${i}`}
                    onClick={() => handleCategoryClick(c.path)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="cat-label">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* សម្រាប់អ្នក Section */}
            <div className="section">
              <div className="section-header">
                <span className="section-title">សម្រាប់អ្នក</span>
                <button className="see-all" onClick={() => handleSeeAllClick('for-you')}>មើលបន្ថែម</button>
              </div>
              <div className="product-scroll">
                {products.map((p, i) => (
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
            
            <div className="section">
              <div className="section-header">
                <span className="section-title">តម្លៃពិសេស</span>
                <button className="see-all" onClick={() => handleSeeAllClick('special-prices')}>មើលបន្ថែម</button>
              </div>
              <div className="product-scroll">
                {products.map((p, i) => (
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
    </>
  );
}