/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvcdrzwpkbwdpu8")

  collection.updateRule = "@request.auth.role = \"Admin\""
  collection.deleteRule = "@request.auth.role = \"Admin\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvcdrzwpkbwdpu8")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
