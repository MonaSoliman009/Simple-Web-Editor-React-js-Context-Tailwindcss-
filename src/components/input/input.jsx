import PropTypes from 'prop-types';
import './input.css'
const Input = ({ type, val }) => {
  
    return (
        <>
        <div className="mb-6">
        <input className=' inp ' type={type} value={val} />

        </div>
        </>
    );
}

export default Input;

Input.propTypes = {
    type: PropTypes.string,
    val: PropTypes.string

}