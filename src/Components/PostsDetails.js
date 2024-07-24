import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const PostsDetails = ({ item, data }) => {
    const [deletemenu, setdeletemenu] = useState(false)
    const handledelete = async (id) => {
        const fetchdata = await fetch("https://social-media-backend-psi-five.vercel.app/deleteposts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem('auth-token')}`,
            },
            body: JSON.stringify({ id: id })



        })

    }
    const useridfordelete = data.map((e) => e.id)

    return (

        <>
            <div className=' flex justify-between'>
                <div className='flex items-center mb-1'>
                    <img className='m-4 w-[50px] h-[50px] rounded-full' src={item.postedby.image} alt="" />
                    <Link to={`/users/${item.postedby._id}`}> <span className=''>{item.postedby.name}</span></Link>
                </div>

                {useridfordelete == item.postedby.id &&
                    <div className='flex flex-col items-end  m-4  relative' onClick={() => setdeletemenu(!deletemenu)} >
                        <div className='mx-2 cursor-pointer '  >
                            <button className='h-[6px] w-[6px] rounded-full '></button>
                            <button className=' mx-1 h-[6px] w-[6px] rounded-full '></button>
                            <button className='h-[6px] w-[6px] rounded-full '></button>
                        </div>
                        <div className={`${deletemenu ? 'flex' : 'hidden'}  absolute top-7 flex-col   text-xs  border px-4`} >
                            <span className='p-1  cursor-pointer hover:font-bold     border-b-2 my-2' onClick={() => handledelete(item._id)}>Delete</span>
                            <span className='p-1 cursor-pointer hover:font-bold '>Edit</span>
                        </div>
                    </div>
                }
            </div>

            <p className='my-2 mx-4 mt-3 font-semibold text-lg '>{item.title}</p>
            <p className=' p-2 md:mx-4w-[100%] mb-6'>{item.desc}</p>
            <img src={item.image} className='min-w-[100%] h-[300px] sm:max-h-[700px] sm:min-h-[550px] object-cover object-center sm:object-contain' alt="" />

        </>
    )
}

export default PostsDetails
