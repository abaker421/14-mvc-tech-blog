const router = require('express').Router()
const { User } = require('../../models')

router.post('/', async( req,res) => {
    try{
        const newUser = await User.create({
            ...req.body,
            userId: req.session.userId
        })

        res.status(200).json(newUser)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req,res) => {
    try{

        const userData = await User.destroy({
            where:{
                id: req.params.id,
                userId: req.session.userId
            }
        })

        if (!userData){
            res.status(400).json({message: 'No user found to delete'})
        }

        res.status(200).json(userData)

    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.delete

module.exports= router