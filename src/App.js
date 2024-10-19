import './App.css';
import CategoryPage from './Pages/CategoryPage';
import { HomePage } from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PetDetails from './Pages/PetDetails';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dog-marketplace" element={<CategoryPage />} />
          <Route path="/dog" element={<PetDetails />} />
        </Routes>
    
    </Router>
  );
}

export default App;
