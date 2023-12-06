/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e8lwpliuoqq7qc0")

  collection.options = {
    "allowEmailAuth": false,
    "allowOAuth2Auth": false,
    "allowUsernameAuth": true,
    "exceptEmailDomains": [],
    "manageRule": null,
    "minPasswordLength": 5,
    "onlyEmailDomains": [],
    "requireEmail": false
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e8lwpliuoqq7qc0")

  collection.options = {
    "allowEmailAuth": false,
    "allowOAuth2Auth": false,
    "allowUsernameAuth": true,
    "exceptEmailDomains": [],
    "manageRule": null,
    "minPasswordLength": 8,
    "onlyEmailDomains": [],
    "requireEmail": false
  }

  return dao.saveCollection(collection)
})
