import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllProducts from "../src/pages/AllProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/tea" element={<TeaPage />} />
          <Route path="/trade" element={<TradePage />} /> */}
          <Route path="/admin/products" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
