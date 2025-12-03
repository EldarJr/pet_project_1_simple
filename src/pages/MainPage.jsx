import React from "react";
import { useState } from "react";

function MainPage() {

    return (
        <div>
            <div className="px-[20px] bg-cover bg-center bg-no-repeat w-full h-screen flex justify-center gap-30  items-center" style={{ backgroundImage: "url('/mainFon.svg')" }}>

                <div className="flex flex-col justify-start gap-10">
                    <h1 className="text-white text-5xl font-bold">Тавимский морской <br /> порт VISMA</h1>
                    <p className="text-gray-300 w-[350px]">Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</p>
                    <div className="flex flex-row gap-3">
                        <h1 className="text-white text-[20px] font-bold">о компании</h1>
                        <img src="./mainStrelka.svg" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 w-[650px]">
                  
                    <div className="bg-[#5DB7DE] rounded-2xl p-6 text-white w-[300px] h-[250px]">
                        <p className="uppercase text-sm opacity-80 mb-4">услуги</p>
                        <h3 className="font-semibold text-lg">
                            Погрузочно-разгрузочная<br />деятельность
                        </h3>
                    </div>

                    
                    <div className="bg-[#5DB7DE] rounded-2xl p-6 text-white w-[300px] h-[250px]">
                        <p className="uppercase text-sm opacity-80 mb-4">услуги</p>
                        <h3 className="font-semibold text-lg">Хранение грузов</h3>
                    </div>

                   
                    <div className="bg-[#5DB7DE] rounded-2xl p-6 text-white w-[300px] h-[250px]">
                        <p className="uppercase text-sm opacity-80 mb-4">услуги</p>
                        <h3 className="font-semibold text-lg">Складские операции</h3>
                    </div>

                   
                    <div className="bg-[#5DB7DE] rounded-2xl p-6 text-white w-[300px] h-[250px]">
                        <p className="uppercase text-sm opacity-80 mb-4">услуги</p>
                        <h3 className="font-semibold text-lg">Швартовые операции</h3>
                    </div>
                </div>


            </div>
        </div>
    )

}

export default MainPage