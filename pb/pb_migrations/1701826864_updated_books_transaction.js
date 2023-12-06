/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvcdrzwpkbwdpu8")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvcdrzwpkbwdpu8")

  collection.listRule = "@request.auth.role = \"Admin\" && (user.id = @request.auth.id)"

  return dao.saveCollection(collection)
})
