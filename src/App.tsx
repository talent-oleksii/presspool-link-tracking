import { Route, Routes } from 'react-router';
import './App.css';

import Redirector from './components/Redirector';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<Redirector />} />
      </Routes>
    </div>
  );
}

export default App;
