import React from "react";
import SectionCard from "./sectionCard";

function Section() {
    return (
        <div className="px-[20px] pt-20 pb-20">
            <div className="flex flex-row items-start justify-center gap-22 ">
                <div className="flex flex-col items-start gap-10">
                    <h1 className="font-semibold text-[25px]">Услуги</h1>

                    <div className="gap-5 flex flex-col items-start">
                        <div className="flex flex-row items-center justify-center gap-3">
                            <p className="text-gray-600">Тарифы на услуги по обеспечению <br /> контроля доступа на территорию <br /> VISMA на 2022 год</p>
                            <img src="/section/pfd.svg" alt="" />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <p className="text-gray-600">Тарифы на услуги по обеспечению <br /> контроля доступа на территорию <br /> VISMA на 2022 год</p>
                            <img src="/section/pfd.svg" alt="" />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <p className="text-gray-600">Тарифы на услуги по обеспечению <br /> контроля доступа на территорию <br /> VISMA на 2022 год</p>
                            <img src="/section/pfd.svg" alt="" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-row items-center gap-5 ">
                    <div className="flex flex-col gap-5">
                        <SectionCard text="Хранение грузов" />
                        <SectionCard text="Складские операции" />
                        <SectionCard text="Буксировка / сопровождение судов" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <SectionCard text="Швартовые операции" />
                        <SectionCard text="Агентское обслуживание судов" />
                        <SectionCard text="Погрузочно-разгрузочная деятельность" />
                    </div>

                </div>
            </div>

        </div>
    )

}

export default Section