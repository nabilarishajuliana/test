import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Login/>
    // </div>
    <BrowserRouter>

<Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/typeroom" element={<TypeRoom />}></Route>
        <Route path="/room" element={<Room />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/historytransaksi" element={<HistoryTransaksi />}></Route>

        <Route path="/logincust" element={<LoginCust />}></Route>
        <Route path="/registercust" element={<RegisterCust />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/rooms" element={<Rooms />}></Route>
        <Route path="/mybookings" element={<MyBookings />}></Route>
        <Route path="/struck" element={<StrukBooking />}></Route> */}

      </Routes>
        </BrowserRouter>

  );
}

export default App;
