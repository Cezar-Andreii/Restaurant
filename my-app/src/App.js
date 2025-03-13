import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminApp from "./Admin/AdminApp"; // Componenta ta de admin (fostul App.js)
import ClientApp from "./Client/ClientApp"; // Componenta clientului

function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/admin" style={{ margin: "10px" }}>Admin</Link>
        <Link to="/client" style={{ margin: "10px" }}>Client</Link>
      </nav>
      <Routes>
        <Route path="/admin" element={<AdminApp />} />
        <Route path="/client" element={<ClientApp />} />
      </Routes>
    </Router>
  );
}

export default App;