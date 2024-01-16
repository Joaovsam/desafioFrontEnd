"use client"

import React,{useState,useCallback} from "react";


import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useRouter } from "next/navigation";

//TODO MUDAR USUARIO

const ShoppingMenu = ({
}) =>{


    const route = useRouter();

 
    
    return(
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={()=>{route.push('/shoppingcart')}}
                    className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-med
                        transition
                    "
                >
                    <AiOutlineShoppingCart/>
                </div>
            </div>
        </div>     
    )
}

export default ShoppingMenu