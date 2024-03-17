import { Trash, FilePenLine, ReceiptText } from 'lucide-react';

const User = () => {
    return (
        <div className="border border-solid border-gray-400 p-3 bg-white grid grid-cols-12 rounded-sm">
            <div className="col-span-7 flex items-center justify-start">
                <p className="text-base font-medium font-inter ">Biplob Hasan Emon</p>
            </div>
            <div className="actions col-span-5 flex items-center justify-end gap-3">
                <button className="btn text-red-600">
                    <Trash />
                </button>
                <button className='btn text-gray-900'>
                    <FilePenLine />
                </button>
                <button className='btn text-green-600'>
                    <ReceiptText />
                </button>
            </div>
        </div>
    )
}

export default User