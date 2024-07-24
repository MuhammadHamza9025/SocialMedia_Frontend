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
            <div className='flex md:justify-between md:px-10 flex-col md:flex-row  '>
                <div className='order-1 md:order-1'> <Homeleft data={data} ></Homeleft></div>
                <div className='order-3 md:order-2'> <MainHome data={data}></MainHome> </div>
                <div className='order-2 md:order-3'> <HomeRight></HomeRight></div>
            </div>
        </>
    )
}

export default Home
