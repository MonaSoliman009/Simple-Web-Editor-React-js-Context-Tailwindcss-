import PropTypes from 'prop-types';

const View = ({ content: { title, description, btnText, btnUrl, bgImage } }) => {
    return (
        <>
            <div
                className={`bg-[url('${bgImage}')] 
        bg-[length:100%_100%]   bg-no-repeat h-80 flex `} >
                <div className="my-auto mx-8 text-center	">

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
View.propTypes = {
    content: PropTypes.object,

}