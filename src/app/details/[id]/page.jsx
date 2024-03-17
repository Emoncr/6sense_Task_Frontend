const getData = async () => {
    const res = await fetch(process.env.Base_Url + "/api/users");
    const users = await res.json();
    return users.result;
}


const Details = ({ params }) => {

    return (
        <section className='py-10'>
            <div className="container">
                <div className='bg-white shadow-lg border border-gray-300 border-solid p-10'>
                    <h1 className='text-2xl font-semibold font-inter '>User Details </h1>
                    <div className="list_items mt-8 grid gap-3">
                        <form>
                            <div className='grid grid-cols-2 gap-10'>
                                <div className='input_feild'>
                                    <label htmlFor="firstName">
                                        <p>First Name</p>
                                        <input type="text" />
                                    </label>
                                </div>
                                <div className='input_feild'>
                                    <label htmlFor="lastName">
                                        <p>Last Name</p>
                                        <input type="text" />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='input_feild mt-5'>
                                    <label htmlFor="email">
                                        <p>Email Address</p>
                                        <input type="email" />
                                    </label>
                                </div>
                                <div className='mt-5 input_feild'>
                                    <label htmlFor="phone">
                                        <p>Phone Number</p>
                                        <input name='phone' className='' type="text" />
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-5 flex items-center justify-end">
                        <button className="addBtn text-gray-100 bg-green-600 hover:bg-green-700 capitalize">
                            Save Changes
                        </button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Details