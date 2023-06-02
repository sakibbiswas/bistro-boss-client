import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
const AddItems = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
    }
    return (
        <div className='w-full px-10 bg-slate-200'>
            <Helmet>
                <title>Bistro boss || Add items </title>
            </Helmet>
            <SectionTitle subheading="  What's new " heading='Add an Items'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" {...register("name", { required: true, maxLength: 120 })} class="input input-bordered w-full " />
                </div>
                <div className="flex gap-5">
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text font-semibold">Category*</span>

                        </label>
                        <select {...register("category", { required: true, maxLength: 120 })} class="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true, maxLength: 20 })} placeholder="Type here" class="input input-bordered w-full " />
                    </div>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text font-semibold">Recipe Details*</span>

                    </label>
                    <textarea {...register("details", { required: true, maxLength: 20 })} class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text font-semibold">Item Image*</span>

                    </label>
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <input className='btn btn-block mt-4' type="submit" value="Add Items" />


            </form>
        </div>
    );
};

export default AddItems;