import UserService from "../services/user.service.js"

const UserController = {
    getAllUser: async (req, res) => {
        const users = await UserService.getAll()
        res.status(200).json({
            success: true,
            data: users
        })
    },
    addUser: async (req, res) => {
        const { firstName, lastName, email } = req.body 
        const created = await UserService.create({ firstName, lastName, email })
        res.status(201).json({
            success: true,
            data: created
        })
    },
    getUserById: async (req, res) => {
        const { id } = req.params
        const userbyId = await UserService.getById(id)
        res.status(200).json({
            success: true,
            data: userbyId
        })
    },
    updateUser: async (req, res) => {
        const { id } = req.params
        const { firstName, lastName, email } = req.body 
        const updated = await UserService.update(id,  {firstName, lastName, email })
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteUser: async (req, res) => {
        const { id } = req.params
        const deleted = await UserService.delete(id)
        res.status(200).json({
            success: true,
            msg: "Deleted Successfully"
        })
    }
}

export default UserController