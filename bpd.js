exports.makePayment = function(ccnumber,merchantid, expDate, cvv, order, updateStatus) {
    var fs = require('fs');
    var https = require('https');
    var jsonData = {
        "Channel":"EC",
        "Store": merchantid,
        "CardNumber":ccnumber,
        "Expiration":expDate,
        "CVC":cvv,
        "PosInputMode":"E-Commerce",
        "TrxType":"Sale",
        "Amount":order.total,
        "Itbis":order.itbis_total,
        "CurrencyPosCode":"$",
        "Payments":"1",
        "Plan":"0",
        "AcquirerRefData":"1",
        "RRN":null,
        "CustomerServicePhone":"809-549-7981",
        "OrderNumber":order.reference,
        "ECommerceUrl":"www.google.com"
    }
    var options = {
        hostname: 'pruebas.azul.com.do',
        port: 443,
        path: '/webservices/JSON/Default.aspx',
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Auth1": auth1"Auth2": auth2},
        json:true,
        key: fs.readFileSync('certificates_prod/serverKey.pem'),
        cert: fs.readFileSync('certificates_prod/azulCert.pem')
    };
    var req = https.request(options, function(res) {
        res.on('data', function(data) {
            
        });
    });

    req.on('error', function(e) {
        console.log("ERROR:");
        console.log(e);
    });

    req.write();
    req.end();
}
