import './App.css';
import { useState, useEffect } from 'react';

// Note: Key not secret.  Otherwise, place in untracked env config.
const GET_URL = 'https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
const HIT_URL = 'https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

function App() {
  const [hits, setHits] = useState();
  const [isLoading, setIsLoadingState] = useState(false);

  const incrementHits = async () => {
    setIsLoadingState(true);
    const hitData = await (await fetch(HIT_URL)).json()
    setHits(hitData.value);
    setIsLoadingState(false);
  }

  const fetchHits = async () => {
    setIsLoadingState(true);
    const hitData = await (await fetch(GET_URL)).json()
    setHits(hitData.value);
    setIsLoadingState(false);
  }

  useEffect(() => {
    // Fetch the latest hit count on load.
    incrementHits();
  }, []);

  return (
    <main>
      <h1 className="app-title">Project Purple Cow</h1>
      <button onClick={fetchHits} disabled={isLoading}>Update Hits</button>
      {!isLoading ? <h2 className="hit-count">{hits} hits</h2> : <h2>Loading...</h2>}
    </main>
  );
}

export default App;
