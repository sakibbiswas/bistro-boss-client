import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/UseAxiossecure';

const ALLusers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/users`)
        return res.data;
    })




    const handelDelete = user => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-sakibbiswas.vercel.app/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
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
    const handelMakeAdmin = user => {
        fetch(`https://bistro-boss-server-sakibbiswas.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className='w-full'>

            <Helmet
            >
                <title>Bistro boss || All Users</title>
            </Helmet>
            <h2 className='font-semibold text-3xl my-4'>Total-Users : {users.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr
                            key={user._id}>
                            <td>
                                {index + 1}
                            </td>
                            <th>
                                <div className="flex  users-center space-x-3">
                                    {user.name}
                                    <div>
                                        <div className="font-bold"></div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </th>
                            <td>
                                {user.email}
                            </td>
                            <td >
                                {user.role === 'admin' ? 'admin' :

                                    <button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost bg-orange-500 text-white btn-md">
                                        <FaUserShield></FaUserShield>
                                    </button>

                                }
                            </td>
                            <td>
                                <button onClick={() => handelDelete(user)} className="btn btn-ghost bg-red-500 text-white btn-md"><FaTrashAlt ></FaTrashAlt></button>
                            </td>
                        </tr>
                        )}




                    </tbody>


                </table>
            </div>

        </div >
    );
};

export default ALLusers;