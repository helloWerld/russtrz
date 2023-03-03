import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Portfolio, Education } from './container';
import { Navbar } from './components';
import './App.scss'


const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Portfolio />
            <Skills />
            <Education />
            <Testimonial />
            <Footer />
        </div>
    )
};

export default App;