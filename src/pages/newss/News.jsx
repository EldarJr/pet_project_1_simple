import React from "react";
import NewsCard from "./NewsCard";


function News() {
    return (
        <div className="w-full flex justify-center bg-white">
            <div className="w-full max-w-[1400px] px-6 flex justify-center items-center flex-col py-20">


                <div className="flex justify-between items-center pb-6 w-[1200px]">
                    <div>
                        <h1 className="font-semibold text-[30px]">Новости</h1>
                    </div>


                    <div className="flex flex-row items-center gap-3 cursor-pointer">
                        <span className="text-[19px] font-medium">все новости</span>
                        <img src="/newsSvg/strelka.svg" alt="" />
                    </div>
                </div >


                <div className="flex flex-row justify-center gap-5">
                    <NewsCard
                        img={"/newsSvg/svgOne.svg"}
                        data={"20/05/22"}
                        title={"Semper eu pulvinar eget integer"}
                        text={"Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus."}
                    />
                    <NewsCard
                        img={"/newsSvg/svgTwo.svg"}
                        data={"20/05/22"}
                        title={"Semper eu pulvinar eget integer"}
                        text={"Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus."}
                    />
                    <NewsCard
                        img={"/newsSvg/svgThree.svg"}
                        data={"20/05/22"}
                        title={"Semper eu pulvinar eget integer"}
                        text={"Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus."}
                    />
                    <NewsCard
                        img={"/newsSvg/svgFour.svg"}
                        data={"20/05/22"}
                        title={"Semper eu pulvinar eget integer"}
                        text={"Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus."}
                    />
                </div>

            </div >
        </div >

    )

}

export default News