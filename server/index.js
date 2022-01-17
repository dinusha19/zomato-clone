// Importing Env variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config";

// microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
// Database connection
import ConnectDB from "./database/connection";


const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());
//zomato.use(passport.initialize());
//zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(3000, () =>
  ConnectDB()
    .then(() => console.log("Server is running, database connection success!😜"))
    .catch(() =>
      console.log("Server is running, but database connection failed ...")
    )
);