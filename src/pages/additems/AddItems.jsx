import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../hooks/UseAxiossecure';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_image_upload_token;
// console.log(img_hosting_token);
const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        // img fetch post api
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data);
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }
    return (
        <div className='w-full px-10 bg-slate-50'>
            <Helmet>
                <title>Bistro boss || Add items </title>
            </Helmet>
            <SectionTitle subheading="  What's new " heading='Add an Items'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3' >
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
                        <select defaultValue="Pick One" {...register("category", { required: true, maxLength: 120 })} class="select select-bordered">
                            <option disabled >Pick One</option>
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
                        <input type="number" {...register("price", { required: true, })} placeholder="Type here" class="input input-bordered w-full " />
                    </div>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text font-semibold">Recipe Details*</span>

                    </label>
                    <textarea {...register("recipe", { required: true, })} class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>
                <div class="form-control w-full  ">
                    <label class="label">
                        <span class="label-text font-semibold">Item Image*</span>

                    </label>
                    <input type="file" {...register("image", { required: true, })} class="file-input file-input-bordered w-full " />

                </div>

                <input className='btn btn-block mt-5' type="submit" value="Add Items" />


            </form >
        </div >
    );
};

export default AddItems;