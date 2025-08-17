import React from 'react';
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/features/products/productSlice';

const AddProduct = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addProduct(data))
  }
  
    return (
        <div>
         <div className="hero bg-base-200">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <h1 className="text-2xl text-center font-bold">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input {...register("name", { required: true })} type="text" name='name' placeholder="Product Name" className="input input-bordered" required />
        </div>
        <div className='form-control'>
            <select {...register("category", { required: true })} name='category' className="select select-bordered w-full max-w-xs">
            <option disabled selected>Select a Category</option>
            <option value='fashion'>Fashion</option>
            <option value='gadgets'>Gadgets</option>
            <option value='bag'>Bag</option>
            </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input {...register("price", { required: true })} type="number" name='price' placeholder="Price" className="input input-bordered" required />
        </div>
        <div className='form-control'>
            <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input {...register("image", { required: true })} type="text" name='image' placeholder="Image Url" className="input input-bordered" required />
        </div>
        <div className='form-control'>
            <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input {...register("date", { required: true })} type="date" name='date' placeholder="Date" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
</div>   
        </div>
    );
};

export default AddProduct;