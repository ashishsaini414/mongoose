const router = require('express').Router()
const items = require("./controller")

router.get('/items',items.getItems);
router.post('/items',items.addItems);
router.patch('/item/:id',items.updateItems);
router.delete('/item/:id',items.deleteItems);

module.exports = router
