import './product.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from './UI/primary-button';

export interface formValues {
  productName: string,
  category: string,
  brand: string,
  image: any,
  description: string,
  quantity: string,
  condition: string,
}

const ProductForm = () => {

  const [list, setList] = useState<formValues>()
  
  const {
    register,
    handleSubmit,
  } = useForm({
    mode: 'all',
    },
  );

  const onSubmit = (data : formValues) => {
   setList(data);
   };

  return (
    <view className='container'>
    <form>
      <h4>Product Name*</h4>
      <input type="text"
        style={{ width: 400 }}
        placeholder="Name your Listing. Keep it short and sweet."
        {...register("productName")} />

      <h4>Category*</h4>
      <p>
        <input 
         type="radio" 
         {...register("category")} 
         value="collectibles" />Collectibles
          <input 
         type="radio" 
         {...register("category")} 
         value="acessories" />Acessories
        <input 
         type="radio" 
         {...register("category")} 
         value="t-shirts" />T-Shirts
      </p>
      <br />

      <h4>Thumbnail Image</h4>
      <input 
        type="file"
        {...register("image")} />

      <h4>Brand</h4>
      <input 
        type="text"
        style={{ width: 400 }}
        placeholder="Add product brand"
        {...register("brand")} />

      <h4>Description*</h4>
      <input 
       type="text"
        style={{ width: 400 }}
        placeholder="Add more information About the product"
        {...register(("description"), { required: true, maxLength: 200 })} />

      <h4>Available Qty</h4>
      <input type="text"
        placeholder="Enter available quantity"
        {...register(("quantity"), { required: true, maxLength: 30 })} />

      <h4>Condition</h4>
      <input type="text"
        placeholder="Enter available quantity"
        {...register(("condition"), { required: true, maxLength: 30 })} />

      <br />   
      <br />
      <PrimaryButton
        title='Upload Item'
        onClick={handleSubmit((data) => {
          onSubmit(data as formValues);
        })} />

    </form>
    <div>
      <h5>Name: {list?.productName}</h5>
      <h5>Category: {list?.category}</h5>
      <h5>Image:</h5>
      <h5>Brand: {list?.brand} </h5>
      <h5>Description: {list?.description}</h5>
      <h5>Quantity: {list?.quantity}</h5>
      <h5>Condition: {list?.condition} </h5>    
      </div>
      </view>
    
  );


}


export default ProductForm;