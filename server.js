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
            "https://postkiyaapp.shivanshastrology.in/newproject/api/auth/signup.php",
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
            "https://postkiyaapp.shivanshastrology.in/newproject/api/auth/login.php",
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

app.post("/api/edit-profile", async (req, res) => {
    try {
        const {
            id,
            first_name,
            last_name,
            mobile,
            email,
            profile_image
        } = req.body;

        const response = await axios.post(
            "https://postkiyaapp.shivanshastrology.in/newproject/api/auth/edit_profile.php",
            {
                id: id,
                first_name: first_name,
                last_name: last_name,
                mobile: mobile,
                email: email,
                profile_image: profile_image
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

// GET Categories
app.get("/api/categories", async (req, res) => {
    try {
        const response = await axios.get(
            "https://postkiyaapp.shivanshastrology.in/newproject/api/categories/list.php"
        );

        res.status(response.status).json(response.data);

    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: "Error fetching users",
            error: error.response?.data || error.message
        });
    }
});

// GET Categories
app.get("/api/sub-categories", async (req, res) => {
    try {
        const response = await axios.get(
            "https://postkiyaapp.shivanshastrology.in/newproject/api/subcategories/list.php"
        );

        res.status(response.status).json(response.data);

    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: "Error fetching users",
            error: error.response?.data || error.message
        });
    }
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Server running");

});













