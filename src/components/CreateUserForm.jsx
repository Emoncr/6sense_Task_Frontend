"use client"

import axios from "axios";
import { UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";



const CreateUserForm = () => {

    const [data, setData] = useState({});

    const [loading, setLoading] = useState(false);
    const router = useRouter();



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.firstName) return toast.error("First name is empty");
        if (!data.lastName) return toast.error("Last name is empty");
        if (!data.email) return toast.error("Email is empty");
        if (!data.phone) return toast.error("Phone is empty");
        try {
            setLoading(true);
            const response = await axios.post(`https://sixsense-task-backend.onrender.com/api/user/create`, data);

            setLoading(false);

            if (!response.data.success) return toast.error("Update Failed");
            toast.success("User Added Successfull");

            setData({});
            router.refresh()
        } catch (error) {
            setLoading(false);
            toast.error("User Added Failed!");
        }
    }



    return (
        <div className="list_items mt-8 grid gap-3">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='input_feild'>
                        <label htmlFor="firstName">
                            <p>First Name</p>
                            <input
                                onChange={(e) => setData({ ...data, firstName: e.target.value })}
                                value={data?.firstName ? data.firstName : ""}
                                type="text"
                            />
                        </label>
                    </div>
                    <div className='input_feild'>
                        <label htmlFor="lastName">
                            <p>Last Name</p>
                            <input
                                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                                value={data?.lastName ? data.lastName : ""}
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
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                value={data?.email ? data.email : ""}
                                type="email"
                            />
                        </label>
                    </div>
                    <div className='mt-5 input_feild'>
                        <label htmlFor="phone">
                            <p>Phone Number</p>
                            <input
                                onChange={(e) => setData({ ...data, phone: e.target.value })}
                                value={data?.phone ? data.phone : ""}
                                name='phone'
                                type="text"
                            />
                        </label>
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-end">
                    <button
                        disabled={loading}
                        type="submit" className="addBtn text-gray-100 disabled:bg-gray-800 bg-green-600 hover:bg-green-700 capitalize">
                        <UserPlus className="mr-1" /> {loading ? "Loading..." : "Create User"}
                    </button>
                </div>
            </form>
            <Toaster
                position="top-center"

            />
        </div>
    )
}

export default CreateUserForm