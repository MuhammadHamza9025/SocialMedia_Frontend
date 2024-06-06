import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Userposts from '../Components/Userposts'
const UserProfiles = () => {

    const [message, setmessage] = useState('Follow')

    const { id } = useParams()
    const [userdetails, setdetails] = useState([])
    const fetchuserdetailsdata = async () => {
        const data = await fetch(`http://localhost:9000/user/${id}`)
        const res = await data.json()
        setdetails(Array(res))
        // console.log(res.map((e) => e.postedby.name))
        // console.log(Array(res.posts))
    }

    let newmsg;
    const follow = async (id) => {
        // console.log(id)
        let msg;

        const data = await fetch(`http://localhost:9000/follow`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem('auth-token')}`,
            },
            body: JSON.stringify({ id: id })

        }).then((res) => res.json()).then((data) => msg = data)
        if (msg.success) {
            alert("You are now following this user")
        }
        else {
            alert(msg.message)
        }

        fetchuserdetailsdata()

    }

    // const textfol = async () => {
    //     const data = await fetch(`http://localhost:9000/followtext`, {

    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": `${localStorage.getItem('auth-token')}`,
    //         }

    //     })

    // }

    useEffect(() => {
        // textfol()
        fetchuserdetailsdata()
    }, [])
    return (
        <>
            <div className='flex  py-10 border px-6 bg-white'>
                {
                    userdetails.map((e) => {
                        return (
                            <>
                                <img src={e.userdetails.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ISC9UU8aZv3dBBEAc23t4mzgdkPLVgpdk2ClCRapGw&s"} alt="" className='h-[150px]  rounded-full border border-gray-500 w-[150px] m-4' />

                                <div className='mx-24'>
                                    <b className='text-4xl'>{e.userdetails.name}</b>
                                    <div className='flex space-x-8 text-lg mt-8'>
                                        <span><b>{e.userdetails.followers ? e.userdetails.followers.length : '0'}</b> Followers</span>
                                        <span><b>{e.userdetails.following ? e.userdetails.following.length : '0'}</b> Following</span>
                                        <span></span>
                                    </div>
                                    <button onClick={() => follow(e.userdetails._id)}>{newmsg ? newmsg : 'Follow'}</button>
                                </div>


                            </>
                        )

                    })
                }

            </div>
            <Userposts userdetails={userdetails} heading={`Posts by ${userdetails.map((e) => e.userdetails.name)}`}></Userposts>
        </>

    )
}

export default UserProfiles
