import { useState } from "react"
import { logo } from "../assets"
import { IoSearchOutline, IoClose } from "react-icons/io5"
import { FiStar, FiUser } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import Container from "./Container";
import { FaChevronDown } from "react-icons/fa";

const bottomNavigation = [
    { title : "Home" , link: "/" },
    { title : "Shop" , link: "/product" },
    { title : "Cart" , link: "/cart" },
    { title : "My Account" , link: "/profile" },
    { title : "Orders" , link: "/orders" },
    { title : "Blog" , link: "/blog" },
];


const Header = () => {

    const [ searchText, setSearchText ] = useState("");

  return (
    <div className="w-full bg-whiteText">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">

        <img src={logo} alt="logo" className="w-44" />
        {/* {Searchbar} */}
        <div className="hidden md:inline-flex max-w-3xl w-full relative ">
            <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} placeholder="Search products" className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal px-5 p-2" />
            {
                searchText ? ( <IoClose onClick={() => setSearchText("")} className="absolute top-3 right-4 text-xl"/>) : (<IoSearchOutline onClick={() => setSearchText("")} className="absolute top-3 right-4 text-xl"/>)
            }
        </div>
        {/* Menubar */}
        <div className="flex items-center gap-x-6 text-2xl">
            <FiUser className="hover:text-skyText cursor-pointer"/>
            <div className="relative block">
                <FiStar className="hover:text-skyText cursor-pointer"/>
                <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] h-4 w-4 rounded-full">0</span>
            </div>
            <div className="relative block">
                <BiShoppingBag className="hover:text-skyText cursor-pointer"/>
                <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] h-4 w-4 rounded-full">0</span>
            </div>
        </div>
      </div>
      <div className="w-full bg-darkText text-whiteText">
        <Container className="py-2 max-w-4xl flex items-center justify-between gap-5">
            <p className="flex items-center gap-1">Select Category <FaChevronDown/></p>
            {
                bottomNavigation.map(({title}) => (
                    <div className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group" key={title}>
                        <p key={title}>
                            {title}
                            <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300"></span>
                        </p>
                    </div>
                ))
            }
        </Container>
      </div>
    </div>
  )
}

export default Header
