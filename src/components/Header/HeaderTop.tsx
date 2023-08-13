import ButtonSearch from "../Button";
import LanguageSwitcher from "../Button/LanguageButton";

const HeaderTop = () => {
    return (
      <div className="wrapper h-full px-7 sticky top-0 bg-white-600">
        <div className="inner flex h-full justify-between text-center">
          <div className="header-top__link text-xs pl-8 ml-10 flex items-center cursor-pointer">
            <a href="/">Camelia Brand ®</a>
          </div>
          <div className="header-top__list flex text-center pl-8 ">
            <ul className="flex">
              <li className="leading-6 flex mr-3 items-center">
                <LanguageSwitcher />
              </li>
              <li className="leading-6 flex mr-3 items-center hidden lg:flex">
                {/* <img alt="" className="w-3 mr-1" src={logo.phone} /> */}
                <span>19001052</span>
              </li>

              <li className="leading-6 flex mr-3 items-center hidden lg:flex">
                {/* <img alt="" className="w-3 mr-1" src={logo.email} /> */}
                thecameliavn@gmail.com
              </li>
              <li className="leading-6 flex mr-3 items-center">
                <ButtonSearch />
              </li>

              <li
                className="leading-6 flex mr-1 items-center relative"
              >
                <button>
                  {/* <img alt="" className="w-7 h-7 " src={logo.cart}></img> */}
                  {/* {totalQuantity > 0 && (
                    <span className="bg-red-500 text-white-200 text-xs rounded-full w-5 h-5 flex items-center justify-center ml-1 absolute bg-hoverColor bottom-0 right-[18px]">
                      {totalQuantity}
                    </span>
                  )} */}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default HeaderTop;