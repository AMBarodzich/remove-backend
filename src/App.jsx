import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Page, Main } from './components/Layout/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <Router>
      <Page>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Main>
        <Footer />
        <Toaster />
      </Page>
    </Router>
  );
}


