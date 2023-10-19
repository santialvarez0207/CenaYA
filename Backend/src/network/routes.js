const express = require("express");

const router_restaurant = require("../components/restaurant/network_restaurant");
const router_user = require("../components/user/network_user");
/*
const router_dealer = require("../components/dealer/network_dealer");
const router_car = require("../components/car/network_car");
const router_customer = require("../components/consumer/network_consumer");
const router_upload = require("../components/upload/network_upload");
*/
const routes = function (server){
    server.use('/api/restaurant', router_restaurant)
    server.use('/api/user', router_user)
    //server.use('/api/dealer', router_dealer)
    //server.use('/api/car', router_car)
    //server.use('/api/customer', router_customer)
    //server.use('/api/image', router_upload)
}



module.exports = routes;