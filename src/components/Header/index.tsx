import { IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";
import useTheme from "../../context/theme";

const ToggleComponent = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleToggle = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };
  
  return (
    <>
      <input
        type="checkbox"
        checked={themeMode === "dark"}
        onChange={handleToggle}
        className="opacity-0 absolute"
        id="checkbox"
      />
      <label
        htmlFor="checkbox"
        className="bg-[#111] w-16 h-8 rounded-full p-1 flex items-center cursor-pointer relative"
      >
        <IoMoon className="text-yellow-400 absolute left-2" size={18} />
        <IoSunny className="text-yellow-500 absolute right-2" size={18} />
        <span
          className={`bg-white w-6 h-6 absolute rounded-full transition-transform duration-200 ease-linear ${
            themeMode === "dark" ? "translate-x-8" : "translate-x-0"
          }`}
          style={{ top: "4px" }}
        ></span>
      </label>
    </>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between w-full bg-white dark:bg-gray-900 px-3 md:px-4 py-3 border-b sticky top-0 z-10">
      <Link to="/">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          QuoteVerse
        </h1>
      </Link>
      <div className="flex flex-row gap-2 justify-center items-center">
        <Link
          to="/star-quotes"
          className="bg-blue-600 text-white px-4 py-[5px] rounded-md"
        >
          Star Quotes
        </Link>
        <div className="relative justify-center items-center">
          <ToggleComponent />
        </div>
      </div>
    </div>
  );
};

export default Header;
