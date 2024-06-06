import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeRight = () => {
    const [allusers, setallusers] = useState([])

    const getallusers = async () => {
        const fetusers = await fetch('http://localhost:9000/otherusers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem('auth-token')}`,
            },
        })
        const res = await fetusers.json()
        console.log(res)
        setallusers(res)
    }
    useEffect(() => {
        getallusers()
    }, [])
    return (
        <>
            <div className='border w-[25%] h-[600px] mr-3 rounded-lg bg-white mt-10'>
                <h2 className='my-10 font-bold text-lg text-center'>Add to your Friend List</h2>


                {
                    allusers.map((e) => {
                        return (
                            <>

                                <Link to={`/users/${e._id}`}>
                                    <div className='flex cursor-pointer '>
                                        <img src={e.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ISC9UU8aZv3dBBEAc23t4mzgdkPLVgpdk2ClCRapGw&s"} alt="" className='h-[50px]  rounded-full border border-gray-500 w-[50px] m-4' />                                        <div className='block mt-2'>
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
        </>
    )
}

export default HomeRight
