import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main_sell from "./pages/Main_sell";
import Main_history from "./pages/Main_history";
import Home from "./pages/home";
import Sign_up from "./pages/sign_up";
import Main from "./pages/main_buying_page";
import Sign_in from "./pages/sign_in";
import IndividualCategoryPage from "./pages/Individual_Cate";
import IndividualItem from "./pages/Individual_Item";
import DashboardTab from "./pages/DashboardTab";
import AnalyticsTab from "./pages/AnalyticsTab";
import ProfileTab from "./pages/ProfileTab";
import Forget_pass from "./pages/Forget_pass";

const AllCategoriesPage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
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
        <Route path="/category/:categoryName" element={<IndividualCategoryPage />}/>
        <Route path="/Main_sell" element={<Main_sell />} />
        <Route path="/history" element={<Main_history />} />
        <Route path="/Sign_up" element={<Sign_up />} />
        <Route path="/main_buying_page" element={<Main />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/forgotpassword" element={<Forget_pass/>} />
        <Route path="/forget_pass" element={<Forget_pass/>} />
        <Route path="/Main_history" element={<Main_history />} />
        <Route path="/categories" element={<AllCategoriesPage />} />
        <Route path="/product/:id" element={<IndividualItem />} />
        <Route path="/dashboard" element={<DashboardTab />} />
        <Route path="/analytics" element={<AnalyticsTab />} />
        <Route path="/profile" element={<ProfileTab />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
