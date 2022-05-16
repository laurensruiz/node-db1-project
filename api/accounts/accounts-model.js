const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  //select * from accounts; (sequel syntax but avoid)
  return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  //select * from accounts where id = 1
  return db('accounts').where('id', id).first()
}

const create = async account => {
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('accounts').where('id', id).update(account) // return number of
  return getById(id) // we must get the new account after update not the old one, hence why in delete we did not do this
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).del() // gives number rows deleted but our middleware check Account Id, sets account to req.account we can return the deleted account
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
