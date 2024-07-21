import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [image, setimage] = useState('')
    let messagedata;
    const handle = async () => {
        const data = { name, email, password }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('image', image)
        const enterdata = await fetch('https://social-media-backend-psi-five.vercel.app/signup', {
            method: "POST",
            headers: {

            },
            body: formData
        }).then((res) => res.json()).then((data) => messagedata = data);
        if (messagedata.success) {
            alert(messagedata.message)
            window.location.replace("/")
        }
        else { alert(messagedata.error) }

    }
    return (
        <>
            <div className=' flex justify-center  mt-10'>
                <div className='border-2 h-[450px] w-[400px]'>
                    <h2 className='text-center m-4 text-4xl font-serif font-bold '>Sign Up</h2>
                    <input type="text" placeholder=' Username' className='w-[90%] m-4 p-3 outline-none border-2' onChange={(e) => setname(e.target.value)} />
                    <input type="email" placeholder=' Email Address' className='w-[90%] m-4 p-3 outline-none border-2' onChange={(e) => setemail(e.target.value)} />
                    <input type="text" placeholder=' Enter Password' className='w-[90%] m-4 p-3 outline-none border-2' onChange={(e) => setpassword(e.target.value)} />
                    <div className=' flex justify-center flex-col items-center'>
                        <button className='bg-blue-500 text-white font-semibold p-2 w-[120px]' onClick={handle}>Sign Up</button>
                        <span className='text-sm m-1'>Already Have a Account ? <Link to='/login'><b className='text-red-500'>Sign in</b></Link></span>
                    </div>
                </div>
                {/* <input type="file" onChange={(e) => setimage(e.target.files[0])} /> */}
            </div>
        </>
    )
}

export default Signup
