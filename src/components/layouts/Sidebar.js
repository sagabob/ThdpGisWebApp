import logo from '../../assets/images/logos/tdp-logo.svg';
import { ViewGridIcon, PencilAltIcon } from '@heroicons/react/solid'
const SideBar = () => {

    return (
        <aside className="w-52 shadow-md fixed top-0 left-0 min-h-screen z-50 bg-gray-50" aria-label="Sidebar">
            <div className="">
                <div className="flex items-center justify-center px-2 py-3 shadow-md border-b-2 border-gray-300">
                    <a href="https://tdp-techground.info/" className="flex items-center justify-center">
                        <img src={logo} className="w-16" alt="Tdp Logo" />
                    </a>
                </div>
                <div className="bg-gray-200 min-h-screen">
                    <ul className="w-full">
                        <li className="flex items-center justify-start  px-2 py-3 hover:bg-sky-50 cursor-pointer group border-sky-50 border-b-2">
                            <button type="button" className="flex items-center justify-center rounded-lg text-blue-600 group-hover:text-purple-500">
                                <ViewGridIcon className="w-6 h-6" />
                                <span className="ml-1 group-hover:font-bold">Layers</span>
                            </button>
                        </li>
                        <li className="flex items-center justify-start  px-2 py-3 hover:bg-sky-50 cursor-pointer group border-sky-50 border-b-2">
                            <button type="button" className="flex items-center justify-center rounded-lg text-blue-600 group-hover:text-purple-500" >
                                <PencilAltIcon className="w-6 h-6" />
                                <span className="ml-1 group-hover:font-bold">Draw Shapes</span>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </aside>
    )


}

export default SideBar