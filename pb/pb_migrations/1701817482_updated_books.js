/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g167yjzxtpk601z")

  collection.updateRule = "@request.auth.role = \"Admin\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g167yjzxtpk601z")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
