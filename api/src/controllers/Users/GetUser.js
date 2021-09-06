const { User } = require('../../db');
async function getUser(req, res, next) {
    try {
        const { id } = req.params
        const { given_name, family_name, nickname, picture, email } = req.body
        let isAdmin=false
        if(email==="wineecommerce14@gmail.com") isAdmin=true

        var userSearched = await User.findOrCreate({
            where: {id: id}
            , attributes: { exclude: ["createdAt", "updatedAt"],
            },
            defaults:{
                id:id, 
                firstName: given_name,
                lastName: family_name,
                userName: nickname,
                image: picture,
                email: email,
                admin: isAdmin
            }
        });
        res.json({ ...userSearched[0]});
    } catch (error) {
        next(error)
    }
};
module.exports = { getUser };