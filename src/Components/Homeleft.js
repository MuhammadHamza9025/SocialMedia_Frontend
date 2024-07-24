import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Homeleft = ({ data }) => {


    return (
        <div className=' w-[100%]  md:h-[300px]  mt-10  rounded-lg'>
            {data.map((item) => {

                return (
                    <>
                        <Link to={`/user/${item._id}`}>
                            <div className={` w-[100%] md:w-[250px] md:h-[600px]   flex flex-col items-center border shadow-sm shadow-gray-50 rounded-md p-2`}>

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
