import React from 'react';
import Header from './Components/Header'
import Search from './Components/Search'
import MainContent from './Components/MainContent'


import './App.css';


function App() {
  const [searching, setSearching] = useState(false);
  const [photos, setPhotos] = useState([]);

  const triggerSearch = async (query = 'Technology') => {
    try {
      setSearching(true);
      const fetchedPhotos = await searchPics(query);
      console.log({ fetchedPhotos })

      setPhotos(fetchedPhotos.results)
    } catch (error) {
      console.log({ error });
    } finally {
      setSearching(false);
    }
  };

  useEffect(() => {
    triggerSearch()
  }, [])

  
  
  return (
    <div className="App">
      <Header />
      <Search handleSearch={} />
      <MainContent />
    </div>
  );
}

export default App;
