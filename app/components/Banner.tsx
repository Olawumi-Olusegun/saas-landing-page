import React from 'react'

const Banner = () => {
  return (
    <div className='py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_155,_192,_.7),rgb(252,_214,_255,_.7))] '>
        <div className="container">
            <p className='font-medium flex items-center justify-center text-center'>
                <span className='hidden sm:inline'>Introducing a completely redesigned interface&nbsp;-&nbsp; </span>  
                <a href="#" className='underline underline-offset-4'> Explore a demo</a>
            </p>
        </div>
    </div>
  )
}

export default Banner