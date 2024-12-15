function Checklist() {
    return (
        <div
            id="checklist-section"
            className="w-full bg-white shadow-md p-0 rounded-lg mr-0"
        >
            <h2 className="text-xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc pl-5">
                <li>
                    <input type="checkbox" id="item1" className="mr-2" />
                    <label htmlFor="item1">Activité 1</label>
                </li>
                <li>
                    <input type="checkbox" id="item2" className="mr-2" />
                    <label htmlFor="item2">Activité 2</label>
                </li>
                <li>
                    <input type="checkbox" id="item3" className="mr-2" />
                    <label htmlFor="item3">Activité 3</label>
                </li>
            </ul>
        </div>
    );
}

export default Checklist;
