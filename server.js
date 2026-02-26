const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
// app.use(cors());
app.use(cors({
    origin: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "adminpanel"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});


// GET Users
app.get("/api/users", async (req, res) => {
    try {
        const response = await axios.get(
            "https://postkiyaapp.shivanshastrology.in/newproject/public/api/users"
        );

        res.status(response.status).json(response.data);

    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: "Error fetching users",
            error: error.response?.data || error.message
        });
    }
});


// POST Register
const axios = require("axios");

app.post("/api/register", async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            mobile,
            email,
            password,
            current_location,
            native_location
        } = req.body;

        const response = await axios.post(
            "https://postkiyaapp.shivanshastrology.in/newproject/public/api/register",
            {
                first_name: first_name,
                last_name: last_name,
                mobile: mobile,
                email: email,
                password: password,
                current_location: current_location,
                native_location: native_location
            }
        );

        res.status(response.status).json(response.data);

    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: "Error calling Laravel API",
            error: error.response?.data || error.message
        });
    }
});

app.post("/api/login", async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const response = await axios.post(
            "https://postkiyaapp.shivanshastrology.in/newproject/public/api/login",
            {
                email: email,
                password: password
            }
        );

        res.status(response.status).json(response.data);

    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: "Error calling Laravel API",
            error: error.response?.data || error.message
        });
    }
});
app.listen(5000, "0.0.0.0", () => {
    console.log("Server running");

});
