import React, { useState } from 'react'

const Addpost = () => {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [image, setimage] = useState('')

    const handle = async () => {
        const postdata = { title, desc, image }
        if (title && desc && image) {

            let formData = new FormData()
            formData.append('title', title)
            formData.append('desc', desc)
            formData.append('image', image)

            const postdatagive = await fetch('https://social-media-backend-psi-five.vercel.app/post', {
                method: "POST",
                headers: {
                    "auth-token": `${localStorage.getItem('auth-token')}`
                },
                body: formData
            })
            window.location.replace("/")
        }
        else {
            alert('Fill out ALl fields !')
        }
    }
    return (
        <>
            <h1 className='my-5 text-center text-4xl font-bold'>Add your New Post</h1>
            <div className='px-10 mt-10 '>
                <input type="text" placeholder='Title of Post' className='w-[300px] border-2 outline-none p-2 my-2' onChange={(e) => settitle(e.target.value)} />
                <br />
                <textarea type="text" placeholder='Description of Post' rows={13} className='w-[600px] border-2 outline-none p-2 ' onChange={(e) => setdesc(e.target.value)} />
                <br />
                <input type="file" className='my-2' onChange={(e) => setimage(e.target.files[0])} />
                <br />

                <button className='w-[120px] bg-red-500 text-white font-semibold p-2' onClick={handle}>Post</button>
            </div>
        </>
    )
}

export default Addpost
