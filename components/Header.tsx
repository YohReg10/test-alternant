
function Header() {
    return (
        <header className="flex justify-between items-center bg-gray-200 w-full p-4">
        {/* Conteneur principal avec flex pour aligner les éléments */}
        <div className="w-1/3">
            <img
            src="/images/beach.jpg"
            alt="Musée"
            className="w-full h-64 object-cover"
            />
        </div>
        <div className="w-1/3">
            <img
            src="/images/montpellier.jpg"
            alt="Musée"
            className="w-full h-64 object-cover"
            />
        </div>
        <div className="w-1/3">
            <img
            src="/images/family.jpg"
            alt="Musée"
            className="w-full h-64 object-cover"
            />
        </div>
        </header>
    );
}
export default Header;
  