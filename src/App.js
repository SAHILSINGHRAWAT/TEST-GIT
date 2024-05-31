import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ResponsiveAppBar from './components/AppBar/AppBar';
import Header from './components/Header/Header';
import About from './components/About Us/About';
import Department from './components/Department and Services/Department';
import Health from './components/Health Info/Health';
import Research from './components/Medical Research/Research';
import News from './components/News/News';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <Header/>
    <Router>
    <ResponsiveAppBar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about us' element={<About/>}/>
        <Route path='/department & services' element={<Department/>}/>
        <Route path='/health information' element={<Health/>}/>
        <Route path='/medical research' element={<Research/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact us' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
