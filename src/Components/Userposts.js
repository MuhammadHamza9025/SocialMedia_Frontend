import React from 'react'

const Userposts = ({ userdetails, heading }) => {
    return (
        <>
            <h2 className=' text-lg sm:text-2xl my-10 text-center '> <b>{heading}</b> </h2 >
            <div className='flex sm:w-[400px] flex-wrap  '>

                {userdetails.map((e) => {
                    return (
                        <>
                            {
                                e.posts.map((item) => {

                                    return (
                                        <>
                                            <div className='border m-4   my-10 w-[100%] bg-white '>
                                                <img src={item.image} className='w-[100%] h-[300px] sm:h-[100%]  object-center object-fill' alt="" />
                                                <p className='my-2'>{item.title}</p>
                                                <p className='w-[100%]'>{item.desc}</p>
                                                {/* <div className='flex justify-between mt-8'>
                                                    <span className=' cursor-pointer'>{item.likedby.length} Likes</span>
                                                    <span className='hover:bg-slate-300 p-1 px-2 active:bg-slate-400 rounded-3xl'>{item.comment.length}<b className='cursor-pointer mx-2 ' >Comments</b></span>
                                                </div> */}


                                            </div >
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })}
            </div>

        </>
    )
}

export default Userposts
