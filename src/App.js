import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import WritePage from "./components/WritePage";
import Dashboard from "./components/Dashboard";
import BlogPage from "./components/BlogPage";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import BlogSnippet from "./components/BlogSnippet";
import UserPage from "./components/UserPage";

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="layout">
      <header className="header">
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </header>
      <Dashboard isOpen={isMenuOpen} />
      <main className="main-content">
        {React.cloneElement(children, { isMenuOpen, setIsMenuOpen })}
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/write"
          element={
            <Layout>
              <WritePage />
            </Layout>
          }
        />
        <Route
          path="/blogpage"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />
        <Route
          path="/homepage"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <UserPage />
            </Layout>
          }
        />
        <Route>
          <Route path="/blogpage" element={<BlogPage />} />
        </Route>
        <Route>
          <Route path="/blogsnip" element={<BlogSnippet />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
