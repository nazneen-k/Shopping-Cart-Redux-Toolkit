import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Components/Product';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import RootLayout from './Components/RootLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <RootLayout>
          <Routes>
           
            <Route path="/" element={<Dashboard />} />

            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </RootLayout>
      </Router>
    </div>
  );
}

export default App;