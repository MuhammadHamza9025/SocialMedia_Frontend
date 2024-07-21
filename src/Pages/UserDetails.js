import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../Context/ShopContext'
import Userposts from '../Components/Userposts'
import pen from '../Assests/pen.png'
import Contact_info from '../Components/Contact_info'
const UserDetails = () => {

    const [image, setprofileimg] = useState('')
    const [intopen, setintopen] = useState(false)
    const [interests, setselect] = useState('')
    const [profilesetting, setprofilesetting] = useState(false)
    const [clickinterest, setclick] = useState('')
    const [contact, setconat] = useState(false)
    // const { fetchuserdetailsdata } = useContext(Shopcontext)
    const { id } = useParams()
    const [userdetails, setdetails] = useState([])
    const fetchuserdetailsdata = async () => {

        const data = await fetch(`http://localhost:9000/user/${id}`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                "auth-token": `${localStorage.getItem('auth-token')}`,
            }
        })
        const res = await data.json()
        setdetails(Array(res))
        console.log(Array(res.userdetails))


    }

    const updateprofile = async () => {
        const formdata = new FormData()
        formdata.append('image', image)
        console.log(image)

        const data = await fetch(`http://localhost:9000/profileedit`, {
            method: "POST",
            headers: {
                "auth-token": `${localStorage.getItem('auth-token')}`,
            },
            body: formdata
        })
        setprofilesetting(false)
        fetchuserdetailsdata()

    }

    const updateinterest = async () => {

        const data = { interests }
        console.log(data)
        const intfetch = await fetch('http://localhost:9000/interests', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem('auth-token')}`,
            },
            body: JSON.stringify(data)
        })
        fetchuserdetailsdata()

    }


    useEffect(() => {
        fetchuserdetailsdata()
    }, [])


    return (
        <div className='flex flex-col items-center'>


            <div className=' relative w-[800px] h-[400px] my-10 border'>

                {userdetails.map((e) => {

                    return (
                        <>
                            <div className=' h-[60%]'><img className='w-[100%] h-[100%] rounded-none' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnfBD8oiQixFsc59ccAI4fSbIBvvTjUEZuw&usqp=CAU" /></div>
                            <div className='h-[100%]  absolute top-0 p-16 flex justify-center items-center'> <div className=' h-[150px] w-[150px] border-4 border overflow-hidden rounded-full'><img src={e.userdetails.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ISC9UU8aZv3dBBEAc23t4mzgdkPLVgpdk2ClCRapGw&s"} alt="" className='h-[100%] w-[100%]' /></div>
                            </div>
                            <div className='absolute top-0   flex w-[100%] justify-end p-5'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="blue" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className='p-1 h-[30px] w-[30px] rounded-full cursor-pointer' onClick={() => setprofilesetting(true)}><path onClick={() => setprofilesetting(true)} fill="none" d="M0 0h24v24H0z"></path><path d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34z"></path></svg></div>
                            <div className='mt-10   w-[300px] flex flex-col items-center'>
                                <span className=' font-bold text-xl'>{e.userdetails.name}</span>
                                <div className='flex px-5 mt-2'>
                                    <span className='mx-1 text-xs'>{e.userdetails.city || 'City'} </span>
                                    <span className='mx-1 text-xs'>{e.userdetails.country || 'Country'}</span>
                                    <span className='mx-1 text-sm text-blue-600  cursor-pointer font-bold  relative z-4000' onClick={() => setconat(true)} >Contact Info</span>
                                </div>


                                <div className='flex space-x-3 p-5 mt-1'>
                                    <span>{e.userdetails.followers ? e.userdetails.followers.length : '0'} Followers</span>
                                    <span> {e.userdetails.following ? e.userdetails.following.length : '0'} Following</span>
                                </div>

                            </div>
                        </>
                    )
                })}
                <div className={`${profilesetting ? 'flex' : 'hidden'}  absolute  top-0  h-[100%] w-[100%]  justify-center items-center`} > <div className=' w-[400px] h-[290px] rounded-lg  p-2'>
                    <div className='flex justify-between'>
                        <span className=' text-xl font-bold m-5'>Profile Setting</span>
                        <div className=' font-bold cursor-pointer flex justify-end text-gray-600  ' onClick={() => setprofilesetting(false)}>X</div>
                    </div>

                    <label className=" my-2 flex items-center text-center justify-center hover:bg-green-200 cursor-pointer p-3 rounded-full"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="grey" class="mx-2" height="20" width="20" xmlns="http://www.w3.org/2000/svg" ><path fill="none" stroke-width="2" d="M1,1 L19,1 L19,19 L1,19 L1,1 Z M5,19 L5,23 L23,23 L23,5.97061363 L18.9998921,5.97061363 M6,8 C6.55228475,8 7,7.55228475 7,7 C7,6.44771525 6.55228475,6 6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 Z M2,18 L7,12 L10,15 L14,10 L19,16"></path></svg><div>Change Profile Cover</div><input accept="image/*" type="file" name="image" className='hidden' /></label>
                    <label className=" my-2 flex items-center text-center justify-center hover:bg-green-200 cursor-pointer p-3 rounded-full"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="grey" class="mx-2" height="20" width="20" xmlns="http://www.w3.org/2000/svg" ><path fill="none" stroke-width="2" d="M1,1 L19,1 L19,19 L1,19 L1,1 Z M5,19 L5,23 L23,23 L23,5.97061363 L18.9998921,5.97061363 M6,8 C6.55228475,8 7,7.55228475 7,7 C7,6.44771525 6.55228475,6 6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 Z M2,18 L7,12 L10,15 L14,10 L19,16"></path></svg><div>Change Profile Image</div><input accept="image/*" type="file" name="image" className='hidden' onChange={(e) => setprofileimg(e.target.files[0])} /></label>
                    <div className='flex justify-center my-10'> <button className='bg-red-500 rounded-lg p-1 px-2 text-white ' onClick={updateprofile} >Update Profile</button></div>
                </div>

                </div>

            </div>

            <div className='e w-[800px] h-[200px] rounded-md  relative border' >
                <div className='flex justify-between '>
                    <h2 className='text-2xl font-bold m-4  w-[300px]'> Your Interests</h2>
                    <div className=' text-white  flex w-[100%] justify-end p-5'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="blue" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className='p-1 h-[30px] w-[30px] rounded-full  cursor-pointer' onClick={() => setintopen(true)}><path onClick={() => setintopen(true)} fill="none" d="M0 0h24v24H0z"></path><path d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34z"></path></svg></div>

                </div>
                <div className=' flex flex-col'>

                    <ul>


                        {
                            userdetails.map((e) => {
                                return (
                                    <>
                                        <li className='bg-gray-400 p-2 w-[100px] rounded-xl m-2'>{e.userdetails.interests}</li>

                                        {/* <li className='m-10 border'>{e.userdetails.interests}</li> */}

                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={` ${intopen ? 'flex' : 'hidden'} absolute top-0  justify-center items-center w-[100%] h-[100%]`}>
                    <div className='bg-gray-100 w-[400px] flex flex-col border-2 outline-none '>
                        <div className='flex justify-between'>
                            <span className=' text-xl font-bold m-5'>Interestes</span>
                            <div className=' font-bold cursor-pointer flex justify-end text-gray-600  ' onClick={() => setintopen(false)}>X</div>
                        </div>
                        <select name="Interests" id="" className='my-10 p-1 text-gray-600 font-mono' onChange={(e) => setselect(e.target.value)}>
                            <option value="HTML">HTML</option>
                            <option value="Javascript">Javascript</option>
                            <option value="CSS">CSS</option>
                            <option value="REACTJS">REACTJS</option>
                            <option value="NODEJS">NODEJS</option>
                            <option value="EXPRESSJS">EXPRESSJS</option>
                            <option value="MONGODB">MONGODB</option>
                            <option value="MY SQL">MY SQL</option>
                            <option value="TAILWIND CSS">TAILWIND CSS</option>
                            <option value="BOOTSTRAP">BOOTSTRAP</option>
                            <option value="ORACLE">ORACLE</option>
                            <option value="ANGULAR JS">ANGULAR JS</option>
                            <option value="WEB DESIGNING">WEB DESIGNING</option>
                            <option value="ILLUSTRATOR">ILLUSTRATOR</option>
                            <option value="MS OFFICE">MS OFFICE</option>
                            <option value="MS EXCEL">MS EXCEL</option>
                            <option value="MS POWERPOINT">MS POWERPOINT</option>
                        </select>
                        <div className='flex justify-center my-10'> <input type='submit' name='Submit' className='bg-red-500 rounded-lg p-1 px-2 text-white ' onClick={updateinterest} /> </div>

                    </div>

                </div>


            </div>


            <Userposts userdetails={userdetails} heading='Your Posts' ></Userposts>


            <div className='absolute  h-[500px'>

                <Contact_info setconat={setclick} contact={contact} ></Contact_info>

            </div>


        </div >



    )
}

export default UserDetails
