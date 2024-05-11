"use client"
import React from 'react'

const  Square=(props: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined; value: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }) =>{
    
  return (
    <div
    onClick={props.onClick} className='border border-slate-600 h-16 w-16'>
        <h5>{props.value}</h5>
        
        </div>
  )
}

export default Square