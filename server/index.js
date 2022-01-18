// Importing Env variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Reviews from "./API/Reviews";
import User from "./API/User";

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
routeConfig(passport);

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/reviews",Reviews);
zomato.use("/user",User);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(3000, () =>
  ConnectDB()
    .then(() => console.log("Server is running, database connection success!😜"))
    .catch(() =>
      console.log("Server is running, but database connection failed ...")
    )
);