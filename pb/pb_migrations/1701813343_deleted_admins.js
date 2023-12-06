/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e8lwpliuoqq7qc0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "e8lwpliuoqq7qc0",
    "created": "2023-12-05 21:06:48.864Z",
    "updated": "2023-12-05 21:47:12.005Z",
    "name": "admins",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 5,
      "onlyEmailDomains": [],
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
