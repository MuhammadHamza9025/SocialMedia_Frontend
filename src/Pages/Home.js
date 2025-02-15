import React, { useEffect, useReducer, useState } from 'react'
import Homeleft from '../Components/Homeleft'
import HomeRight from '../Components/HomeRight'
import MainHome from '../Components/MainHome'
import { type } from '@testing-library/user-event/dist/type'
import Loader from '../Components/Loader'
const Home = () => {
    const initialState = {
        type: 'notready',
        users: []
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'notready': { return { ...state, data: [] } }
            case 'ready': { return { ...state, type: 'ready', users: action.payload } }

        }
    }

    const [data, setdata] = useReducer(reducer, initialState)

    const fetchdata = async () => {
        const fetchnn = await fetch("https://social-media-backend-psi-five.vercel.app/login", {
            headers: {
                "auth-token": `${localStorage.getItem('auth-token')}`
            }
        })
        const res = await fetchnn.json()
        setdata({ payload: Array(res), type: 'ready' })
        // console.log(res)

    }
    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            {
                data.type == 'notready' ?
                    <Loader />
                    : <div className='flex md:justify-between md:px-20 flex-col md:flex-row  '>
                        <div className='order-1 md:order-1 '> <Homeleft data={data.users} ></Homeleft></div>
                        <div className='order-3 md:order-2'> <MainHome data={data.users}></MainHome> </div>
                        <div className='order-2 md:order-3 w-[100%] md:w-[40%]  md:h-[600px]'> <HomeRight></HomeRight></div>
                    </div>
            }
            {/* <div className="flex flex-col items-center mt-5">
                {numbers.map((number, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`text-lg p-2 m-2 transition-colors duration-300 ${selectedIndex === index ? 'text-red-500' : 'text-black'
                            }`}
                    >
                        {number}
                    </button>
                ))}
            </div> */}
        </>
    )
}

export default Home
