import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Homeleft = () => {
    const [data, setdata] = useState([])

    const fetchdata = async () => {
        const fetchnn = await fetch("http://localhost:9000/login", {
            headers: {
                "auth-token": `${localStorage.getItem('auth-token')}`
            }
        })
        const res = await fetchnn.json()
        setdata(Array(res))
        console.log(data)

    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <div className=' h-[300px]  mt-10 bg-[#ffffff] rounded-lg'>
            {data.map((item) => {

                return (
                    <>
                        <Link to={`/user/${item._id}`}>
                            <div className=' w-[250px] h-[600px]   flex flex-col items-center bg-[#ffffff] rounded-md p-2'>

                                <img src={item.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ISC9UU8aZv3dBBEAc23t4mzgdkPLVgpdk2ClCRapGw&s"} className='w-[100px] h-[100px] rounded-full' alt="" />
                                <span className='m-2 font-semibold hover:underline' >{item.name}</span>
                                <div className='flex justify-between space-x-4'>
                                    <p><b className='font-bold'>{item.following ? item.following.length : '0'} </b>following</p>
                                    <p><b className='font-bold'>{item.followers ? item.followers.length : '0'} </b>followers</p>
                                </div>
                            </div></Link>
                    </>
                )
            })}

        </div>
    )
}

export default Homeleft
