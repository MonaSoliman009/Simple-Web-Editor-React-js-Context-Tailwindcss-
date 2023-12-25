import PropTypes from 'prop-types';
import './input.css'
import { useContext } from 'react';
import { contentContext } from '../../context/content';
const Input = ({ type, val ,inpType}) => {
   let {content,setContent} =useContext(contentContext)
  const changeContent=(e)=>{
    setContent({...content,[inpType]:e.target.value})
  }
    return (
        <>
        <div className="mb-6">
        <input className=' inp ' type={type} value={val} onChange={(e)=>{changeContent(e)}} />

        </div>
        </>
    );
}

export default Input;

Input.propTypes = {
    type: PropTypes.string,
    val: PropTypes.string,
    inpType: PropTypes.string

}