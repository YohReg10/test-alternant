function Header() {
    return (
      <header className="flex justify-between items-center bg-gray-200 w-full">
        <div className="flex">
          <div className="w-1/3">
            <img
              src="/images/beach.jpg"
              alt="Plage"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-1/3">
            <img
              src="/images/montpellier.jpg"
              alt="Montpellier"
              className="w-full h-64 object-cover"
            />
          </div>
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
  