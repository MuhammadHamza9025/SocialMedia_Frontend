import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../Assests/images.png'

const MainHome = () => {

    const [posts, setposts] = useState([])
    const [comment, setcomment] = useState('')
    const [post, setpost] = useState('')
    const [commentopen, setcommentopen] = useState(false)
    const [iid, setid] = useState()
    const getallposts = async () => {


        ////////////////////////api for post showing
        const ftetc = await fetch('http://localhost:9000/post', {
            headers: {
                "auth-token": `${localStorage.getItem('auth-token')}`
            },
        })
        const res = await ftetc.json()
        setposts(res)


    }

    ///////////////////////api for likes
    let message;
    const getliked = async (id) => {

        const fetchdata = await fetch("http://localhost:9000/getlikes", {
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

        posts.map((e) => e.comment.map((ee) => console.log(ee.user.email)))
        setpost(comment)
        const fetchdata = await fetch("http://localhost:9000/getcomment", {
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
    }, [])
    useEffect(() => {
        getallposts()
    }, [getliked])


    const toggle = (id) => {
        commentid = id
    }

    return (
        <>
            <div className='w-[49%] max-h-[100%]'>
                {
                    posts.map((item) => {

                        return (
                            <>
                                <div className='border m-4     mt-10 bg-[#ffffff] rounded-lg'>
                                    <div className='flex items-center mb-1 '>
                                        <img className='m-4 w-[50px] h-[50px] rounded-full' src={item.postedby.image} alt="" />
                                        <Link to={`/users/${item.postedby._id}`}> <span className=''>{item.postedby.name}</span></Link>
                                    </div>
                                    <p className='my-2 mx-4 mt-3 font-semibold text-lg '>{item.title}</p>
                                    <p className='mx-4 w-[100%] mb-6'>{item.desc}</p>
                                    <img src={item.image} className='w-[100%]   object-center object-contain' alt="" />
                                    <div className='flex justify-between mt-8'>
                                        <span className=' cursor-pointer' onClick={() => getliked(item._id)}><img src={image} className='h-[30px] mx-2' alt="" />
                                            <p className='mx-2 my-1 font-bold'>{item.likedby.length} Likes </p></span>
                                        <span className='hover:bg-slate-300 flex items-center p-1 px-2 active:bg-slate-400 rounded-3xl'>{item.comment.length}<b className='cursor-pointer mx-2 ' onClick={() => setcommentopen(!commentopen)}>Comments</b></span>
                                    </div>

                                    <div className={` ${commentopen ? 'flex-col scroll-smooth' : 'hidden'}`}>
                                        <div className={`m-3 my-6 transition flex justify-around `} >
                                            <input type="text" placeholder='Enter your coment' className='border-2 outline-none w-[70%] p-2 rounded-full text-gray-700 text-sm' value={comment} onChange={(e) => setcomment(e.target.value)} />
                                            <button className='bg-blue-500 text-white font-semibold w-[100px] p-2 py-1.5 rounded-full' onClick={() => getcomment(item._id)} >Post</button>
                                        </div>
                                        <div className='mt-10 px-6 '>
                                            {item.comment.map((e) => {

                                                return (
                                                    <div className='flex flex-col  border bg-slate-400 m-1 my-2 p-2 bg-opacity-25'>
                                                        <p className='text-lg font-semibold'>{e.user.name}</p>
                                                        <p>{e.text}</p>


                                                    </div>

                                                )
                                            })}


                                        </div>
                                    </div>
                                </div >
                            </>
                        )
                    })
                }
            </div >
        </>
    )
}

export default MainHome
