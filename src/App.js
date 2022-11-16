import '../src/styles/App.css'
import Layout from './components/Layout';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className='main-app'>
      <Layout/>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
