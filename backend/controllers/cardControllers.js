import asyncHandler from "express-async-handler"
import Card from "../models/cardModels.js"

// @desc    Fetch all cards
// @route   GET /api/cards
// @access  Public
export const getCards = asyncHandler (async (req, res) => {        
    
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword
    ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
    : {}

    const count = await Card.countDocuments({ ...keyword })
    const cards = await Card.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

    res.json({ cards, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch few cards
// @route   GET /api/cards/${num}
// @access  Public

export const getFewCards = asyncHandler(async (req, res)=>{
    const num = req.params.num    
    const cards = await Card.find({}).limit(parseInt(num))
    res.json({cards: cards})
})

// @desc    Fetch single card
// @route   GET /api/cards/:id   
// @access  Public

export const getCardById = asyncHandler(async (req, res)=>{
    const card = await Card.findById(req.params.id)
    
    if(card){
        res.json(card)
    }else{
        res.status(404)
        throw new Error("Card not found")
    }
})

// @desc    Delete a card
// @route   DELETE /api/cards/:id   
// @access  Private/Admin
export const deleteCard = asyncHandler( async(req, res)=>{
    const card = await Card.findById(req.params.id)
    
    if(card){
        await card.remove()
        res.json({message: 'Card removed'})
    }else{
        res.status(404)
        throw new Error('Card not found')
    }
})

// @desc    Create a card
// @route   POST /api/cards
// @access  Private/Admin

export const createCard = asyncHandler( async(req, res)=>{
    const card = new Card({
        name: 'Sample card',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        countInStock: 0,
        description: 'Lorem ipsum dolor sit amet'
    })
    const createdCard = await card.save()
    res.status(201).json(createdCard)
})

// @desc    Update a card
// @route   PUT /api/cards
// @access  Private/Admin
export const updateCard = asyncHandler( async(req, res)=>{
    const{name, price, description, image, countInStock} = req.body
    const card = await Card.findById(req.params.id)
    
    if(card){
        card.name = name
        card.price = price
        card.description = description
        card.image = image
        card.countInStock = countInStock
        
        const updatedCard = await card.save()
        res.json(updatedCard)
    }else{
        res.status(404)
        throw new Error('Card not found')
    }
})