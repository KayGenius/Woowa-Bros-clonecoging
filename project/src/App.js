
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className='main'>
       <Header></Header>
        <div style={{height:'95px'}}></div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/news' element={<News></News>}></Route>
      </Routes>
        <Footer></Footer>



      
    </div>
  );
}

export default App;
