import React, {useState} from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {NumRangeContainer} from "../styles/ServiceStyle.js"

const NumRange = ({num, setNum, setPrice, amount}) => {        
    
    const handleNumDecrement = () =>{
        const newNum = num === 1 ? num : num - 1        
        setNum(newNum)
        setPrice(newNum * amount)
    }
    
    const handleNumIncrement = () =>{
        const newNum = num === 10 ? num : num + 1
        setNum(newNum)
        setPrice(newNum * amount)
    }
    return (
        <NumRangeContainer>
            <button onClick={handleNumDecrement }>
                <RemoveIcon />
            </button>
            <span>{num}</span>
            <button onClick={handleNumIncrement}>
                <AddIcon />
            </button>
        </NumRangeContainer>
    )
}

export default NumRange
