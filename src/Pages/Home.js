import React, { useEffect, useState } from 'react'
import Homeleft from '../Components/Homeleft'
import HomeRight from '../Components/HomeRight'
import MainHome from '../Components/MainHome'
const Home = () => {
    const [data, setdata] = useState([])

    const fetchdata = async () => {
        const fetchnn = await fetch("https://social-media-backend-psi-five.vercel.app/login", {
            headers: {
                "auth-token": `${localStorage.getItem('auth-token')}`
            }
        })
        const res = await fetchnn.json()
        setdata(Array(res))
        // console.log(res)

    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <>
            <div className='flex sm:justify-between px-6 sm:px-10 flex-col sm:flex-row  '>
                <div className='order-1 sm:order-1'> <Homeleft data={data} ></Homeleft></div>
                <div className='order-3 sm:order-2'> <MainHome data={data}></MainHome> </div>
                <div className='order-2 sm:order-3'> <HomeRight></HomeRight></div>
            </div>
        </>
    )
}

export default Home
