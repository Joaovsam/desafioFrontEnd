import React from "react";

interface AvatarProps{
    src: string | null | undefined;
    big?: boolean  
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    big
}) =>{
    return(
        <img
        alt="Avatar"
        className=""
        height={600}
        width={600}
        src={src || "/images/placeholder.jpg"}        
        />
        
    )
}

export default Avatar