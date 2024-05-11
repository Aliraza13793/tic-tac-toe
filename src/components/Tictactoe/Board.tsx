"use client"
import React, {useState}from 'react'
import Square from './Square'

const Board=()=> {
    const [state, setState]= useState(() =>Array(9).fill(null));
    const [isXTurn, setIsXTurn]=useState(true);
const checkWinner=()=>{
    const winnerLogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let logic of winnerLogic){
        const [a,b,c]=logic;
        if(state[a] ===null && state[a]===state[b] && state[a] === state[c]){
            return state[a];
        }
    }
    return null;
};
const isWinner=checkWinner();

    const handleclick=(index:number)=>{
        const copyState=[...state];
        copyState[index]=isXTurn?'X':'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
    };
  return (
    <div className='flex flex-col items-center text-4xl mt-14'>
         {isWinner ?(
        <>{isWinner}Won the Game</>
    ):(
    <>
    <div className='flex text-center '>
            <Square onClick={()=>handleclick(0)} value={state[0]}/>
            <Square onClick={()=>handleclick(1)}value={state[1]}/>
            <Square onClick={()=>handleclick(2)}value={state[2]}/>
        </div>
        <div className='flex text-center '>
            <Square onClick={()=>handleclick(3)}value={state[3]}/>
            <Square onClick={()=>handleclick(4)}value={state[4]}/>
            <Square onClick={()=>handleclick(5)}value={state[5]}/>
        </div>
        <div className='flex text-center '>
            <Square onClick={()=>handleclick(6)}value={state[6]}/>
            <Square onClick={()=>handleclick(7)}value={state[7]}/>
            <Square onClick={()=>handleclick(8)}value={state[8]}/>
        </div>
        </>)}
    </div>
 
  )
}

export default Board