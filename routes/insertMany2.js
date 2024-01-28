const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "mongodb+srv://shuharu:ty38566@cluster0.mr40bsy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');
// データを登録
const query = [
    { name: 'Yasushi', mail: 'osonoi@cu', tel: '1111' },
    { name: 'Koh', mail: 'kojima@cu', tel: '2222' },
    { name: 'Alice', mail: 'alice@example.com', tel: '3333' },
    { name: 'Bob', mail: 'bob@example.com', tel: '4444' },
    { name: 'Charlie', mail: 'charlie@example.com', tel: '5555' },
    { name: 'David', mail: 'david@example.com', tel: '6666' },
    { name: 'Eve', mail: 'eve@example.com', tel: '7777' },
    { name: 'Frank', mail: 'frank@example.com', tel: '8888' },
    { name: 'Grace', mail: 'grace@example.com', tel: '9999' },
    { name: 'Henry', mail: 'henry@example.com', tel: '0000' },  
];
const note = await notes.insertMany(query);
console.log(note);
// 最後にクロースする
await client.close();
}
run()