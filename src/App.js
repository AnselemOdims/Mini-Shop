import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import AllCategory from './pages/AllCategory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AllCategory />} />
        </Routes>
      </div>
    );
  }
}

export default App;
