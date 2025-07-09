export const HeaderLanding = () => {
    return (
        <div className="bg-[#17494c]">
            <div className="flex justify-end max-w-4xl mx-auto text-stone-300 pt-4 font-extralight">
                <ul className="flex gap-4 text-[.7rem]">
                    <li>
                        Sing In
                    </li>
                    <li>
                        Product Support
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        Contact us
                    </li>
                    <li>
                        English
                    </li>
                </ul>
            </div>


            <header className="flex justify-between items-center max-w-4xl mx-auto text-white py-5">
                <h2 className="text-2xl">Zendesk</h2>
                <menu>
                    <ul className="flex gap-16 items-center">
                        <li>
                            Product
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Solucition
                        </li>
                        <li>
                            Demo
                        </li>
                        <li>
                            Resources
                        </li>
                        <li className="bg-[#e4f0d3] p-3 text-[#03363e] font-bold">
                            Free trial
                        </li>
                    </ul>
                </menu>
            </header>
        </div>
    )
}