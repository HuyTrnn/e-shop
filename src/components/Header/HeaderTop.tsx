import ButtonSearch from "../Button";
import LanguageSwitcher from "../Button/LanguageButton";
import {AiTwotonePhone} from 'react-icons/ai'
import {GrMail} from "react-icons/gr"
import {BsCart4} from "react-icons/bs"
import { useEffect, useState } from "react";
import Bill from "../Bill";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { fetchCart } from "@/store/thunks/fetchCart";


const HeaderTop = () => {
  const [toggle, setToggle] = useState(false)
  const quantity = useSelector((state: RootState) => state.bill.cartData.items);
  const [bill, setBill] = useState(false)
  function handleClick() {
    setToggle(!toggle)
  }
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCart());
  }, [quantity, dispatch])

  const getBill = () => {
    setBill(!bill)
  }

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
               
                <AiTwotonePhone className="w-3 mr-1"/>
                <span>19001052</span>
              </li>

              <li className="leading-6 flex mr-3 items-center hidden lg:flex">
                <GrMail className="w-3 mr-1"/>
                thecameliavn@gmail.com
              </li>
              <li className="leading-6 flex mr-3 items-center">
                <ButtonSearch />
              </li>

              <li
                className="leading-6 flex mr-1 items-center relative"
                onClick={handleClick}
              >
                <button onClick={getBill}>
                  <BsCart4 className="w-7 h-7 "/>
                    <span className="bg-red-500 text-white-200 text-xs rounded-full w-5 h-5 flex items-center justify-center ml-1 absolute bg-hoverColor top-0 right-[-8px]">
                      {quantity.length}
                    </span>
                </button>
                {bill && <Bill onBill={getBill} toggle={toggle}/>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default HeaderTop;