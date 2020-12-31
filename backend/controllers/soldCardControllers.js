import asyncHandler from "express-async-handler"
import SoldCard from "../models/soldCardsModel.js"
import Card from "../models/cardModels.js"


// @desc    Create a card
// @route   POST /api/cards
// @access  Private

export const createSoldCard = asyncHandler( async(req, res)=>{
    const {cardId, userId} = req.params
    const {purchasedItems} = req.body
    
    const card = await Card.findById(cardId)
    
    const cardArray = []
    
    for (let purchasedItem of purchasedItems){
        const soldCard = new SoldCard({
            name: card.name,
            pin: purchasedItem.pin,
            serialNo: purchasedItem.serialNo,
            token: purchasedItem.token,
            price: card.price,
            image: card.image,
            user: userId,
            card: cardId
        })
        const createdCard = await soldCard.save()
        cardArray.push(createdCard)
    }
        
    res.status(201).json(cardArray)
})
