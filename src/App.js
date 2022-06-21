import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import AllCategory from './pages/AllCategory';
import Details from './pages/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AllCategory />} />
          <Route path="/products/:id" element={<Details />} />
        </Routes>
      </div>
    );
  }
}

export default App;
