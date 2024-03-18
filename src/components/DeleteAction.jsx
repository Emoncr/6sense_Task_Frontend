"use client"

import axios from "axios"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"




const DeleteAction = ({ userInfo }) => {

    const [loading, setLoading] = useState(false)


    const router = useRouter();

    const handleDelete = async (id) => {

        try {
            setLoading(true)
            const response = await axios.delete(`https://sixsense-task-backend.onrender.com/api/user/delete/${id}`)
  
            if (!response.data.success) return toast.error("User Deleted Failed!")
            toast.success("User  Deleted")
            router.refresh()

            setLoading(false)

        } catch (error) {
      
            setLoading(false)
            toast.error("User Deleted Failed!")
        }
    }

    return (
        <>
            <button
                disabled={loading}
                onClick={() => handleDelete(userInfo._id)}
                className="btn text-red-600">
                {
                    loading ? "..." : <Trash />
                }
            </button>
            <Toaster position="top-center" />
        </>
    )
}



export default DeleteAction