"use client"
import React,{useState} from "react";

import EmptyState from "@/app/components/EmptyState";
import Container from "@/app/components/Container";
import ItemClient from "./ItemClient";



const Home = () =>{
    
    let item =    { name: 'Caneca de cerâmica rústica', description: "Qualquer coisa pra testar", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg', category: 'mugs' , price: "12,75"}
    // const {state} = useLocation() 
    // let item
  
  if (!item) {
    return (      
        <EmptyState 
          title="Item não encontrado."
          subtitle="Tente procurar outro item"
          showReset = {false}
        />      
    );
  }

  return (
    <>
      <ItemClient
        item={item}
      />
    </>
  );
}

export default Home