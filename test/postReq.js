const supertest = require('supertest');
const { expect } = require('chai');
const constants = require('../lib/constants');
let baseUrl = constants.baseUrl;
const request = supertest(baseUrl);
const endPoints = require('../helper/getReq/api_endpoint');
const validator = require('../helper/postReq/postReq_validator');
const dataTest = require('../lib/dataTest');

describe('POST /posts', () => {
    it('POST /posts', () => {
        let ReqBody = validPayload(dataTest.testData.testTile, dataTest.testData.testBody, dataTest.testData.userId);
        console.log('Request Payload: ', ReqBody );
        return request.post(endPoints.validEndpoint, ReqBody)
            .set('Accept' , 'application/json')
            .set('Content-Type' , 'application/json; charset=UTF-8')
            .send(ReqBody)
            .then((res) => {
                expect(res.statusCode).to.equals(201);
                console.log('Status Code = ', res.statusCode);
                console.log('Isi dari Body = ', res.body);
                global._id = res.body.id;
                if(res.status == 201){
                    console.log('Data Berhasil di tambahkan');
                    validator.responseBodyValidator(res);
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