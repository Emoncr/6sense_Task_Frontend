import { Trash, FilePenLine, ReceiptText } from 'lucide-react';
import Link from 'next/link';
import UserStatus from './UserStatus';
import DeleteAction from './DeleteAction';



const User = ({ userInfo }) => {
    return (
        <div className="border border-solid border-gray-400 p-3 bg-white grid grid-cols-12 rounded-sm">
            <div className="col-span-7 flex items-center justify-start">



                <Link
                    href={`/${userInfo._id}`}>
                    <p className="text-base font-medium font-inter text-gray-900  hover:underline transition-all">{userInfo.firstName}</p>
                </Link>
            </div>
            <div className="actions col-span-5 flex items-center justify-end gap-4">
                {/* HANDLING USER STATUS FUNCTIONALITY */}
                <UserStatus userInfo={userInfo} />


                <DeleteAction userInfo={userInfo} />
                <Link href={`/${userInfo._id}`} className='btn text-gray-900'>
                    <FilePenLine />
                </Link>
                <Link
                    href={`/${userInfo._id}`}
                    className='btn text-green-600'>
                    <ReceiptText />
                </Link>


            </div>
        </div >
    )
}

export default User