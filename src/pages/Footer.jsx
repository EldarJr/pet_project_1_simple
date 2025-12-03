import React from "react";

function Footer() {
    return (
        <div className=" pt-10 pb-10 ">
            <div className="w-full bg-[#3D348B] py-8">
                <div className="flex justify-around items-center">
                    <div className="flex flex-row items-center ">
                        <img src="/footer/firstLineOne.svg" alt="" />
                        <h1 className="text-white font-medium pl-2">123456, г. Тавима, ул. Морская, д. 21</h1>
                    </div>
                    <div>
                        <img src="/footer/firstLineTwo.svg" alt="" />
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <div className="flex flex-row items-center">
                            <img src="/footer/firstLineThree.svg" alt="" />
                            <h1 className="text-white pl-2">+7 (123) 456-67-89</h1>
                        </div>

                        <div className="flex flex-row items-center ">
                            <img src="/footer/firstLineFour.svg" alt="" />
                            <h1 className="text-white pl-2">order@visma.ru</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full bg-[#3A2E8A] text-white py-16 px-6 flex justify-center">
                <div class="w-full max-w-[1200px]">

                   
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 flex ">

                       
                        <div>
                            <h3 class="text-sm font-bold tracking-wider mb-5">ИНФОРМАЦИЯ О ЮР. ЛИЦЕ</h3>
                            <ul class="space-y-2 text-sm">
                                <li>ОГРН 111111111111111</li>
                                <li>ИНН 222222222222</li>
                                <li>КПП 33333333333</li>
                                <li>ОКПО 4444444444 ОКВЭД 52.24</li>
                                <li>ОКТМО 5555555555</li>
                            </ul>
                        </div>

                       
                        <div>
                            <h3 class="text-sm font-bold tracking-wider mb-5">ЗАКУПКИ</h3>
                            <ul class="space-y-2 text-sm">
                                <li>Нормативные документы</li>
                                <li>Закупки на VISMA Order</li>
                                <li>Закупки на VISMA Tender</li>
                            </ul>
                        </div>

                       
                        <div>
                            <h3 class="text-sm font-bold tracking-wider mb-5">АКЦИОНЕРАМ</h3>
                            <ul class="space-y-2 text-sm">
                                <li>Устав VISMA</li>
                                <li>Свидетельства госрегистрации</li>
                                <li>Список аффилированных лиц</li>
                                <li>Информация</li>
                                <li>Отчеты</li>
                            </ul>
                        </div>

                      
                        <div>
                            <h3 class="text-sm font-bold tracking-wider mb-5">О КОМПАНИИ</h3>
                            <ul class="space-y-2 text-sm">
                                <li>Порт сегодня</li>
                                <li>Характеристики порта</li>
                                <li>История</li>
                                <li>Дипломы и награды</li>
                                <li>Транспортная безопасность</li>
                                <li>Экология</li>
                                <li>Правовая информация</li>
                            </ul>
                        </div>

                    </div>

                    
                    <div class="w-full h-[2px] bg-[#7A3CF0] mt-16 mb-6"></div>

                   
                    <p class="text-center text-sm tracking-widest text-gray-300">
                        ВСЕ ПРАВА ЗАЩИЩЕНЫ АО VISMA
                    </p>

                </div>
            </div>


        </div>
    )

}

export default Footer