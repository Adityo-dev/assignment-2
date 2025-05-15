import logo from "../../assets/logo.svg";
import userIcon from "../../assets/user-icon.svg";

function Header() {
  return (
    <nav className="bg-[#5956564a] rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-2">
          <img src={logo} />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-[#ff602c]">Dine</span>Out
        </h1>
      </div>
      <div className="flex items-center">
        <img src={userIcon} className="h-10" />
      </div>
    </nav>
  );
}

export default Header;
