
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Main_sell from './pages/Main_sell'
import Main_history from './pages/Main_history'
import Home from './pages/home'
import Sign_up from './pages/sign_up'
import Main from './pages/main_buying_page'
import Sign_in from './pages/sign_in'
import IndividualCategoryPage from './pages/Individual_Cate';
import Main_favourite from './pages/Main_favourite'

const AllCategoriesPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>All Categories</h2>
      <button onClick={() => window.history.back()}>← Back</button>
    </div>
  );
};

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/category/:categoryName" element={<IndividualCategoryPage />} />
        <Route path="/Main_sell" element={<Main_sell />} />
        <Route path="/history" element={<Main_history />} />
        <Route path="/Sign_up" element={<Sign_up />} />
        <Route path="/main_buying_page" element={<Main />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/Main_history" element={<Main_history/>}/>   
        <Route path="/categories" element={<AllCategoriesPage />} />   
        <Route path="/Main_favourite" element={<Main_favourite/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
