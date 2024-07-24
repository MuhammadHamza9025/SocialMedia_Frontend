import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../Assests/images.png'
import PostsDetails from './PostsDetails'
import Home from '../Pages/Home'
import { type } from '@testing-library/user-event/dist/type'
import Loader from './Loader'
const MainHome = ({ data }) => {
    const initialState = {
        type: 'notready',
        data: []
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'notready': { return { ...state, data: [] } }
            case 'ready': { return { ...state, type: 'ready', data: action.payload } }

        }
    }

    const [posts, dispatch] = useReducer(reducer, initialState)
    const [comment, setcomment] = useState('')
    const [post, setpost] = useState('')
    const [commentopen, setcommentopen] = useState(null)
    const [selectindex, setselectindex] = useState(null)
    const getallposts = async () => {


        ////////////////////////api for post showing
        const ftetc = await fetch('https://social-media-backend-psi-five.vercel.app/post', {
            headers: {
                "auth-token": `${localStorage.getItem('auth-token')}`
            },
        })
        const res = await ftetc.json()
        dispatch({ type: 'ready', payload: res })



    }

    ///////////////////////api for likes
    let message;
    const getliked = async (id) => {

        const fetchdata = await fetch("https://social-media-backend-psi-five.vercel.app/getlikes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem('auth-token')}`,


            },
            body: JSON.stringify({ id: id })


        }).then((res) => res.json()).then((data) => message = data)
        if (message.success) {
            alert(message.message)
        }
        else {
            alert(message.error)
        }
    }
    /////////////////////api for comments
    const getcomment = async (id) => {

        posts.data.map((e) => e.comment.map((ee) => console.log(ee.user.email)))
        setpost(comment)
        const fetchdata = await fetch("https://social-media-backend-psi-five.vercel.app/getcomment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem('auth-token')}`,
            },
            body: JSON.stringify({ id: id, post: comment })



        }).then((res) => res.json()).then((data) => message = data)


        if (message.success) {
            alert(message.message)

        }
        else {
            alert(message.error)
        }

    }


    let commentid;
    useEffect(() => {
        if (localStorage.getItem('auth-token')) { getallposts() }


    }, [Home])
    useEffect(() => {
        getallposts()

    }, [getliked])


    const toggle = (id) => {
        commentid = id
    }



    return (
        <>
            {
                posts.type == 'notready' ?
                    <div class="bg-gray-100 flex items-center justify-center w-[350px] mt-10 p-10">
                        <div role="status" class="space-y-8 animate-pulse  max-w-2xl p-4">
                            <div class="w-full space-y-2 ">
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                            </div>
                            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">
                                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                            </div>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div> :
                    <div className='min-w-[100%] sm:w-[49%] max-h-[100%]'>
                        {
                            posts.data.map((item, index) => {

                                return (
                                    <React.Fragment key={item._id}>
                                        <div className='border  m-1 md:m-4     mt-10  rounded-lg'>
                                            <PostsDetails item={item} data={data}></PostsDetails>


                                            <div className='flex justify-between mt-8'>
                                                <span className=' cursor-pointer' onClick={() => getliked(item._id)}><img src={image} className='h-[30px] mx-2' alt="" />
                                                    <p className='mx-2 my-1 font-bold'>{item.likedby.length} Likes </p></span>
                                                <span className=' flex items-center md:p-1 md:px-2 active:bg-slate-400 rounded-xl md:text-balance text-xs'>{item.comment.length}<b className='cursor-pointer mx-2 ' onClick={() => setselectindex(index)}>Comments</b></span>
                                            </div>


                                            <div className={`${selectindex === index ? 'flex-col scroll-smooth' : 'hidden'}`}>
                                                <div className={`m-3 my-6 transition flex justify-around `} >
                                                    <input type="text" placeholder='Enter your coment' className='border-2 outline-none md:w-[70%]  p-1 md:p-2 rounded-full text-gray-700 text-xs md:text-sm' value={comment} onChange={(e) => setcomment(e.target.value)} />
                                                    <button className='bg-blue-500 text-white font-semibold w-[60px]  text-sm md:text-balance md:w-[100px] md:p-2 py-1.5 rounded-full' onClick={() => getcomment(item._id)} >Post</button>
                                                </div>
                                                <div className='mt-10 px-6 '>
                                                    {item.comment.map((e, i) => {

                                                        return (
                                                            <div className='flex flex-col  border  m-1 my-2 p-2 bg-opacity-25 bg-slate-200 rounded-lg' key={i}>
                                                                <div className=' flex items-center space-x-2'>
                                                                    <p className='text-lg font-semibold'>{e.user.name}</p>

                                                                </div>
                                                                <p>{e.text}</p>


                                                            </div>

                                                        )
                                                    })}


                                                </div>
                                            </div>
                                        </div >
                                    </React.Fragment>
                                )
                            })
                        }
                    </div >
            }
        </>
    )
}

export default MainHome
