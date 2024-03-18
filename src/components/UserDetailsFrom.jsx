"use client"

import axios from "axios";
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";

const UserDetailsFrom = ({ userData }) => {
    const [data, setData] = useState(userData);



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            data.firstName === userData.firstName &&
            data.lastName === userData.lastName &&
            data.phone === userData.phone
        ) return toast.error("No Chnages happend")

        try {
            const response = await axios.patch(`https://sixsense-task-backend.onrender.com/api/user/update/${userData._id}`, data)
            console.log(response);
            if (!response.data.success) return toast.error("Update Failed")
            toast.success("Update Successfull")
            setData(response.data)
        } catch (error) {
            console.log(error);
            toast.error("Update Failed!")
        }
    }
    console.log(data);

    return (

        <div className="list_items mt-8 grid gap-3">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='input_feild'>
                        <label htmlFor="firstName">
                            <p>First Name</p>
                            <input
                                onChange={(e) => setData({ ...data, firstName: e.target.value })}
                                defaultValue={data?.firstName && data.firstName}
                                type="text"
                            />
                        </label>
                    </div>
                    <div className='input_feild'>
                        <label htmlFor="lastName">
                            <p>Last Name</p>
                            <input
                                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                                defaultValue={data?.lastName && data.lastName}
                                type="text"
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <div className='input_feild mt-5'>
                        <label htmlFor="email">
                            <p>Email Address</p>
                            <input
                                disabled
                                defaultValue={data?.email && data.email}
                                type="email"
                            />
                        </label>
                    </div>
                    <div className='mt-5 input_feild'>
                        <label htmlFor="phone">
                            <p>Phone Number</p>
                            <input
                                onChange={(e) => setData({ ...data, phone: e.target.value })}
                                defaultValue={data?.phone && data.phone}
                                name='phone'
                                type="text"
                            />
                        </label>
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-end">
                    <button type="submit" className="addBtn text-gray-100 bg-green-600 hover:bg-green-700 capitalize">
                        Save Changes
                    </button>
                </div>
            </form>
            <Toaster
                position="bottom-center"

            />
        </div>
    )
}

export default UserDetailsFrom