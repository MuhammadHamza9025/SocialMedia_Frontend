import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchUsers from '../Components/SearchUsers'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';


const Navbar = () => {
    const [isDark, setisdark] = useState(false)
    const [search, setsearch] = useState('')
    const [open, setopen] = useState(false)
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [isDark]);
    function handle() {
        setisdark(!isDark)
    }

    return (
        <>
            <div className='flex justify-around p-4  font-semibold font-sans border-b hidden'>
                <div><span className='font-bold text-lg border p-2 rounded-lg  bg-opacity-50 cursor-pointer hover:bg-gray-500 hover:text-yellow-50'>LINKBOOK</span></div>
                {localStorage.getItem('auth-token') &&
                    <div className=' rounded-3xl relative'>

                        <input type="text" value={search} placeholder='Search...' className=' text-sm  font-mono p-2 outline-none border border-black active:border-none rounded-md' onChange={((e) => setsearch(e.target.value))} />
                        {
                            search.length > 0 &&
                            <div className={`absolute rounded-md border w-[400px]   z-20 p-4 ${isDark ? 'bg-black' : 'bg-white'}`}>



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
                <div className='flex justify-center items-center  rounded-full '>
                    {
                        isDark ? <LightModeIcon onClick={handle} />
                            :
                            <NightlightRoundIcon onClick={handle} ></NightlightRoundIcon>}
                </div>
            </div >
        </>
    )
}

export default Navbar
