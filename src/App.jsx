import React from 'react';
import Header from './Components/Header'
import Search from './Components/Search'
import MainContent from './Components/MainContent'


import './App.css';


function App() {
  const [photos, setPhotos] = useState([]);

  
  
  return (
    <div className="App">
      <Header />
      <Search handleSearch={} />
      <MainContent />
    </div>
  );
}

export default App;
