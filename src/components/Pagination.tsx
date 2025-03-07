const Pagination = () => {
    return (
        <div className="p-4 flex items-center justify-between">
            <button disabled className="bg-slate-200 text-xs text-gray-500 py-2 px-4 rounded-md disabled:cursor-not-allowed disabled:opacity-50 font-semibold">Prev</button>
            <div className="flex items-center gap-4">
                <button className="bg-sky-100 rounded-sm px-2 text-gray-500 text-sm">1</button>
                <button className="text-gray-500 text-sm">2</button>
                <button className="text-gray-500 text-sm">3</button>
                ...
                <button className="text-gray-500 text-sm">10</button>
            </div>
            <button className="bg-slate-200 text-xs text-gray-500 py-2 px-4 rounded-md disabled:cursor-not-allowed disabled:opacity-50 font-semibold">Next</button>
        </div>
    )
}

export default Pagination;