import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full h-max bg-gray-700 flex flex-col gap-6 items-center justify-center py-6 p-2'>
            <h2 className="md:text-5xl text-3xl font-bold text-[#F3777E]">Contact Us</h2>
            <form className="w-[35%] flex flex-col items-start justify-center gap-6 border-3 border-gray-900 rounded-xl p-4">
                <div className='w-full h-max flex flex-col gap-2'>
                    <label className=" text-gray-100 text-2xl font-semibold mb-2" htmlFor='userName' >Your Name</label>
                    <input type="text" id='userName' placeholder='Enter Your Name' required className='w-[100%] text-gray-100 text-xl font-normal bg-gray-600 p-1 px-3 rounded-md outline-none'/>
                </div>
                <div className='w-full h-max flex flex-col gap-2'>
                    <label className=" text-gray-100 text-2xl font-semibold mb-2" htmlFor='userMail' >Your Email</label>
                    <input type="email" id='userMail' placeholder='Enter Your Email' required className='w-[100%] text-gray-100 text-xl font-normal bg-gray-600 p-1 px-3 rounded-md outline-none'/>
                </div>
                <div className='w-full h-max flex flex-col gap-2'>
                    <label className=" text-gray-100 text-2xl font-semibold mb-2" htmlFor='userMail' >Message</label>
                    <textarea type="email" id='userMail' placeholder='Enter Your Message' required rows='5' className='w-[100%] text-gray-100 text-xl font-normal bg-gray-600 p-1 px-3 rounded-md outline-none'>

                    </textarea>
                </div>
                <button type='submit' className='w-48 h-12 bg-red-500 rounded-lg text-2xl text-gray-100 font-bold cursor-pointer'>Submit</button>
            </form>
    </div>
  )
}

export default ContactForm