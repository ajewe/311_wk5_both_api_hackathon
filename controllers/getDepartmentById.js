const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/errors')

const getDepartmentById = (req, res) => {
  let sql = "SELECT ?? FROM ?? WHERE ?? = ?"
   
  sql = mysql.format(sql, ['*', 'departments', 'dept_no', req.params.dept_no])
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}
  
  
  module.exports = {getDepartmentById}