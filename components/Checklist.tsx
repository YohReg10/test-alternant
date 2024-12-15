function Checklist() {
    return (
        <div
            id="checklist-section"
            className="w-full bg-white shadow-md p-4 rounded-lg"
        >
            <h2 className="text-xl font-bold mb-4">Distances</h2>
            <ul className="list-none pl-0">
                <li className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" id="item1" className="w-5 h-5" />
                    <label htmlFor="item1" className="leading-5">&lt;5km</label>
                </li>
                <li className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" id="item2" className="w-5 h-5" />
                    <label htmlFor="item2" className="leading-5">&lt;15km</label>
                </li>
                <li className="flex items-center space-x-2">
                    <input type="checkbox" id="item3" className="w-5 h-5" />
                    <label htmlFor="item3" className="leading-5">&lt;25km</label>
                </li>
            </ul>
        </div>
    );
}

export default Checklist;
