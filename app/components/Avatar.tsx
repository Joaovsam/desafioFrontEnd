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
        className="rounded-full"
        height={big ? 50 : 30}
        width={big ? 50 : 30}
        src={src || "/images/placeholder.jpg"}        
        />
        
    )
}

export default Avatar