import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import ResetPassSlide from "./components/ResetPassSlide.jsx";
import SetPassSlide from "./components/SetPassSlide.jsx";
import SignUpSlide from "./components/SignUpSlide.jsx";
import LogoutSlide from "./components/LogoutSlide.jsx";
import SignInSide from "./components/SignInSide.jsx";
import MainSlide from "./components/MainSlide.jsx";
import AppSupport from "./components/AppSupport.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppSupport />} />
          <Route path="/main" element={<MainSlide />} />
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/signup" element={<SignUpSlide />} />
          <Route path="/resetpass" element={<ResetPassSlide />} />
          <Route path="/logout" element={<LogoutSlide />} />
          <Route path="/resetpass/set-pass" element={<SetPassSlide />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
