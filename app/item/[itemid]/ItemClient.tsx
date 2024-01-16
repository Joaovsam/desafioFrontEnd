
// import axios from "axios";
import React, { useState } from "react";


import Container from "../../components/Container";
import ItemInfo from "@/app/components/items/ItemInfo"; 




const PATH = process.env.REACT_APP_MINIO_URL

type Item = {
  name: string,
  description: string, 
  image_url: string, 
  category: string ,
  price: string,
}


interface itemClientProps {    
    item: Item
}

const ItemClient: React.FC<itemClientProps> = ({
  item,
}) => {
  
  return (    
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ItemInfo
              item = {item}
              description={item.description}
              category={item.category}
              image_url={item.image_url}
              name={item.name}    
              price={item.price}         
            />
          </div>        
        </div>
      </div>
    </Container>
    
   );

}

export default ItemClient;