const { User  } = require('../../db');


async function getAllUsers(req , res , next){
    try{
        var allUsers = await User.findAll({
            attributes: { 
                exclude: ["createdAt", "updatedAt"] 
            },
            }
            );
            
        res.json(allUsers);

    } catch (error){

        next(error)
    };
};
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
async function editUser(req, res, next) {

    const { userId } = req.params

    const { blocked, adress, admin } = req.body

    try {

        let userToEdit = await User.findOne({ where: { id:userId }})

        if(blocked){
            userToEdit["blocked"]=blocked
        }     
        if(adress){
            userToEdit["adress"]=adress
        }     
        if(admin){
            userToEdit["admin"]=admin
        }     
            
        await userToEdit.save()
        res.send({ msg: `The user ${userId} was edited successfully.` });
        
    } catch (error) {
        next(error)
    };
};

module.exports = {
    getAllUsers,
    getUser,
    editUser
};