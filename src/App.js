import logo from './logo.svg';
import './App.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DashboardPage from './components/pages/DashboardPage';

function App() {
  return (
    <div className="App">
      <DashboardPage />
    </div>
  );
}

export default App;
