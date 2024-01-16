import React, {useCallback} from 'react'


import Button from '../Button';
import { AiFillStar } from 'react-icons/ai';

import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import Input from '../inputs/Input';

interface PortifolioContactProps {
  min_price?: number;
  max_price?: number;
  land_distance?: number;
  team?: number;
  review_note?: number;
  identifier?: string;
  coments_number?: number;
  disabled?: boolean;
  phone?: string
}

const PortifolioContact: React.FC<
  PortifolioContactProps
> = ({
  min_price,
  max_price,
  land_distance,
  team,
  identifier,
  review_note,
  coments_number,
  disabled, 
  phone 
}) => {



  const {
      register,
      handleSubmit,
      formState: {
          errors,
      },
      reset
  } = useForm<FieldValues>({
      defaultValues:{
          name: "",
          date: "",
          hour: "",
          city: "",
          time: 0,
      }
  });


  return ( 
    <div 
      className="
        p-3
        bg-white 
        rounded-xl 
        border-[1px]
        border-neutral-200 
        overflow-hidden
      "
    > 
      <div className="flex flex-col gap-1 p-2">
        <div className="
          flex flex-row items-center gap-1">
          <div className="text-2xl font-semibold">
            {identifier}
          </div>
        </div>
        <div className="flex flex-row gap-1 items-center">
          {review_note && (<div className='flex flex-row items-center gap-1 font-bold '>
            <AiFillStar/> {review_note}
          </div>)}
          {coments_number &&(
            <div className="px-2 font-semibold text-sm text-neutral-400">
              {coments_number} coments
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col'>
        <Input 
          errors={errors}
          id='name'
          label='Nome do evento'
          register={register}
        />
        <div className='flex flex-row'>
            <Input
               errors={errors}
               id='date'
               label='Data do evento*'
               register={register}
               type='date'
               required
            />
            <Input
               errors={errors}
               id='hour'
               label='Horario*'
               register={register}
               type = 'time'
               required
            />
        </div>
        <Input
          errors={errors}
          id='city'
          label='Cidade do evento*'
          register={register}
          required
        />
        <Input
           errors={errors}
           id='time'
           label='Tempo de duração (em minutos)*'
           register={register}      
           type='number'  
           required    
        />        
      </div>
      <div className="
          py-2
          items-center
          text-sm
          text-center	
          text-neutral-400
        ">
          *Dados obrigatórios
      </div>
      <div 
        className="
          p-2 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-md
        "
      >
        <div>
          Cachê
        </div>
        {min_price?
          <div className='flex flex-row'>
            R${min_price} a R${max_price}
          </div>
          :
          <div>
            R${max_price}
          </div>
        }        
      </div>
      <div 
        className="
          p-2
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-md
        "
      >
        <div>
          Transporte (Terrestre)
        </div>
        <div>
          {land_distance} Km
        </div>      
      </div>
      <div 
        className="
          p-2 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-md
        "
      >
        <div>
          Equipe
        </div>
        <div>
          {team}
        </div>
        
      </div>
      <div className="
          py-2
          items-center
          text-sm
          text-center	
          text-neutral-400
        ">
          Informações Prévias Estimadas
      </div>  
      <div className="p-2">
        <Button 
          disabled={disabled} 
          label="Pedir Orçamento" 
          onClick={()=>{}}
        />
      </div>
      
    </div>
   );
}
 
export default PortifolioContact;