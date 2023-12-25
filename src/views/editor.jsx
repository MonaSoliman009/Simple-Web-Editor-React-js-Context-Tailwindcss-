import Input from "../components/input/input";
import PropTypes from 'prop-types';
import TxtArea from "../components/input/txtArea";

const Editor = ({ content: { title, description, btnText, btnUrl, bgImage }, changeContent }) => {


    return (
        <div className="my-12">

            <Input type="text" val={title} changeContent={changeContent} />

            <TxtArea val={description} changeContent={changeContent} />
            <Input type="text" val={bgImage} changeContent={changeContent} />

            <Input type="text" val={btnText} changeContent={changeContent} />



            <Input type="text" val={btnUrl} changeContent={changeContent} />




        </div>
    );
}

export default Editor;
Editor.propTypes = {
    content: PropTypes.object,

}