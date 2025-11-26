import { Route, Routes } from "react-router-dom";
import StickerForm from "./form/StickerForm";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import List from "./list/List";
import LoginForm from "./admin/LoginForm";
import axios from "axios";
import { useEffect, useState } from "react";
import AdminList from "./admin/AdminList";
import NotFound from "./utils/NotFound";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function fetchUserInfo() {
      if (!token) {
        return;
      }
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/account/userinfo`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    }

    fetchUserInfo();
  }, [token]);

  return (
    <div className="bg-main">
      <Header userInfo={userInfo} />
      <Routes>
        <Route path="/" element={<StickerForm />} />
        <Route path="/list" element={<List />} />
        {(userInfo && (userInfo[0].role === "admin") ? (
          <>
            <Route path="/admin/list" element={<AdminList userInfo={userInfo} />} />
          </>
        ) : (
          <>
            <Route path="/admin/list" element={<LoginForm setToken={setToken} />} />
          </>
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
