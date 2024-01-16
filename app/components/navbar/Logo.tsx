"use client"
import React from "react";
import { useRouter } from 'next/navigation'



const Logo = () =>{
    
    const route = useRouter();

    //TODO retornar o hidden quando voltarmos com o search
    return(
        <img
        onClick={() => route.push('/')}
        alt="Logo"
        className=" md:block cursor-pointer"
        height={150}
        width={150}
        src="/vercel.svg"       
        />
    )
}

export default Logo