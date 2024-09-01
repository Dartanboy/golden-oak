import GradientContainer from './components/general/GradientContainer';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Degrees from './components/degrees/Degrees';
import Footer from './components/footer/Footer';
import './styles/Base.css';

function App() {
  return (
    <div>
      <GradientContainer gradient={'bg-gradient-to-t'}>
        <Navbar />
        <Hero />
      </GradientContainer>
      <GradientContainer gradient={'bg-gradient-to-b'}>
        <Degrees />
        <Footer />
      </GradientContainer>
    </div>
  )
}

export default App;
