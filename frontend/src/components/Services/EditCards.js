import React, {useState, useEffect} from 'react'
import NumRange from "../NumRange"
import {listCardDetails} from "../../redux/actions/cardActions"
import {cardUpdateOrder} from "../../redux/actions/cardOrderActions"
import {useDispatch, useSelector} from "react-redux"
import PaymentMethods from "../PaymentMethods"
import {EditButton} from "../../styles/ServiceStyle"
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from "react-router-dom"

const EditCards = ({id, cardObj, paymentMethod}) => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    
    useEffect(()=>{
        dispatch(listCardDetails(cardObj.card))
    }, [dispatch, cardObj.card])
    
    const cardDetails  = useSelector(state => state.cardDetails)
    const {loading: cardLoading, card, error: cardError} = cardDetails        
    
    const [num, setNum] = useState(cardObj.qty)
    const [totalCost, setTotalCost] = useState(parseInt(cardObj.price))  
    const [paymentMeans, setPaymentMeans] = useState(paymentMethod);     
    
    console.log("Edit", card)
    
    const [display, setDisplay]  = useState({
        first: true,
        second: false,
        third: false
    })
    
    const displayElem = (item) =>{
        return {display: display.[item] ? "flex" : "none"}        
    }
    
    const handleCardOrderEdit = () =>{
        if(card){
            dispatch(cardUpdateOrder(
                id,
                {            
                orderItems: {
                    card: card._id,
                    name: card.name,
                    qty: num,
                    image: card.image,
                    price: parseInt(num * card.price)
                },
                paymentMethod: paymentMeans
            }))
            history.push(`/payorder/card?orderId=${id}`)    
        }        
    }
    
    return (
        <div className="buyinfo--edit">
            
            <div className="buyinfo--first edit">
                <div className="number" >
                    <span>1</span>
                </div>
            
                <div className="contents">                                        
                    <div className="numrange">
                        <h5>How many cards?
                            <hr/>
                        </h5>
                        <NumRange 
                            num={num} 
                            setNum={setNum} 
                            setPrice={setTotalCost} 
                            amount={parseInt(card.price)}
                        /> 
                        <div className="price__items">
                            <span className="price">₦{totalCost}</span>
                        
                            <small>
                                <div></div> 
                                <span>
                                    {
                                        card && 
                                        (card.countInStock > 0 ? "In stock" : "Out of stock")
                                    }    
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
              
            <div className="buyinfo--second">
                <hr/>
                
                <div className="paymentmethod-alt">
                    <div className="number bottom" >
                        <span>2</span>
                    </div>
                    <PaymentMethods 
                        value={paymentMeans} 
                        setValue={setPaymentMeans}                         
                    />
                </div>
            </div>
            
            <EditButton onClick={handleCardOrderEdit}>
                Edit <EditIcon />
            </EditButton>
        </div>
    )
}

export default EditCards
