import './App.css';
import {Route, Routes} from 'react-router-dom'
import Index from './pages/index';
import Decreate from './pages/decreate';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' exact element={<Index />} />
      <Route path='/decreate' exact element={<Decreate />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
