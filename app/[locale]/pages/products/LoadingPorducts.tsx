import React from 'react'

function LoadingPorducts() {
    return (
        <div className={`ml-[15px]`}>
            <div className={`w-full h-[45px] loading`}></div>
            <div className={`w-full grid grid-cols-3 gap-[30px] mt-[10px]`}>
                {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index}>
                        <div className={`w-full h-[270px] loading`}></div>
                        <div className='w-full h-[17px] loading mt-[15px]'></div>
                        <div className='w-[80%] h-[17px] loading mt-[5px]'></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LoadingPorducts