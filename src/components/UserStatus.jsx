"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const UserStatus = ({ userInfo }) => {
    const [loading, setLoading] = useState(false)

    const router = useRouter()



    const handleStatusClick = async (currentStatus) => {
        const statusObject = { status: currentStatus === "active" ? "blocked" : "active" }
   
        try {
            setLoading(true)
            const response = await axios.patch(`https://sixsense-task-backend.onrender.com/api/user/status/update/${userInfo._id}`, statusObject)

            if (!response.data.success) return toast.error("Status Updated Failed!")
            toast.success("Status Updated")
            router.refresh()

            setLoading(false)

        } catch (error) {
            setLoading(false)
            toast.error("Status Updated Failed!")
        }
    }


    return (
        <>
            {
                userInfo.status === "active" ?
                    <button
                        disabled={loading}
                        onClick={() => handleStatusClick(userInfo.status)}
                        className={`font-inter ${userInfo.status !== "blocked" ? "text-green-600 border-green-600" : "text-red-600 border-red-600"} font-bold uppercase px-5 py-2 bg-transparent cursor-pointer hover:bg-gray-200 rounded-md border border-solid `}>
                        {loading ? "loading..." : "Active"}
                    </button>
                    :
                    <button
                        disabled={loading}
                        onClick={() => handleStatusClick(userInfo.status)}
                        className={`font-inter ${userInfo.status !== "blocked" ? "text-green-600 border-green-600" : "text-red-600 border-red-600"} font-bold uppercase px-5 py-2 bg-transparent cursor-pointer hover:bg-gray-200 rounded-md border border-solid `}>
                        {loading ? "loading..." : "block"}
                    </button>
            }
            <Toaster position="top-center" />
        </>
    )
}

export default UserStatus