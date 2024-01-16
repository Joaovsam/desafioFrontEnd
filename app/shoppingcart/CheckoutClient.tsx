
// import axios from "axios";
import React from "react";


import Container from "../components/Container";
import CheckoutForm from "../components/checkout/CheckoutForm";  
import ItemView from "../components/ItemView";
import EmptyState from "../components/EmptyState";

type Item  = {
  category: string;
  description: string;
  image_url: string;
  name: string;
  price: string;
}


const PATH = process.env.REACT_APP_MINIO_URL


const CheckoutClient = () => {

  let itemsArray = JSON.parse(localStorage.getItem('shoppingCart') || '[]');

  if (!itemsArray || itemsArray.length == 0) {
    return (      
        <EmptyState  
          title="Não ha nada no seu carrinho."
          subtitle="Adicione novos itens"
        />      
    );
  }

  var precoTotal = itemsArray.reduce(function (acc : number, item : Item) {
    var precoItem = parseFloat(item.price.replace(',', '.'));  
    return acc + precoItem;
  }, 0);

  return (    
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      >        
        Itens do seu carrinho
        <div className="flex flex-row gap-4 w-full justify-between">          
          <div
            className="
              flex
              flex-col  
              gap-4
            "
          >
            {itemsArray.map((item:Item)=>
                <ItemView 
                  label={item.name}
                  image_url={item.image_url}
                />  

            )}
          </div>

          <CheckoutForm
            precoTotal = {precoTotal}
          />      
        </div>
      </div>
    </Container>
    
   );

}

export default CheckoutClient;