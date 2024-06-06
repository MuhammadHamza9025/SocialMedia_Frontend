import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    let messagedata;
    const handle = async () => {
        const data = { email, password }
        const enterlogindata = await fetch('http://localhost:9000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => messagedata = data);
        if (messagedata.success) {
            alert(messagedata.message)
            console.log(messagedata.data)
            localStorage.setItem('auth-token', messagedata.token)
            window.location.replace("/")

        }
        else { alert(messagedata.error) }

    }
    return (
        <div className=' flex justify-center  mt-10'>
            <div className='border-2 h-[450px] w-[400px]'>
                <h2 className='text-center m-4 text-4xl font-serif font-bold '>Login </h2>
                <input type="email" placeholder=' Email Address' className='w-[90%] m-4 p-3 outline-none border-2' onChange={(e) => setemail(e.target.value)} />
                <input type="text" placeholder=' Enter Password' className='w-[90%] m-4 p-3 outline-none border-2' onChange={(e) => setpassword(e.target.value)} />
                <div className=' flex justify-center flex-col items-center'>
                    <button className='bg-blue-500 text-white font-semibold p-2 w-[120px]' onClick={handle}>Login</button>
                    <span className='text-sm m-1'>Don't Have an Account ? <Link to='/signup'><b className='text-red-500'>Sign up</b></Link></span>
                </div>
            </div>
        </div>
    )
}

export default Login
