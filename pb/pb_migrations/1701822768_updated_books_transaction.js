/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvcdrzwpkbwdpu8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bgjadwdd",
    "name": "return_date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvcdrzwpkbwdpu8")

  // remove
  collection.schema.removeField("bgjadwdd")

  return dao.saveCollection(collection)
})
