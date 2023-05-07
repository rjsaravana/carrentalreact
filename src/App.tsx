import './App.css';
import { Carcatalogue } from './pages/carcatalogue';
import { Expertservices } from './pages/expertservices';
import { Findcar } from './pages/findcar';
import { Home } from './pages/home';
import { Menu } from './pages/menu';
import { Navbar } from './pages/navbar';
import { Rentflow } from './pages/rentflow';
import { Special } from './pages/special';
import { Testimonials } from './pages/testimonials';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Rentflow />
    <Findcar />
    <Carcatalogue />
    <Expertservices />
    <Testimonials />
    <Special />
    <Menu />
    </>

  );
}

export default App;
