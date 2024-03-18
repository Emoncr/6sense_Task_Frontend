import UserDetailsFrom from "@/components/UserDetailsFrom";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import axios from 'axios';



const getData = async (userId) => {
    const userDetails = await axios.get(process.env.Base_Url + `/api/userdetails/${userId}`);
    return userDetails.data.result;
}


const Details = async ({ params }) => {
    const userData = await getData(params.id)

    return (
        <section className='py-10'>
            <div className="container">
                <div className='bg-white shadow-lg border border-gray-300 border-solid p-10'>
                    <div className="flex items-center justify-start gap-3">
                        <Link href={"/"} className="font-bold text-lg text-gray-900 mt-1 hover:text-gray-700">
                            <ArrowLeft />
                        </Link>
                        <h1 className='text-2xl font-semibold font-inter '>User Details </h1>
                    </div>

                    {/* USER INFORMATION FORM */}
                    <UserDetailsFrom userData={userData} />

                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Details