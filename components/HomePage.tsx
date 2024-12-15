import Header from "../components/Header";
import Checklist from "../components/Checklist";
import Results from "../components/Results";

function HomePage() {
    return (
        <div id="layout-page" className="bg-blue-50 h-screen">
            {/* Header et ruban supérieur */}
            <div id="header-ruban" className="text-black">
                <Header />
                <h1 className="text-center text-3xl p-3">
                    <strong>Activités et Aventures à Montpellier</strong>
                </h1>
            </div>

            {/* Contenu principal du site */}
            <div id="site-content" className="flex flex-row gap-4 p-4">
                {/* Section gauche : Checklist */}
                <div id="checklist-section" className="w-1/4">
                    <Checklist />
                </div>

                {/* Section droite : Résultats */}
                <div id="results-section" className="w-3/4">
                    <Results />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
