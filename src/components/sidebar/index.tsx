"use client";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  BsCurrencyDollar,
  BsFillFileImageFill,
  BsFillImageFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import logo from "@/assets/imgs/mainlogo.png";
function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen);
  };

  return (
    <Sidebar collapsed={sidebarOpen}>
      <div className="p-3 m-3 " onClick={handleToggle}>
        <Image src={logo} alt="main" />
      </div>
      <Menu
       closeOnClick
      >
        <SubMenu
          icon={<AiOutlineShoppingCart className="text-hoverColor" />}
          defaultOpen
          // component={<Link />}
          label="Orders"
        >
          <MenuItem component={<Link href="/admin/cart" />}>
            Orders
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<BsFillPersonFill className="text-hoverColor"/>} label="Customer">
          <MenuItem component={<Link href="/admin/customers" />}>
            Staff
          </MenuItem>
          <MenuItem component={<Link href="/admin/staffs" />}>
            Customer
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<TbDiscount2 className="text-hoverColor"/>} label="Products">
          <MenuItem component={<Link href="/admin/products" />}>
            All products
          </MenuItem>
          <SubMenu label="Change infomation">
            <MenuItem component={<Link href="/admin/add/product" />}>
              Add product
            </MenuItem>
            <MenuItem component={<Link href="/admin/product-type" />}>
              Types Product
            </MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu icon={<BsFillImageFill className="text-hoverColor"/>} label="Website">
          <MenuItem
            icon={<BsFillImageFill className="text-hoverColor"/>}
            component={<Link href="/admin/slider" />}
          >
            Slider
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<BsCurrencyDollar className="text-hoverColor"/>}
          component={<Link href="/admin/dashboard" />}
        >
          Reports
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
