const express =require("express");
const app = express();
require("dotenv").config({ path : './.env'});
const cors =require("cors");
const bodyParser =require("body-parser");


const VehiculeRouter = require("./API/vehicule/vehicule.router");
const MessageRouter = require("./API/message/message.router");
const OrganizationRouter = require("./API/organization/organization.router");
const LocationRouter = require("./API/location/location.router");
const PisteRouter = require("./API/piste_cyclable/pisteCycl.router");
const login = require("./API/login/login.router");
const ClientRouter =require("./API/client/client.router");
const AgenceRouter =require("./API/agence/agence.router");
const EventRouter =require("./API/evenement/evenement.router");



//definition of a middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(express.json());





//definir les routes 
app.use("/vehicule",VehiculeRouter);
app.use("/message",MessageRouter);
app.use("/organization",OrganizationRouter);
app.use("/location",LocationRouter);
app.use("/piste",PisteRouter );
app.use("/login",login);
app.use("/client",ClientRouter);

app.use("/agence",AgenceRouter);
app.use("/event",EventRouter)

app.listen(3010,()=>{
    console.log("app running on port 3002...")
})