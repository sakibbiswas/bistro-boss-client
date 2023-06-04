import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Usemenu from '../../hooks/Usemenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/UseAxiossecure';
import { FaTrashAlt } from 'react-icons/fa';

const ManageItems = () => {
    const [menu, , refetch] = Usemenu();
    const [axiosSecure] = useAxiosSecure();
    const handelDelete = item => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/menu/${item._id}`)
                        .then(res => {
                            console.log('deleted response', res.data);
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
    }

    return (
        <div className='w-full'>
            <SectionTitle heading="Manage all items" subheading="Harry up"></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item image</th>
                            <th> Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) =>
                            <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {item.name}
                                            </div>

                                        </div>
                                    </div>
                                </td>

                                <td>{item.category}</td>
                                <td className='text-end'> $ {item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                                <td>
                                    <button onClick={() => handelDelete(item)} className="btn btn-ghost bg-red-500 text-white btn-md"><FaTrashAlt ></FaTrashAlt></button>

                                </td>
                            </tr>
                        )}




                    </tbody>


                </table>
            </div>

        </div >
    );
};

export default ManageItems;