import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/Middle_Category.css'
import categoryProducts from "../Data/Individual_item";
import { addFav, removeFav, isFav } from "../Data/favstore";
import Header from './Header';
import Footer from './Footer';

const allCategories = [
  { label: "ស្រូវ", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_rice_panicle.jpg/320px-Single_rice_panicle.jpg", path: "/category/rice" },
  { label: "បន្លែ", img: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=300&q=80", path: "/category/vegetables" },
  { label: "ផ្លែឈើ", img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&q=80", path: "/category/fruits" },
  { label: "ផលិតផលសត្វ", img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80", path: "/category/animal-products" },
  { label: "គ្រាប់ធញ្ញជាតិ", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80", path: "/category/grains" },
];

export default function AllCategories() {
  const navigate = useNavigate();
  const [randomProducts] = useState(() => {
    const allProducts = Object.values(categoryProducts).flatMap(c => c.products);
    return [...allProducts].sort(() => Math.random() - 0.5).slice(0, 4);
  });
  const [showAll, setShowAll] = useState(false);
  const [, forceUpdate] = useState(0);

  const toggleBookmark = (p, e) => {
    e.stopPropagation();
    if (isFav(p)) {
      removeFav(p);
    } else {
      addFav(p);
    }
    forceUpdate(n => n + 1);
  };

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  const handleViewClick = (p, e) => {
    e.stopPropagation();
    navigate(p.path, { state: p });
  };

  return (
    <div>
      <Header />
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

          <div className="section">
            <div className="section-header">
              <span className="section-title">ប្រភេទផលិតផលទាំងអស់</span>
            </div>
            <div className="category-grid">
              {allCategories.map((c, i) => (
                <div
                  className="cat-card"
                  key={`img-${i}`}
                  onClick={() => handleCategoryClick(c.path)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={c.img} alt={c.label} />
                </div>
              ))}
              {allCategories.map((c, i) => (
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
          </div>

          {/* Product Section */}
          <div className="section">
            <div className="section-header">
              <span className="section-title">ផលិតផលដែលកំពុងពេញនិយម</span>
              <button className="see-all" onClick={() => setShowAll(s => !s)}>
                {showAll ? "បង្រួម" : "មើលបន្ថែម"}
              </button>
            </div>
            <div className="product-list">
              {randomProducts.slice(0, showAll ? randomProducts.length : 4).map((p, i) => (
                <div className="product-card" key={i} style={{ cursor: 'pointer' }}>
                  <img src={p.img} alt={p.name} />
                  <button className="bookmark-btn" onClick={(e) => toggleBookmark(p, e)}>
                    <svg width="16" height="16" viewBox="0 0 24 24"
                      fill={isFav(p) ? "#2e7d32" : "none"}
                      stroke={isFav(p) ? "#2e7d32" : "#555"}
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <Footer />
    </div>
    </div>
    );
}