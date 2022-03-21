import "./App.css";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import SingleService from "./pages/SingleService";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchService from "./pages/SearchService";
import Dashboard from "./admin/Dashboard";
import Categories from "./pages/Categories";
import Profile from "./admin/components/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<SingleService />} />
          <Route path="/search" element={<SearchService />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />}></Route>
          <Route
            path="*"
            element={<h1 className="section_top">Page not fount</h1>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
