import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { withRouter } from 'react-router-class-tools';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import NavBar from './components/NavBar';
import AllCategory from './pages/AllCategory';
import Details from './pages/Details';
import './assets/styles/transition.scss';

class App extends Component {
  componentDidMount() {
  }

  render() {
    const { location } = this.props;
    return (
      <div className="App">
        <NavBar />
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="slide-in" timeout={800}>
            <Routes>
              <Route path="/" element={<AllCategory />} />
              <Route path="/products/:id" element={<Details />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const Apps = withRouter(App);

export default Apps;
