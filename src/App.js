// src/App.js
import './App.css';
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryPage from "./pages/Story";
import TeaPage from "./pages/Tea";
import TradePage from "./pages/Trade";
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/DashboardPage';
import Buyers from './pages/BuyersPage';
import Orders from './pages/OrderListPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/story" element={<StoryPage/>}/>
            <Route path="/tea" element={<TeaPage/>}/>
            <Route path="/trade" element={<TradePage/>}/>
            <Route path="/admin/*" element={
              <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
                  <Box sx={{ marginTop: '64px' }}>
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="buyers" element={<Buyers />} />
                      <Route path="orders" element={<Orders />} />
                    </Routes>
                  </Box>
                </Box>
              </Box>
            }/>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;