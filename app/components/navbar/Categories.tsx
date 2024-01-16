import React, {useEffect} from "react";
import Container from "../Container";


import { usePathname, useSearchParams } from 'next/navigation';

const Categories = () =>{

    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';


    if (!isMainPage) {
      return null;
    }  


    return(
        <Container>
            <div
                className="
                pt-4
                flex
                flex-row
                items-center
                overflow-x-auto
            "
            >
                <div>Canecas</div>
                <div>Camisas</div>
            </div>    
        </Container>
    )
}

export default Categories