import express from "express";
import { createApi } from "unsplash-js";
import fetch from "node-fetch";
import cors from "cors";

// Set fetch globally for unsplash.js
global.fetch = fetch;

const app = express();

app.use(express.json());

// Allow the client to hit the server
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Set response headers for cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Create the api
const api = createApi({
  accessKey: "3Hd9C7ld2VPl7kmLbnh-EicBpcMhigx6rm7Gr0Wwmhc",
  fetch,
});

// Fetch all photos for page load
app.get("/api/all-photos", async (req, res) => {
  //   const allPhotos = await api.photos.list({ page: 1, perPage: 100 });
  const {
    response: { results },
  } = await api.photos.list({ page: 1, perPage: 100 });
  res.send({ results });
});

app.post("/api/query-photos", async (req, res) => {
  const {
    response: { results },
  } = await api.search.getPhotos({
    query: req.body.search,
    page: 1,
    perPage: 100,
  });

  res.send({ results });
});

// Start the server
app.listen(6069);
