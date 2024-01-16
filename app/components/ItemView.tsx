interface ItemViewProps {
  image_url?: string,
  label: string,
}

const ItemView: React.FC<ItemViewProps> = ({ 
  image_url,
  label,
 }) => {
  return ( 
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <img  src={image_url} width={40} height={40} className="text-neutral-600" />
        <div className="flex flex-col">
            <div 
              className="text-lg font-semibold"
            >
              {label}
            </div>
        </div>
      </div>
    </div>
   );
}

 
export default ItemView;