import { useContext } from "react";
import Input from "../components/input/input";
import TxtArea from "../components/input/txtArea";
import { contentContext } from "../context/content";

const Editor = () => {

    let{content:{bgImage,title,description,btnUrl,btnText}}=useContext(contentContext);

    return (
        <div className="my-12">

            <Input type="text" val={title} inpType="title" />

            <TxtArea val={description} inpType= "description" />
            <Input type="text" val={bgImage} inpType= "bgImage" />

            <Input type="text" val={btnText} inpType= "btnText" />



            <Input type="text" val={btnUrl} inpType= "btnUrl" />




        </div>
    );
}

export default Editor;
