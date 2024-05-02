
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

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const Products = [
        {
            "title": "pen",
            "description": "Big blue pen",
            "tags": ["circle", "toys", "kids"],
            "price": 550,
            "age": 41
        },
        {
            "title": "car",
            "description": "Big blue car",
            "tags": ["circle", "toys", "kids"],
            "price": 50,
            "age": 32
        },{
            "title": "house",
            "description": "Big blue house",
            "tags": ["circle", "toys", "kids"],
            "price": 200,
            "age":22
        }

    ]

    
    

    const result = await collection.insertMany(Products);
    console.log(result)
   const _Products = await collection.find().toArray();
    console.log(_Products);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


  

 