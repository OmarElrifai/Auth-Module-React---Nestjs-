import React from "react";

function PopUp({text}: any) {
    return (
        <>
            <div
                className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg z-50">
                {text}
            </div>
        </>

    )
}

export default PopUp;