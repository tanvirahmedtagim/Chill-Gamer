const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ez7m5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const reviewCollection = client.db("reviewDB").collection("review");
    const userCollection = client.db("reviewDB").collection("users");
    const watchListCollection = client.db("reviewDB").collection("watchlist");

    app.get("/reviews", async (req, res) => {
      const { genre, sortField, sortOrder } = req.query;

      const filterOptions = {};
      if (genre && genre !== "All") {
        filterOptions.genre = genre;
      }
      const sortOptions = {};
      if (sortField && sortOrder) {
        sortOptions[sortField] = sortOrder === "asc" ? 1 : -1;
      }
      const cursor = reviewCollection.find(filterOptions);
      if (Object.keys(sortOptions).length > 0) {
        cursor.sort(sortOptions);
      }
      const result = await cursor.toArray();
      res.send(result);
    });

    // Add a new review
    app.post("/reviews", async (req, res) => {
      const newReview = req.body;
      const result = await reviewCollection.insertOne(newReview);
      res.send(result);
    });
    //Home page reviews
    app.get("/home-reviews", async (req, res) => {
      const highestRated = await reviewCollection
        .find()
        .sort({ rating: -1 })
        .toArray();

      const lowestRated = await reviewCollection
        .find()
        .sort({ rating: 1 })
        .limit(4)
        .toArray();

      res.send({
        highestRated,
        lowestRated,
      });
    });

    // To get all reviews by a specific user myReviews
    app.get("/myReviews", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = reviewCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    //Delete myreviews
    app.delete("/myReviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewCollection.deleteOne(query);
      res.send(result);
    });
    //Update myreviews
    app.patch("/myReviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateReview = req.body;
      const review = {
        $set: {
          gameCover: updateReview.gameCover,
          gameTitle: updateReview.gameTitle,
          description: updateReview.description,
          rating: updateReview.rating,
          publishingYear: updateReview.publishingYear,
          genre: updateReview.genre,
          email: updateReview.email,
          name: updateReview.name,
        },
      };

      const result = await reviewCollection.updateOne(query, review, options);
      res.send(result);
    });

    //for review details
    app.get("/review/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewCollection.findOne(query);
      res.send(result);
    });
    //For myreviews

    // User Related api
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // Watchlist API
    // Add to watchlist
    app.post("/watchlist", async (req, res) => {
      const newWatchlistItem = req.body;
      const result = await watchListCollection.insertOne(newWatchlistItem);
      res.send(result);
    });

    // Get user's watchlist
    app.get("/watchlist", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const cursor = watchListCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Chill Gamer Server is Running");
});
app.listen(port, () => {
  console.log(`Chill Gamer Server Is Running On port: ${port}`);
});
//
//
