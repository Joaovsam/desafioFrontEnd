import React from 'react';

import { IconType } from "react-icons";


import Avatar from '../Avatar';

interface iItemInfoProps {
  description: string;
  image_url: string;
  category: string;
  name: string;
}
const MINIO_PATH = process.env.REACT_APP_MINIO_URL

const ItemInfo: React.FC<iItemInfoProps> = ({
  description,
  category,
  name,
  image_url,
}) => {

 
  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-center gap-2">
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
            {category} .
          </div>
          
        </div>
      </div>
      </div>
      <hr />
      
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
    </div>
   );
}
 
export default ItemInfo;