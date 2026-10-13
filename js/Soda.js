var phong330Data = JSON.parse($response.body);

phong330Data.result = {
    "products" : [
        {
            "managed" : false,
            "status" : "CANCELLED",
            "startDate" : 1673222400000,
            "productId" : "com.snowcorp.soda.subscribe.oneyear",
            "expireDate" : 32662137600000
        }
    ],
    "activated" : true
};

$done({body : JSON.stringify(phong330Data)});