const itemsModel = require("./Model")

module.exports.getItem = async () =>{
    const users = await itemsModel.find();
    return users;
}

module.exports.addItem = async (data)=>{
    const { name, quantity, isSanitized, unit, expiryDate, category, location } = data;
    const item = await itemsModel.create({
        name: name,quantity: quantity, isSanitized: isSanitized,unit : unit,expiryDate: expiryDate, category: category, location: location
    })
    return item;
}

module.exports.updateItem = async (myparam,mybody) => {
    const { name, quantity, isSanitized, unit, expiryDate,category, location  } = mybody;
        const item = await itemsModel.updateOne({ _id : myparam.id},{ name: name,quantity: quantity, isSanitized: isSanitized,unit : unit,expiryDate: expiryDate,category: category, location: location})
        return item;
}

module.exports.deleteItem = async (id) => {
    const item = await itemsModel.findByIdAndDelete(id)
    return item;
}