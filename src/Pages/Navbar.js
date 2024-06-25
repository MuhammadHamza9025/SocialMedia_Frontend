import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchUsers from '../Components/SearchUsers'


const Navbar = () => {
    const [search, setsearch] = useState('')
    const [open, setopen] = useState(false)

    return (
        <>
            <div className='flex justify-around p-4  font-semibold font-sans bg-white'>
                <div><span className='font-bold text-lg border p-2 bg-gray-200 rounded-lg  bg-opacity-50 cursor-pointer hover:bg-gray-500 hover:text-yellow-50'>LINKBOOK</span></div>
                {localStorage.getItem('auth-token') &&
                    <div className=' rounded-3xl relative'>

                        <input type="text" value={search} placeholder='Search...' className=' text-sm  font-mono p-2 outline-none border border-black active:border-none rounded-md' onChange={((e) => setsearch(e.target.value))} />
                        {
                            search.length > 0 &&
                            <div className='absolute rounded-md border w-[400px] bg-slate-100 p-4'>



                                < SearchUsers search={search} setsearch={setsearch} />
                            </div>}
                    </div>}
                <div>


                    <ul className='flex space-x-14  items-center font-sans font-semibold '>
                        {localStorage.getItem('auth-token') && <Link to='/addpost'><li className='cursor-pointer text-2xl text-gray-500 font-bold'>+</li></Link>}

                        {localStorage.getItem('auth-token') && <Link to={'/'}> <li className='cursor-pointer'>Home</li></Link>
                        }
                        {localStorage.getItem('auth-token') && <Link to='/posts'><li className='cursor-pointer'>Posts</li></Link>}

                        {localStorage.getItem('auth-token') ? <li className='cursor-pointer' onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/") }}>Logout</li>
                            : <Link to='/login'><li className='cursor-pointer'>Login</li></Link>
                        }

                    </ul>
                </div >
            </div >
        </>
    )
}

export default Navbar
