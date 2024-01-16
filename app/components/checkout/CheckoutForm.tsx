import React from 'react'


import Button from '../Button';

import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import Input from '../inputs/Input';
import { useRouter } from 'next/navigation';

interface CheckoutFormProps {
  precoTotal: number;
  
}

const CheckoutForm: React.FC<
  CheckoutFormProps
> = ({  
  precoTotal, 
}) => {

  const route = useRouter();

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



  const handleCheckout = () => {
    localStorage.clear();
    route.push("/")
  }

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
          valor total
        </div>
        
          <div>
            R${precoTotal}
          </div>
             
      </div>
      
      <div className="p-2">
        <Button 
          label="Finalizar Pedido" 
          onClick={handleCheckout}
        />
      </div>
      
    </div>
   );
}
 
export default CheckoutForm;