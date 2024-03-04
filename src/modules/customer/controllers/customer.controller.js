import CustomerService from "../services/customer.service.js";
import bcrypt from "bcrypt";

const CustomerController = {
    getAllCustomer: async (req, res) => {
        try {
            const customer = await CustomerService.getAll()
            res.status(200).json({
                success: true,
                data: customer
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                msg: error
            })
        }
    },
    addCustomer: async (req, res) => {
        try {
            const { username, password } = req.body
            const passwordHash = await bcrypt.hash(password, 10)
            const created = await CustomerService.create({ username, password: passwordHash })
            console.log('created => ', created)
            res.status(201).json({
                success: true,
                data: created
            })
        } catch (error) {
            console.log('error =>', error)
            res.status(500).json({
                success: false,
                msg: error
            })  
        }
    },
    loginCustomer: async (req, res) => {
        try {
            const { username, password } = req.body
            const [customerData] = await CustomerService.login( username )
            const match = await bcrypt.compare(password, customerData.password)
            //if password wrong
            if (!match) {
                res.status(400).json({
                    success: false,
                    msg: 'login fail (wrong password)'
                })
                return false
            }
            res.status(200).json({
                success: true,
                data: customerData,
                msg: 'login successfully'
            })
        } catch (error) {
            // if username wrong
            res.status(401).json({
                success: false,
                msg: 'login fail! (wrong username)'
            })
        }
    }
}

export default CustomerController