import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DisplayContact from './pages/DisplayContact';
import SearchContact from './pages/SearchContact';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DisplayContact />} />
        <Route path="/searchcontact" element={<SearchContact />} />
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/editcontact" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
