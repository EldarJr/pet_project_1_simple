import React from "react";
import { useState } from "react";

function Header() {
    const [lang, setLang] = useState("ru");
    return (
        <div className="px-[20px] pt-10 pb-10">
            <div className="flex justify-around items-center">
                <div>
                    <img src="./header.svg" alt="" />
                </div>
                <div className="flex gap-5">
                    <a href="">О компании</a>
                    <a href="">Новости</a>
                    <a href="">Новости</a>
                    <a href="">Новости</a>
                    <a href="">Новости</a>
                    <a href="">Новости</a>
                    <a href="">Новости</a>

                </div>
                <div className="flex flex-row gap-10">
                    <div className="flex flex-row gap-3">
                        <img src="./glas.svg" alt="" width={22} height={22} />
                        <div className="border-b w-[100px] "></div>
                    </div>
                    <div>
                        <select value={lang} onChange={(e) => setLang(e.target.value)} className="border rounded-lg px-1 py-1 bg-white text-black">
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header