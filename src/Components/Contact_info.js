import React, { useState } from 'react'

const Contact_info = ({ setconat, contact }) => {

    const [city, setcity] = useState('')
    const [country, setcountry] = useState('')
    const [link, setlink] = useState('')
    const [submit, setsubmit] = useState('')
    const [email, setemail] = useState('')

    const handlecontact = async () => {
        let messa;
        const data = { city, country, link, email }
        const fetchdata = await fetch('http://localhost:9000/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem('auth-token')}`,
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => messa = data)

        if (messa) {
            alert(messa)

        }
    }

    const handlec = () => {

        setconat(!contact)
        console.log(contact)
    }
    console.log(contact)
    return (
        <div className={`h-[100vh] w-[100vw] justify-center items-center fixed top-0 right-0   z-10000 bg-gray-500 bg-opacity-20 ${contact ? 'flex' : 'hidden'}`}>
            <div className='bg-slate-200 p-4 my-[200px] rounded-lg '>
                <div className='flex justify-end font-bold cursor-pointer' onClick={handlec}>
                    <span className='font-bold border-4 border-black' >❌</span></div>
                <div>
                    <input className='w-[320px] p-2 outline-none border-2 m-3 bg-white text-gray-500 font-semibold' type="text" name="city" required placeholder="Enter your City" onChange={(e) => setcity(e.target.value)} /><br />
                    <input className='w-[320px] p-2 outline-none border-2 m-3 bg-white text-gray-500 font-semibold' type="text" name="name" required placeholder="Enter your Country" onChange={(e) => setcountry(e.target.value)} /><br />
                    <input className='w-[320px] p-2 outline-none border-2 m-3 bg-white text-gray-500 font-semibold' type="text" name="name" required placeholder="Enter your website URL " onChange={(e) => setlink(e.target.value)} /><br />
                    <input className='w-[320px] p-2 outline-none border-2 m-3 bg-white text-gray-500 font-semibold' type="text" name="name" required placeholder="Email Address" onChange={(e) => setemail(e.target.value)} /><br />
                    <div className=' flex justify-center my-3'>
                        <input className='bg-red-600 p-2 w-[100px] rounded-2xl text-white font-bold m-auto' type="submit" name="name" placeholder="Submit" onClick={handlecontact} /><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_info
