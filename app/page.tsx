"use client"
import axios from 'axios';
import React,{useState,useEffect} from "react";

import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ItemCard from "./components/items/ItemCard";



const Home = () =>{
    
    const [items,setItems] = useState<any[] | null>(null);


    useEffect(()=>{
      axios.get('/api/itens').then(
        (response:any)=>{
          console.log(response.data)
          setItems(response.data)
          console.log(items)
        }
      ) 
    },[])
  
    if (items?.length === 0) {
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
            {items?.map((item) => (
              <ItemCard
                key={item.id}
                data={item}
              />
            ))}
          </div>
      </Container>
    )
}

export default Home