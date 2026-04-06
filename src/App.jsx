import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
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
import AdminTab from "./pages/AdminTab";
import Navbar from "./component/Navbar";
import ProfileCard from "./component/ProfileCard";  // ← ADD THIS
import QuickInfo from "./component/QuickInfo";      // ← ADD THIS

const AllCategoriesPage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>All Categories</h2>
      <button onClick={() => window.history.back()}>← Back</button>
    </div>
  );
};

// Layout for pages that need the sidebar (ProfileCard + QuickInfo + Tabs)
const DashboardLayout = () => {
  // This state is for the tabs inside the dashboard
  // This is ONLY for the dashboard/analytics/profile/admin views
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <Navbar />
      <div className="page">
        <aside className="left-panel">
          <ProfileCard />
          <QuickInfo />
        </aside>

        <main className="right-panel">
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </button>
            <button
              className={`tab-btn ${activeTab === "analytics" ? "active" : ""}`}
              onClick={() => setActiveTab("analytics")}
            >
              Analytics
            </button>
            <button
              className={`tab-btn ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`tab-btn ${activeTab === "admin" ? "active" : ""}`}
              onClick={() => setActiveTab("admin")}
            >
              Admin
            </button>
          </div>

          {activeTab === "profile" && <ProfileTab />}
          {activeTab === "analytics" && <AnalyticsTab />}
          {activeTab === "dashboard" && <DashboardTab />}
          {activeTab === "admin" && <AdminTab />}
        </main>
      </div>
    </>
  );
};

// Simple layout for other pages (just navbar, no sidebar)
const SimpleLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes - no navbar needed */}
        <Route path="/" element={<Home />} />
        <Route path="/Sign_up" element={<Sign_up />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/forgotpassword" element={<Forget_pass />} />
        <Route path="/forget_pass" element={<Forget_pass />} />

        {/* Routes with simple layout (navbar only) */}
        <Route
          path="/category/:categoryName"
          element={
            <SimpleLayout>
              <IndividualCategoryPage />
            </SimpleLayout>
          }
        />

        <Route
          path="/Main_sell"
          element={
            <SimpleLayout>
              <Main_sell />
            </SimpleLayout>
          }
        />

        <Route
          path="/history"
          element={
            <SimpleLayout>
              <Main_history />
            </SimpleLayout>
          }
        />

        <Route
          path="/Main_history"
          element={
            <SimpleLayout>
              <Main_history />
            </SimpleLayout>
          }
        />

        <Route
          path="/main_buying_page"
          element={
            <SimpleLayout>
              <Main />
            </SimpleLayout>
          }
        />

        <Route
          path="/categories"
          element={
            <SimpleLayout>
              <AllCategoriesPage />
            </SimpleLayout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <SimpleLayout>
              <IndividualItem />
            </SimpleLayout>
          }
        />

        {/* Dashboard routes - with sidebar and tabs */}
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/analytics" element={<DashboardLayout />} />
        <Route path="/profile" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;