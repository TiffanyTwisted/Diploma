const pool = require("../config/config");

const getUsers = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM usertable', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`User here: ${results.fields}`);
      })
    }) 
  }
  const createUser = (id, school_id, application_id, name, email, password) => {
    return new Promise(function(resolve, reject) {
      //const { name, email } = body
      pool.query('INSERT INTO usertable (id, school_id, application_id, name, email, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [id, school_id, application_id, name, email, password], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new user has been added: ${results.rows[0]}`)
      })
    })
  }
  const deleteUser = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM usertable WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`User deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getUsers,
    createUser,
    deleteUser,
  }