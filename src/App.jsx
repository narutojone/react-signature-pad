import React, {Component} from 'react';
import SignaturePad from './component/index.jsx';


class App extends Component {
  render() {
    return (
      <div className="sigCanvas">
        <SignaturePad clearButton="true" penColor="grey"/>
      </div>
    );
  }
}
export default App;
