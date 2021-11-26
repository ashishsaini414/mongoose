const itemsModel = require("./Model")

module.exports.getItem = async () =>{
    const users = await itemsModel.find();
    return users;
}

module.exports.addItem = async (data)=>{
    const { name, quantity, isSanitized, unit, expiryDate} = data;
    const item = await itemsModel.create({
        name: name,quantity: quantity, isSanitized: isSanitized,unit : unit,expiryDate: expiryDate
    })
    return item;
}

module.exports.updateItem = async ({ quantity},{name}) => {
        const item = await itemsModel.create({
            quantity: quantity, name: name
        })
        return item
}

module.exports.deleteItem = async (id) => {
    const items = await itemsModel.deleteMany({
        _id: id
    })
}