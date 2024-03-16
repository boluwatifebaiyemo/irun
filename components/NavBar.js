import * as React from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { Merriweather } from "next/font/google";
import { GoDotFill } from "react-icons/go";

const MerriReg400 = Merriweather({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
});


export function NavBar() {
    const [showMenu, setShowMenu] = React.useState(true);

    return (
        <nav className="h-[60px] grid grid-cols-2 lg:grid-cols-3 bg-[#402B3A] border-b border-amber-600 px-2 md:px-8 lg:px-16">

            {/* show only on desktop */}
            <ul className="hidden lg:flex flex-row gap-4 items-center">
                <li><Link className={styles.navLink} href="#">Shop</Link></li>
                <li><Link className={styles.navLink} href="#">Accessories</Link></li>
                <li><Link className={styles.navLink} href="#">Showroom</Link></li>
                <li><Link className={styles.navLink} href="/contact-us">Contact Us</Link></li>
            </ul>

            {/* show on all devices */}
            <div className="flex flex-row gap-1 justify-start lg:justify-center items-center ">
                {/* <p className={`${MerriReg400.className} text-4xl text-gray-100`}>Irun<span>.</span></p> */}
                <h1 className={`${MerriReg400.className} text-4xl text-gray-100`}>Irun</h1>
                <GoDotFill className="text-2xl text-amber-400" />
            </div>

            {/* show on mobile and tablet */}
            <div className="lg:hidden flex justify-end items-center">
                <HiMenuAlt3 className={`${showMenu ? "flex" : "hidden"} text-gray-200 text-4xl`} />
                <MdClose className=" hidden text-gray-200 text-4xl" />
            </div>



            {/* show only on desktop */}
            <div className="hidden lg:flex flex-row gap-6 justify-end">
                <div className="flex flex-row gap-4">
                    <blockquote className="flex flex-row items-center">
                        <FaGlobeAmericas className="text-amber-400" />
                        <span className="text-gray-200">English</span>
                        <MdKeyboardArrowDown className="text-gray-200" />
                    </blockquote>
                    <blockquote className="flex flex-row items-center">
                        <BsCurrencyDollar className="text-amber-400" />
                        <span className="text-gray-200">USD</span>
                        <MdKeyboardArrowDown className="text-gray-200" />
                    </blockquote>
                </div>
                <ul className="flex flex-row gap-4 items-center ">
                    <li><Link href="#"><CiSearch className={styles.navLinkIcon} /></Link></li>
                    <li><Link href="#"><CiUser className={styles.navLinkIcon} /></Link></li>
                    <li><Link href="#"><CiHeart className={styles.navLinkIcon} /></Link></li>
                    <li><Link href="#"><CiShoppingCart className={styles.navLinkIcon} /></Link></li>
                </ul>

            </div>
        </nav>
    )
}

const styles = {
    navLink: "text-gray-200",
    navLinkIcon: "text-gray-200 text-2xl",
}