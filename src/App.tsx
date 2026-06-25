import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home/Page";
import { About } from "./pages/About/Page";
import { ServicesPage } from "./pages/Services/Page";
import { CarsPage } from "./pages/Cars/Page";
import { GalleryPage } from "./pages/Gallery/Page";
import { AdminPage } from "./pages/Admin/AdminPage";
import { ContactPage } from "./pages/Contact/Page";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy/Page";
import { TermsConditionsPage } from "./pages/TermsConditions/Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/cars" element={<CarsPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
        <Route path="/terms-and-conditions" element={<TermsConditionsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
