const supertest = require('supertest');
const { expect } = require('chai');
const constants = require('../lib/constants');
let baseUrl = constants.baseUrl;
const request = supertest(baseUrl);
const endPoints = require('../helper/getReq/api_endpoint');
const validator = require('../helper/getReq/getReq_validator');
const dataTest = require('../lib/dataTest');

describe('POST /posts', () => {
    it.only('POST /posts', () => {
        let ReqBody = validPayload(dataTest.testData.testTile, dataTest.testData.testBody, dataTest.testData.userId);
        console.log('Request Payload: ', ReqBody );
        return request.post(endPoints.validEndpoint, ReqBody).then((res) => {
            expect(res.statusCode).to.equal(201);
            console.log('Status Code = ', res.statusCode);
            console.log('Isi dari Body = ', res.body);
            global._id = res.body.id;
            if(res.status == 201){
                console.log('Data Berhasil di tambahkan');
            }else{
                console.log(error);
            }
        });
    });
});

var validPayload = function (title, body, userId){
    return{
        "title" : dataTest.testData.testTile,
        "body" : dataTest.testData.testBody,
        "userId" : dataTest.testData.userId
    }
}