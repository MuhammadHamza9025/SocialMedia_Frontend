import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <>
            <div className='flex justify-around p-4  font-semibold font-sans bg-white'>
                <div><span className='font-bold text-lg'>LINKBOOK</span></div>
                <div>


                    <ul className='flex space-x-14'>
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
