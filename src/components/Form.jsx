import React from 'react'

const Form = () => {
    return (
        <div>
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
    )
}

export default Form