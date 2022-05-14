import logo from '../../assets/images/logos/tdp-logo.svg';
import { ViewGridIcon, PencilAltIcon } from '@heroicons/react/solid'
const SideBar = () => {

    return (
        <aside className="w-40 shadow-md fixed top-0 left-0 min-h-screen" aria-label="Sidebar">
            <div className="">
                <div className="flex items-center justify-center px-2 py-3 shadow-md border-b-2">
                    <a href="#" className="flex items-center justify-center">
                        <img src={logo} className="w-16" alt="Tdp Logo" />
                    </a>
                </div>
                <div className="bg-gray-200 min-h-screen">
                    <ul className="">
                        <li className="flex items-center justify-start mb-2 px-2 py-3 hover:bg-sky-50">
                            <a href="#" className="flex items-center justify-center rounded-lg text-blue-600 hover:text-purple-500">
                                <ViewGridIcon className="w-6 h-6" />
                                <span className="ml-1 hover:font-bold">Dashboard</span>
                            </a>
                        </li>
                        <li className="flex items-center justify-start mb-2 px-2 py-3 hover:bg-sky-50">
                            <button type="button" className="flex items-center justify-center rounded-lg text-blue-600 hover:text-purple-500" >
                                <PencilAltIcon className="w-6 h-6" />
                                <span className="ml-1 hover:font-bold">Draw Shapes</span>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </aside>
    )


}

export default SideBar