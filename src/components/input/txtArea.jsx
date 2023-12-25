import PropTypes from 'prop-types';

import './input.css'
const TxtArea = ({val}) => {
    return (
        <>
            <div className="mb-6">
                <textarea className=' inp ' cols="20" rows="4" value={val} />

            </div>
        </>
    );
}

export default TxtArea;

TxtArea.propTypes = {
    type: PropTypes.string,
    val: PropTypes.string

}
