
import Navigation from './customer/components/Navigation/Navigation.jsx';
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage.jsx';
import Footer from './customer/components/Footer/Footer.jsx';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
