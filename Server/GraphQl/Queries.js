const admin = require("../Config/config");
const db = admin.firestore();

const getUserCollection = async () =>{
    const users =  db.collection("users");
    const docs = await users.get();
    let data = [];
    if(!docs.empty){
        docs.forEach((user) => {
            if(user.exists){
               data.push({
                   ...user.data() 
               });
            }else{
                return "error";
            } 
        })
    }else{
        console.log('List is empty');
    }

    // console.log(data);  
    return data;

}

const getOrders = async () =>{
    let userOrders = db.collection("orders");
    const docs = await userOrders.orderBy("title").get();
    // const snapShort = await docs.get();
    // let lastDoc = snapShort.docs[snapShort.docs.length -1];
    
    let data = [];
    if(!docs.empty){
        docs.forEach((orders) => {
            if(orders.exists){
               data.push({
                   ...orders.data() 
               });
            }else{
                return "error";
            } 
        })
    }else{
        console.log('List is empty');
    }
    
    return data;
    }


module.exports = {
    getOrders,
    getUserCollection
}