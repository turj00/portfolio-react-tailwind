import React from 'react'

const About = () => {
  return (
    <div name="About" id='about' >
    <div className=' w-full py-20 text-center bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>About</p>
            </div>
            <p className='text-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, adipisci eaque deserunt similique est sapiente aliquam voluptatibus! Fuga repellendus illum odit quibusdam provident quas cum exercitationem modi vel, porro quia deleniti ea atque fugiat alias itaque animi non voluptas ducimus dolorem sint? Unde, vel. Quis sed ab quos accusantium omnis.</p>
            <br/>

            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, quia earum inventore facilis nesciunt vero perspiciatis illum officiis natus tempora in reiciendis at eum, quos et quisquam. Assumenda, iure! Veniam.</p>
        </div>
    </div>
    </div>
  )
}

export default About