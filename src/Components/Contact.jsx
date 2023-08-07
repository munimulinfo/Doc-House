import React from 'react';

const Contact = () => {
    return (
        <section className='bg-green-900 py-20 my-10 text-white rounded sm:px-4 md:px-4'>
       <div className='mx-auto max-w-7xl '>
       <div className='grid lg:grid-cols-2 gap-4 '>
            <div className='space-y-4'>
                <h1 className='text-4xl font-medium'>Contact With Us</h1>
                <p className='pr-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus minima laboriosam, ipsum corporis totam corrupti?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus minima laboriosam, ipsum corporis totam corrupti?
                </p>
                <p>+88016013216003</p>
                <p>Rajshahi, Bangladesh</p>

            </div>
            <div>

                <form className='bg-green-900'>
                    <div className='grid grid-cols-2 gap-4 rounded'>
                    <div>
                        <input className='bg-green-700 px-4 py-3 w-full rounded' type="text" value="Name"  />
                    </div>
                    <div>
                        <input className='bg-green-700 px-4 py-3 w-full rounded'  type="text" value="Email"  />
                    </div>
                    <div> 
                        <input className='bg-green-700 px-4 py-3 w-full rounded'  type="text" value="Mobile Number" />
                    </div>
                    <div>
                        <input className='bg-green-700 px-4 py-3 w-full rounded'  type="text" value="Doctor Name"  />
                    </div>
                    <div>
                        <input className='bg-green-700 px-4 py-3 w-full rounded'  type="text" value="Date" />
                    </div>
                    <div>
                        <input className='bg-green-700 px-4 py-3 w-full rounded'  type="text" value="Time"  />
                    </div>
                    </div>
                    <div className='my-4'> 
                    <button className="btn btn-error text-white w-full">Book Now</button>
                    </div>
                </form>

            </div>
        </div>
       </div>
        </section>
    );
};

export default Contact;