import React from "react";


function AboutCompany() {
    return (
        <div className="px-[100px] pt-20 pb-20 bg-gray-100 w-full">

            <div className="flex flex-row items-center justify-center gap-15">

                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">О компании</h2>


                    <p className="text-gray-600 leading-7 mb-4 text-1xl">
                        Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a  <br />
                        sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus <br /> elementum diam neque
                        facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.
                    </p>


                    <p className="text-gray-600 leading-7 mb-6">
                        Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.
                    </p>


                    <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                        <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                        <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                        <li>
                            Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt <br /> non lectus odio magna semper
                            odio risus.Vivamus tincidunt non lectus odio magna semper <br /> odio risus.
                        </li>
                        <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                        <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    </ul>


                    <p className="text-gray-600 leading-7 mb-6">
                        Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis <br /> nibh libero ut
                        enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.
                    </p>


                    <ul className="list-disc list-inside space-y-3 text-gray-600">
                        <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                        <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                        <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                        <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center gap-10">
                    <div>
                        <img src="/aboutCompany/vidio.svg" alt="" />
                    </div>
                    <div className="w-[500px] h-[170px] bg-[#5DB7DE] rounded-lg p-5">

                        <h1 className="font-medium text-white text-[16px]">Запрос ставки и условий погрузочно-разгрузочных работ</h1>
                        <div className="flex justify-end flex-col h-full pb-5">
                            <p className="font-bold text-white">Рассчитайте моментально стоимость полных портовых услуг в порту VISMA</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )

}

export default AboutCompany