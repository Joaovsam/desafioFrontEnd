import React from 'react';



import Avatar from '../Avatar';
import Button from '../Button';

type Item = {
  name: string,
  description: string, 
  image_url: string, 
  category: string ,
  price: string,
}


interface iItemInfoProps {
  item: Item;
  description: string;
  image_url: string;
  category: string;
  name: string;
  price: string;
}
const MINIO_PATH = process.env.REACT_APP_MINIO_URL

const ItemInfo: React.FC<iItemInfoProps> = ({
  item,
  description,
  category,
  name,
  image_url,
  price,
}) => {


  const handleAddToShoppingCart = () => {
    let itemsArray = JSON.parse(localStorage.getItem('shoppingCart') || '[]');

    let novoItem = item;
    itemsArray.push(novoItem);
      
    localStorage.setItem('shoppingCart', JSON.stringify(itemsArray));
  }
 
  return ( 
    <div className="col-span-8 flex flex-col gap-8">
      <div className="items-center gap-2">
        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-8 
          "
        >
        <Avatar src={image_url} big/>
        <div className="flex flex-col gap-2">
          <div 
            className="
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            "
          >
            <div>{name}</div>
          </div>
          <div className="
              flex 
              flex-row 
              items-center 
              gap-4 
              font-light
              text-neutral-500
            "
          >
          
            <div>
              {category}.
            </div>
            
          </div>
              <div
              className="
                flex
                flex-row
                items-center
                justify-between
                gap-5
                mt-10
              "
            >
              <div className="
                    text-4xl	
                    font-bold
                    text-center	
                  ">
                {price}
              </div>
              <Button
                label='Adicionar ao carrinho'
                onClick={handleAddToShoppingCart}
              />
            </div>


        </div>

        
        </div>
      </div>
      <hr />
      
      <div className="
        text-lg font-light text-neutral-500">
        {description}
      </div>
    </div>
   );
}
 
export default ItemInfo;