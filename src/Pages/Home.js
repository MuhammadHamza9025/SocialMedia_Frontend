import React, { useEffect, useState } from 'react'
import Homeleft from '../Components/Homeleft'
import HomeRight from '../Components/HomeRight'
import MainHome from '../Components/MainHome'
const Home = () => {
    const [data, setdata] = useState([])

    const fetchdata = async () => {
        const fetchnn = await fetch("http://localhost:9000/login", {
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
            <div className='flex justify-between px-10 bg-[#f4f2ee]'>
                <Homeleft data={data}></Homeleft>
                <MainHome data={data}></MainHome>
                <HomeRight></HomeRight>
            </div>
        </>
    )
}

export default Home
