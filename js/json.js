// javascript object Notation
//JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    owner: {
        name: 'Alia Bhat',
        profession: 'Actor'
    },
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);