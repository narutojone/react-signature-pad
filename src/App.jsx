import React, {Component} from 'react';
import SignaturePad from './component/SignaturePad/index.jsx';

class App extends Component {
  render() {
    return (
      <SignaturePad
        width={1000}
        height={800}
        penColor="red"
      />
    );
  }
}
export default App;
