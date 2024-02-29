import UserService from "../services/user.service.js"

const UserController = {
    getAllUser: async (req, res) => {
        try {
            const users = await UserService.getAll()
            res.status(200).json({
                success: true,
                data: users
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                msg: error
            })
        }
    },
    addUser: async (req, res) => {
        const { firstName, lastName, email } = req.body
        try {
            const created = await UserService.create({ firstName, lastName, email })
            res.status(201).json({
                success: true,
                data: created
            })
        } catch (error) {
            res.status(500).json({
                success: true,
                msg: error
            })              
        }
    },
    getUserById: async (req, res) => {
        const { id } = req.params
        try {
            const [userbyId] = await UserService.getById(id)
            res.status(200).json({
                success: true,
                data: userbyId
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                msg: error
            })           
        }
    },
    updateUser: async (req, res) => {
        const { id } = req.params
        const { firstName, lastName, email } = req.body
        try {
            const updated = await UserService.update(id,  {firstName, lastName, email })
            res.status(200).json({
                success: true,
                data: updated
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                msg: error
            })
        }
    },
    deleteUser: async (req, res) => {
        const { id } = req.params
        try {
            const deleted = await UserService.delete(id)
            res.status(200).json({
                success: true,
                data: "Deleted Successfully"
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                msg: error
            })
        }
    }
}

export default UserController