import React, {useState} from 'react';
import Square from './Square';

const Board = () =>{
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const checkWinner = ()=>{
        const winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,8],
        ];
         for(let win of winner){
            const [a,b,c] = win;
            if(state[a]!== null && state[a] === state[b] && state[a]=== state[c]){
                return state[a];
            }
         }
         return false;
    };

    const isWinner = checkWinner();

    const handleClick = (index) =>{
        if(state[index]!== null){
            return;
        }
      const copyState = [...state];
      copyState[index] = isXTurn ? "X" : "O";
      setState(copyState);
      setIsXTurn(!isXTurn);
    };
    const handleReset = () =>{
        setState(Array(9).fill(null));
    };
    return (
        <div className='container'>
            <div className= 'content-wrapper'>
                {isWinner ? <h4 className='winner'>{isWinner} won the game!!</h4>:
                <>
                <h1 className='header'> Tic-Tac-Toe</h1>
                <div className="board-container">
                    <h3 className='message'> Player {isXTurn ? 'X': 'O'} turn</h3>
                    <div className= "board-row">
                    <Square className='square' onClick= {() => handleClick(0)} value={state[0]}/>
                    <Square className='square' onClick= {() => handleClick(1)} value={state[1]}/>
                    <Square className='square' onClick= {() => handleClick(2)} value={state[2]}/>
                    </div>
                    <div className= "board-row">
                    <Square className='square' onClick= {() => handleClick(3)} value={state[3]}/>
                    <Square className='square' onClick= {() => handleClick(4)} value={state[4]}/>
                    <Square className='square' onClick= {() => handleClick(5)} value={state[5]}/>
                    </div>
                    <div className= "board-row">
                    <Square className='square' onClick= {() => handleClick(6)} value={state[6]}/>
                    <Square className='square' onClick= {() => handleClick(7)} value={state[7]}/>
                    <Square className='square' onClick= {() => handleClick(8)} value={state[8]}/>
                    </div>
                </div>
                </>}
             <button onClick={handleReset} className='reset-button'> Play Again</button>
             </div>
        </div>
          
    );
};

export default Board;