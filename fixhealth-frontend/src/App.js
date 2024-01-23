import logo from './logo.svg';
import './App.scss';
import TestimonialsSection from '../src/components/TestimonialsSection';
import CounsellingForm from './components/counsellingForm';

function App() {

  return (
    <div className="App">
      <div className='healthcare'>
        <p>Best Doctors give Least Medicine...</p>
      </div>
      <CounsellingForm />
      <TestimonialsSection />
    </div>
  );
}

export default App;
