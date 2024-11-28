import Image from "next/image";
import React from 'react'

const ChildComponent = (props: any) => {
    console.log (props)
    return (
        <div className="bg-slate-100 border w-full sm:w-4/12 md:w-1/4 lg:w-1/4 xl:w-1/4 my-5 mx-4 sm:mx-8">
            <img src={props.Pic} alt={props.Make} style={{ width: '300px', height: 'auto' }} />
            <h1 className="text-blue-800 text-2xl text-center">{props.Make}</h1>
            
            <p className="text-green-500 text-center">{props.Price}</p>
            <p className="text-yellow-600 text-center">{props.Review}</p>
        </div>
  
    );
}
export default ChildComponent
