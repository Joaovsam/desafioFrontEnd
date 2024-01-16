import React from 'react'


import Button from '../Button';

import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import Input from '../inputs/Input';

interface CheckoutFormProps {
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

const CheckoutForm: React.FC<
  CheckoutFormProps
> = ({  
  disabled, 
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
          cpf: "",
          credCardNumber: "",
          city: "",
          time: 0,
      }
  });


  return ( 
    <div 
      className="
        p-3 
        w-1/2
        bg-white 
        rounded-xl 
        border-[1px]
        border-neutral-200 
        overflow-hidden
      "
    > 
      <div className='flex flex-col'>
        <Input 
          errors={errors}
          id='name'
          label='Nome completo*'
          register={register}
          required
        />
        <Input
          errors={errors}
          id='cpf'
          label='CPF*'
          register={register}
          required
        />
        <Input
           errors={errors}
           id='credCardNumber'
           label='Número do cartão de crédito*'
           register={register}      
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
          valor
        </div>
        
          <div>
            R$10,60
          </div>
             
      </div>
      
      <div className="p-2">
        <Button 
          disabled={disabled} 
          label="Finalizar Pedido" 
          onClick={()=>{}}
        />
      </div>
      
    </div>
   );
}
 
export default CheckoutForm;