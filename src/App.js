import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import Authentication from "./pages/authentication/Authentication";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
            <Route path="/"
                element={<Homepage />}
            />
            <Route path="/shop"
                element={<ShopPage />}
            />
            <Route path="/signin"
                element={<Authentication />}
            />
        </Routes>
      </Router>
    </div>
  )
}

export default App;