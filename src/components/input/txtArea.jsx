import PropTypes from 'prop-types';

import './input.css'
import { useContext } from 'react';
import { contentContext } from '../../context/content';
const TxtArea = ({ val, inpType }) => {
    let { content, setContent } = useContext(contentContext)
    const changeContent = (e) => {
        setContent({ ...content, [inpType]: e.target.value })
    }
    return (
        <>
            <div className="mb-6">
                <textarea className=' inp ' cols="20" rows="4" value={val} onChange={(e) => { changeContent(e) }} />

            </div>
        </>
    );
}

export default TxtArea;

TxtArea.propTypes = {
    type: PropTypes.string,
    val: PropTypes.string,
    inpType: PropTypes.string


}
