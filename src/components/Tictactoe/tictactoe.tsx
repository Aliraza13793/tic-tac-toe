import React, { useState } from 'react'

let data=["","","","","","","","","",]

function Tictactoe() {
    return (
    <div className='text-center'>
        <h1 className='flex-col text mt-12 mb-8 text-orange-300 text-4xl'>Tic Tac Toe Using <span className='text-green-400 text-6xl'>React</span></h1>
        <div className='flex h-40 w-40'>
            <div>
                <div className='flex h-16 w-16 bg-slate-300 border border-spacing-4 border-green-300'></div>
                <div className='flex h-16 w-16 bg-slate-300 border border-spacing-4 border-green-300'></div>
                <div className='flex h-16 w-16 bg-slate-300 border border-spacing-4 border-green-300'></div>
            </div>
            <div>
                <div className='flex h-16 w-16 bg-slate-300 border border-spacing-4 border-green-300'></div>
                <div className='flex h-16 w-16 bg-slate-300 border border-spacing-4 border-green-300'></div>
                <div className='flex h-16 w-16 bg-slate-300 border border-spacing-4 border-green-300'></div>
            </div>
            <div>
                <div className='flex h-16 w-16 bg-slate-300 border border-spacing-4 border-green-300'></div>
                <div className='flex h-16 w-16 bg-slate-300 border border-spacing-4 border-green-300'></div>
                <div className='flex h-16 w-16 bg-slate-300 border border-spacing-4 border-green-300'></div>
            </div>
        </div>
        <button className='w-24 h-12 border rounded-full border-red-500 bg-yellow-600 text-2xl text-black mt-5 mb-5'>Reset</button>

        </div>
  )
}

export default Tictactoe