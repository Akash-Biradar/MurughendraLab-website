import express from "express";
const app = express();
import dotenv from "dotenv"
dotenv.config();

const port = process.env.PORT || 5001

app.use(express.json());
app.get('/', (req, res) => {
    res.send('server running successfully');
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)  ;
})