import WalletLog from "../models/walletLogModels.js"
import User from "../models/userModels.js"
import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"


// @desc    Update user profile
// @route   PUT /api/users/profile/update
// @access  Private

export const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.body.user._id)
    const { name, email, profile, password } = req.body.user

    if (user) {
        user.name = name || user.name
        user.email = email || user.email
        user.profile = profile || user.profile
        // console.log(req.body.user)
        if (password) {
            user.password = password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            type: updatedUser.type,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
            wallet: updatedUser.wallet,
            profile: updatedUser.profile
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Debit money from wallet
// @route   PUT /api/users/wallet/debit
// @access  Private

export const debitWallet = asyncHandler(async (req, res) => {

    const { id, amount, paymentResult } = req.body
    const user = await User.findById(id)

    if (user) {
        const balance = user.wallet - parseInt(amount)

        user.wallet = balance

        const updatedUser = await user.save()

        if (updatedUser) {
            const walletlog = new WalletLog({
                type: 'debit',
                method: 'local',
                paymentResult,
                user: user._id,
                amount: parseInt(amount),
                balance: parseInt(balance)
            })
            await walletlog.save()
        }

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            type: updatedUser.type,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
            wallet: updatedUser.wallet,
            profile: updatedUser.profile
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})


export const creditWallet = asyncHandler(async (req, res) => {
    const { id, amount, paymentResult, method } = req.body
    const user = await User.findById(id)

    if (user) {
        user.wallet += parseInt(amount)
        const updatedUser = await user.save()

        if (updatedUser) {
            const walletlog = new WalletLog({
                type: 'credit',
                method,
                paymentResult,
                user: user._id,
                amount: parseInt(amount),
                balance: user.wallet
            })
            await walletlog.save()
        }

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            type: updatedUser.type,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
            wallet: updatedUser.wallet,
            profile: updatedUser.profile
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})



// @desc    GET all users
// @route   GET /api/users/
// @access  Private/Admin

export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})

    if (users) {
        res.status(200).send(users)
    } else {
        res.status(404)
        throw new Error('No user found')
    }
})

// @desc    GET a  user profile
// @route   GET /api/users/:id
// @access  Private/Admin

export const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        res.status(200).send(user)
    } else {
        res.status(404)
        throw new Error('No users found')
    }
})

// @desc    DELETE a user
// @route   GET /api/users/delete/:id
// @access  Private/Admin

export const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user && user.isAdmin) {
        throw new Error("You cant delete an admin user. Contact central support")
    }

    if (user) {
        user.delete()
    } else {
        throw new Error('User not found')
    }

})

// @desc    PUT make a user an admin
// @route   GET /api/users/:id/admin
// @access  Private/Admin

export const makeAdmin = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    const { adminStatus } = req.body

    if (user) {
        user.isAdmin = adminStatus
        await user.save()
    } else {
        res.statusCode(404)
        throw new Error('User not found')
    }


})