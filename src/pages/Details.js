import { Component } from 'react';
import { withRouter } from 'react-router-class-tools';

class Details extends Component {
  componentDidMount() {
    // const { id } = this.props.match.params;
    // console.log(this.props.history);
  }

  render() {
    return (
      <div>
        <h1>This is the details page</h1>
        <h1>This is the details page</h1>
        <h1>This is the details page</h1>
        <h1>This is the details page</h1>
        <h1>This is the details page</h1>
        <h1>This is the details page</h1>
        <h1>This is the details page</h1>
        <h1>This is the details page</h1>
        <h1>This is the details page</h1>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default DetailsWithRouter;
