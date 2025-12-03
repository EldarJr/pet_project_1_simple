
import React from "react";


function NewsCard({ img, text, data, title }) {
    return (
        <div>
            <div className="flex flex-col items-start justify-center gap-2 w-[300px]">
                <img className="" src={img} alt="" />
                <p className="font-medium text-[15px] tracking-widest pt-2 pl-2">{data}</p>
                <h1 className="text-[20px] font-medium pl-2">{title}</h1>
                <p className=" text-gray-500 w-[350px] pl-2">{text}</p>
            </div>
        </div>
    )

}

export default NewsCard