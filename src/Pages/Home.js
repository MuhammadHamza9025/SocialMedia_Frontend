import React from 'react'
import Homeleft from '../Components/Homeleft'
import HomeRight from '../Components/HomeRight'
import MainHome from '../Components/MainHome'
const Home = () => {
    return (
        <>
            <div className='flex justify-between px-10 bg-[#f4f2ee]'>
                <Homeleft></Homeleft>
                <MainHome></MainHome>
                <HomeRight></HomeRight>
            </div>
        </>
    )
}

export default Home
