import React,{useEffect} from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
