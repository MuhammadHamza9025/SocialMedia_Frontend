import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const SearchUsers = ({ search, setsearch }) => {
    const [user, setusers] = useState([])

    useEffect(() => {
        const getallusers = async () => {
            const data = await fetch(`http://localhost:9000/getallusers`)
            const users = await data.json()
            setusers(users)
        }
        getallusers()
    }, [search.length > 0])
    const filteruser = user.filter((e) => e.name.replace(/\s+/g, '').toLowerCase().includes(search.replace(/\s+/g, '').toLowerCase()));
    return (
        <div >

            {
                filteruser.length > 0 ?

                    filteruser.map((e) =>

                        <Link to={`/users/${e._id}`} >
                            <div className=' z-[1000] m-2 flex justify-between items-center hover:bg-gray-200 p-2 rounded-md cursor-pointer' onClick={() => setsearch('')} >
                                <p>{e.name}</p>
                                <div className='h-[50px] w-[50px] rounded-full'>
                                    <img src={e.image} className='h-[100%] w-[100%] rounded-full object-center' alt="" />
                                </div>
                            </div>
                        </Link>
                    )

                    :
                    <p>No user Found</p>
            }
        </div>
    )
}

export default SearchUsers


// this is user12233klnk