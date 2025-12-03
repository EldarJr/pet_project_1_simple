import React from "react";

function SectionCard({ text }) {
    return (
        <div className="w-[400px] h-[200px] bg-[#3D348B] rounded-lg p-5">
            <div>
                <h1 className="text-white">услуги</h1>
            </div>
            <div className="flex justify-end flex-col h-full pb-5">
                <p className="text-white font-semibold">{text}</p>
            </div>
        </div>
    )

}

export default SectionCard