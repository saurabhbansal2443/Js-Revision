import React from 'react'

const Banner = () => {
    return (
       <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmV2nrm2B-ta55cVsO_l4Kqe6LBOIVS3z2A&usqp=CAU')" , height:"50vh"}} className='text-white text-6xl flex flex-col justify-end item-start bg-no-repeat bg-cover bg-center  w-full h-full mb-6'>
            <h2 className='ml-4'> Movie Name </h2>
            <p className="ml-4 mb-8"> movie des </p>
       </div>
    )
}

export default Banner