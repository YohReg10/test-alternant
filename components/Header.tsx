function Header() {
    return (
        <header className="bg-gray-200 w-full">
            {/* Conteneur parent pour toutes les images */}
            <div className="flex w-full">
                {/* Première image */}
                <div className="w-1/3">
                    <img
                        src="/images/beach.jpg"
                        alt="Plage"
                        className="w-full h-64 object-cover"
                    />
                </div>

                {/* Deuxième image */}
                <div className="w-1/3">
                    <img
                        src="/images/montpellier.jpg"
                        alt="Montpellier"
                        className="w-full h-64 object-cover"
                    />
                </div>

                {/* Troisième image */}
                <div className="w-1/3">
                    <img
                        src="/images/family.jpg"
                        alt="Famille"
                        className="w-full h-64 object-cover"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
