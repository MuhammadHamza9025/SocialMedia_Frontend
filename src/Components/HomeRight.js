import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeRight = () => {
    const [allusers, setallusers] = useState([])

    const getallusers = async () => {
        const fetusers = await fetch('https://social-media-backend-psi-five.vercel.app/otherusers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem('auth-token')}`,
            },
        })
        const res = await fetusers.json()
        // console.log(res)
        setallusers(res)
    }
    useEffect(() => {
        getallusers()
    }, [])
    return (
        <>
            <div className='border w-[100%] md:w-[150px]  md:h-[600px] mr-3 rounded-lg  mt-10'>
                <h2 className='my-10 font-bold text-lg text-center'>Add to your Friend List</h2>

                {/*  */}
                <div className='border flex flex-row md:flex-col'>
                    {
                        allusers.map((e) => {
                            return (
                                <>

                                    <Link to={`/users/${e._id}`}>
                                        <div className='flex cursor-pointer md:flex-row flex-col items-center justify-center p-2 m-4'>
                                            <img src={e.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ISC9UU8aZv3dBBEAc23t4mzgdkPLVgpdk2ClCRapGw&s"} alt="" className='h-[50px]  rounded-full border border-gray-500 w-[50px] md:m-4' />                                        <div className='block mt-2'>
                                                <p className='text-sm font-semibold font-sans'>{e.name}</p>
                                                <p className='text-xs'>{e.name.toLowerCase().replace(/ /g, '')}</p>
                                            </div>

                                        </div>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default HomeRight
