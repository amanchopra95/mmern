const asyncHandler = require('../middlewares/asyncHandler')
const ErrorResponse = require('../util/ErrorResponse')
const User = require('../db/models/User')

/**
 * @description Login User
 * @method POST /api/v1/auth/login
 * @public access
 */ 

exports.login = asyncHandler(async (req, res, next) => {

    const { email, password } = req.body
    
    const user = await User.findOne({ where: {
        email
    }})

    if (!user) {
        return new ErrorResponse('Invalid Email or Password', 400)
    }

    res.status(200)
    .json({ success: true, data: user })
})

/**
 * @description Register User
 * @method POST /api/v1/auth/register
 * @public access
 */ 
exports.register = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password, phoneNo } = req.body

    // Create User

    const [user, created] = await User.findOrCreate({
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

    if (!created) {
       return next(new ErrorResponse('Username already exist', 400)) 
    }

    res
        .status(200)
        .json({
            success: true,
            user: user.toJSON({attributes: ['firstName', 'email', 'phoneNo']})
        })
})


