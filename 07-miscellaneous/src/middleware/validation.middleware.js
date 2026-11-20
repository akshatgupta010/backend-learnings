const {body, validationResult} = require("express-validator");

async function vallidateResult(req, res, next) {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    next();

}

const registerUserValidationRules = () => {

    body("username")
        .isString()
        .withMessage("Username must be a string")
        .isLength({min: 3, max: 20})
        .withMessage("Username must be between 3 and 20 characters long"),

    body("email")
        .isEmail()
        .withMessage("Email must be a valid email address"),

    body("password")
        .isString()
        .withMessage("Password must be a string")
        .isLength({min: 6, max: 20})
        .withMessage("Password must be between 6 and 20 characters long"),

        validateResult
}

module.exports = {
    registerUserValidationRules
}