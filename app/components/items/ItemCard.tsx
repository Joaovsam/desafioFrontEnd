import React from "react";

import { useRouter } from 'next/navigation'


interface IItemCardProps {
  data : any;
};

const path = process.env.REACT_APP_MINIO_URL


const ItemCard: React.FC<IItemCardProps> = ({
  data,
}) => {
  const router = useRouter();
   
  const handleNavigate = (()=>{
    router.push(    `item/${data.name}`  
    )
  })

  return (
    <div 
       onClick={handleNavigate}

      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={
              data.image_url}
            alt="Item"
          />
          <div className="
            absolute
            top-3
            right-3
          ">
          </div>
        </div>
        <div className="font-semibold text-lg">
          {data.name}
        </div>
        <div className="flex flex-row items-center gap-1">
         <div className="font-semibold">
           R${data.price}
         </div>
        </div>
      </div>
    </div>
   );
}
 
export default ItemCard;