const asyncHandler = require('../middlewares/asyncHandler')
const ErrorResponse = require('../util/ErrorResponse')
const User = require('../db/models/User')

/**
 * @description Login User
 * @method POST /api/v1/auth/login
 * @public access
 */ 

exports.login = asyncHandler(async (req, res, next) => {
    
})

/**
 * @description Register User
 * @method POST /api/v1/auth/register
 * @public access
 */ 
exports.register = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password, phoneNo } = req.body

    // Create User

    const user = await User.findOrCreate({
        where: {
            email
        },
        defaults: {
           firstName,
           lastName,
           email,
           password,
           phoneNo 
        }
    });

    if (!user[1]) {
       return next(new ErrorResponse('Invalid Username', 400)) 
    }

    res
        .status(200)
        .json({
            success: true,
            user: user[0]
        })
})


