
const { MongoClient, ServerApiVersion } = require('mongodb');
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

        const myQuery = {
            title: 'ball'
        };
        const newValue = {
            $set: {
                description: 'New Value Description',
                newProperty: 'Bla bla bla'
            }
        }
       await collection.updateMany(myQuery, newValue)


    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);




