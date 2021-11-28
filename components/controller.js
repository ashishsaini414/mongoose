const item = require("./service");

module.exports.getItems = async (req, res)=>{
    const response = await item.getItem()
    res.send(response)
}
module.exports.addItems = async (req, res)=>{
    const response = await item.addItem(req.body);
    res.send(response)
}
module.exports.updateItems = async (req, res) => {
    const response = await item.updateItem(req.params,req.body);
    res.send(response)
}
module.exports.deleteItems = async (req,res) =>{
    const response = await item.deleteItem(req.params.id);
    res.send(response);
}