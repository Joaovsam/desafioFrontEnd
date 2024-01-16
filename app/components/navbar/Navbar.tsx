'use client'

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import ShoppingMenu from "./ShoppingMenu";

import { usePathname } from "next/navigation";

const Navbar = () =>{
    

    const pathname = usePathname();
    const isMainPage = pathname === '/';



    return(
        <div className="fixed w-full bg-white z-10 shadow-s,">
            <div
                className="
                py-4
                border-b-[1px]
                "
            >
                <Container>
                    <div 
                        className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                        "
                    >
                        <Logo />
                        {isMainPage && <Search/>}                        
                        <ShoppingMenu/>
                    </div>
                </Container>                
            </div>
        </div>
    )
}

export default Navbar