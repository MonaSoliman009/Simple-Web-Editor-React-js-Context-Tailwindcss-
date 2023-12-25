import { useContext } from "react";
import {  contentContext } from "../context/content";

const View = () => {
    let{content:{title,description,btnUrl,btnText}}=useContext(contentContext);
    return (
        <>
            <div
                className={` grid grid-cols-1 gap-4 `} >
                <div className="  text-center col-span-1  sm:col-span-1	">

                    <h1 className="font-extrabold text-5xl mb-12">{title}</h1>
                    <p className="font-medium	mb-6">{description}</p>
                    <a href={btnUrl} className="bg-gray-700	text-slate-50 px-6 py-4	">
                        {btnText}</a>
                </div>

            </div>

        </>
    );
}

export default View;
