import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../styles/signature.scss';

class SignaturePad extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    penColor: PropTypes.string.isRequired,
  }
  
  componentDidMount() {
    const canvas = $('canvas');
    const { width, height, penColor } = this.props;

    canvas.attr({
      height,
      width,
    });

    $('.sigCanvas').signaturePad({
      drawBezierCurves: true,
      variableStrokeWidth:true,
      drawOnly: true,
      defaultAction: 'drawIt',
      validateFields: false,
      lineWidth: 0,
      output: null,
      sigNav: null,
      name: null,
      typed: null,
      clear: 'input[type=reset]',
      typeIt: null,
      drawIt: null,
      typeItDesc: null,
      drawItDesc: null
    });
  }

  render() {
    const { width, height } = this.props;
    return (
      <div className="sigCanvas" style={{ width, height }}>
        <canvas className="pad"></canvas>
        <fieldset>
          <input type="reset" value="clear" />
        </fieldset>
      </div>
    );
  }
}
export default SignaturePad;
