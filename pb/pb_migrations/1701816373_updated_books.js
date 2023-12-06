/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g167yjzxtpk601z")

  collection.createRule = "@request.auth.role != \"Student\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g167yjzxtpk601z")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
