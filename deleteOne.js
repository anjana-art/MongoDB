
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://bhattaanjana0:anjana123@anjana.zcmelmw.mongodb.net/?retryWrites=true&w=majority&appName=anjana";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});



async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const db = client.db("myCollection");
        const collection = db.collection("products");


        const product_id = "6633635f195f8397e3d562b4"

        const result = await collection.deleteOne(  {
        _id:new ObjectId(product_id)
            } )
     
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);




