/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvcdrzwpkbwdpu8")

  collection.listRule = "@request.auth.role = \"Admin\""
  collection.viewRule = "@request.auth.role = \"Admin\""
  collection.createRule = "@request.auth.role = \"Admin\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvcdrzwpkbwdpu8")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
