import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Account from './pages/Account';

// A simple placeholder component for future pages
const PlaceholderPage = ({ title }) => (
    <div className="min-h-screen flex items-center justify-center pt-24">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
    </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-900 text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/account' element={<Account />} />
            
            {/* Placeholder routes for products and docs */}
            <Route path='/products/batch-file-renamer' element={<PlaceholderPage title="Batch File Renamer Product Page" />} />
            <Route path='/docs/batch-file-renamer' element={<PlaceholderPage title="Batch File Renamer Documentation" />} />
            <Route path='/docs/api' element={<PlaceholderPage title="API Reference" />} />
            <Route path='/pricing/individual' element={<PlaceholderPage title="Individual Pricing" />} />
            <Route path='/pricing/business' element={<PlaceholderPage title="Business Pricing" />} />
            
            {/* Placeholder routes for footer links */}
            <Route path='/privacy' element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path='/terms' element={<PlaceholderPage title="Terms of Service" />} />
            <Route path='/contact' element={<PlaceholderPage title="Contact Us" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
