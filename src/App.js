import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import RequreAuth from './Components/RequreAuth/RequreAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/products" element={
          <RequreAuth>
            <Products></Products>
          </RequreAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/orders" element={
          <RequreAuth>
            <Orders></Orders>
          </RequreAuth>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
