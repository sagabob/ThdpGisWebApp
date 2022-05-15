import { SearchCircleIcon } from '@heroicons/react/solid'

const Searchbar = () => {
    return (
        <>
            <div className="fixed top-3 left-[400px] z-40 flex justify-center">
                <div className="mb-3 xl:w-96">
                    <input type="search" className="flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search..." aria-label="Search" />
                </div>
            </div>
        </>);

}

export default Searchbar