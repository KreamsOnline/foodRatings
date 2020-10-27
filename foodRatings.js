const fs = require('fs');
const xmlParser = require("xml2json")




fs.readFile( "./FHRS433en-GB.xml", function(err, data) {
    const xmlObj = xmlParser.toJson(data, {reversible: true, object: true})
    const estDetail = xmlObj["FHRSEstablishment"]['EstablishmentCollection']['EstablishmentDetail']
    

    for (let i=0;i < estDetail.length;i++) {
        let latitude = estDetail[i]["Geocode"]["Latitude"]
        let longitude = estDetail[i]["Geocode"]["Longitude"]
        if ((typeof latitude !== "undefined") && (typeof longitude !== "undefined")) {
                if ((latitude['$t'] >= 52.57263290000000 && latitude['$t'] <= 52.58761830000000) && (longitude['$t'] >= -1.99802730000000 && longitude['$t'] <= -1.97804030000000)) {
                    console.log(estDetail[i]['BusinessName']['$t'])
                    
                }
            
            
        }

        
        
        
    }
    // console.log(estDetail[25]['SchemeType']['$t'])
    
  })

// 52.57351900000000,   -1.99718100000000 yaadgaar
// 52.58689600000000,   -1.98859000000000
// 52.5771926,          -1.9780403, cake box
// 52.5824835,          -1.981996 pund bakery
// 52.5876183,          -1.9888673 nandos



















// -- - display all results - --  console.log(estDetail.EstablishmentDetail[i].Geocode.Longitude)
// objProps(estDetail[27]['Geocode']['Longitude']);

/* fs.readFile('FHRS433en-GB.xml', (err, data) => {
    parser.parseString(data, (err, result) => {
        console.log(util.inspect(result, false, null, true));
    });
});
*/
/* fs.readFile('FHRS433en-GB.xml', (err, data) => {
        if (err) throw new Error(err);

        const parser = new xml2js.Parser();

        parser.parseStringPromise(data)
            .then(function(res) {
                console.log(res);
                console.log(res.EstablishmentCollection.BusinessName);
                console.log(res.EstablishmentCollection.EstablishmentDetail.BusinessName);
            })
            .catch(function (err) {
                console.error(err);
            })
}); */


