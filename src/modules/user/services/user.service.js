import { doQuery } from "../../../common/database/mysql.db.js";
import { models, TableName } from '../models/user.model.js'

const UserService = {
    getAll: (columns = models) => {
        const options = [columns, TableName]
        return doQuery( `SELECT ?? FROM ??`, options)
    },
    create: (payload) => {
        return doQuery(`INSERT INTO ${TableName} SET ?`, payload)
    },
    getById: (id) => {
        return doQuery( `SELECT * FROM ${TableName} WHERE _id = ${id}`,)
    },
    update: (id, payload) => {
        return doQuery(`UPDATE ${TableName} SET ? WHERE _id = ${id}`, payload)
    },
    delete: (id) => {
        return doQuery(`DELETE FROM ${TableName} WHERE _id = ${id}`,)
    }
}

export default UserService