"use client"
import React,{useState} from "react";

import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ItemCard from "./components/items/ItemCard";



const Home = () =>{
    
    const [items,setItems] = useState<any[] | null>(null);


    const baseProducts = [
      { name: 'Caneca de cerâmica rústica', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg', category: 'mugs' , price: "12,75"},
      { name: 'Camiseta not today.', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg', category: 't-shirts', price: "12,75"},
      { name: 'Caneca Black Ring', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg', category: 'mugs', price: "12,75" },
      { name: 'Camiseta Broken Saints', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg', category: 't-shirts', price: "12,75" },
      { name: 'Camiseta Outcast', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg', category: 't-shirts', price: "12,75"},
      { name: 'Caneca The Grounds', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg', category: 'mugs', price: "12,75"},
      { name: 'Camiseta evening', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg', category: 't-shirts', price: "12,75"},
      { name: 'Caneca preto fosco', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg', category: 'mugs', price: "12,75"},
      { name: 'Caneca Never settle', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg', category: 'mugs', price: "12,75"},
      { name: 'Camiseta DREAMER', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg', category: 't-shirts', price: "12,75"},
      { name: 'Caneca Decaf! P&Co', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg', category: 'mugs', price: "12,75"},
      { name: 'Camiseta Ramones', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg', category: 't-shirts', price: "12,75"},
    ]
   
 

  
    if (baseProducts?.length === 0) {
      return (          
        <EmptyState showReset />
      );
    }


    return(
        <Container>
          <div 
            className="
              pt-10
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4
              xl:grid-cols-5
              2xl:grid-cols-6
              gap-8
            "
          > 
            {baseProducts?.map((item) => (
              <ItemCard
                key={item.name}
                data={item}
              />
            ))}
          </div>
      </Container>
    )
}

export default Home