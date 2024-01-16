
// import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { toast } from "react-hot-toast";


import Container from "../components/Container";
import CheckoutForm from "../components/checkout/CheckoutForm";  
import ItemView from "../components/ItemView";




const PATH = process.env.REACT_APP_MINIO_URL



const CheckoutClient = ({
}) => {
  return (    
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      >        
        <div className="flex flex-row gap-6 w-full justify-between">          

          <ItemView label="Nome do produto"/>                    
          <CheckoutForm
            />      
        </div>
      </div>
    </Container>
    
   );

}

export default CheckoutClient;