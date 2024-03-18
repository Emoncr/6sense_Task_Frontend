import CreateUserForm from '@/components/CreateUserForm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const AddUser = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className='bg-white shadow-lg border border-gray-300 border-solid p-10'>
                    <div className="flex items-center justify-start gap-3">
                        <Link href={"/"} className="font-bold text-lg text-gray-900 mt-1 hover:text-gray-700">
                            <ArrowLeft />
                        </Link>
                        <h1 className='text-2xl font-semibold font-inter '>Create New User </h1>
                    </div>

                    {/* USER INFORMATION FORM */}
                    <CreateUserForm />

                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default AddUser