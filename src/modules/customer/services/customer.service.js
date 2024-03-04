import { doQuery } from "../../../common/database/mysql.db.js";
import { models, TableName } from "../models/customer.model.js"

const CustomerService = {
    getAll: (columns = models) => {
        const options = [columns, TableName]
        return doQuery( `SELECT ?? FROM ??`, options)
    },
    create: (payload) => {
        return doQuery(`INSERT INTO ${TableName} SET ?`, payload)
    },
    login: (payload) => {
        return doQuery( `SELECT * FROM ${TableName} where username = ?`, payload)
    }
}

export default CustomerService