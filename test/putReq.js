const supertest = require('supertest');
const { expect } = require('chai');
const constants = require('../lib/constants');
let baseUrl = constants.baseUrl;
const request = supertest(baseUrl);
const endPoints = require('../helper/putReq/api_endpoint');
const validator = require('../helper/putReq/putReq_validator');
const dataTest = require('../lib/dataTest');

describe('PUT posts/1', () => {
    it('PUT posts/1', () => {
        let ReqBody = validPayload(dataTest.testData.id, dataTest.testData.testTile, dataTest.testData.testBody,dataTest.testData.userId);
        console.log('Request Payload: ', ReqBody );
        return request.put(endPoints.endpoint, ReqBody)
            .set('Accept' , 'application/json')
            .set('Content-Type' , 'application/json; charset=UTF-8')
            .send(ReqBody)
            .then((res) => {
                console.log('Response Body is= ', res.body);
                expect(res.statusCode).to.equals(200);
                console.log('Status Code = ', res.statusCode);
                console.log('Isi dari Body = ', res.body);
                if(res.statusCode == 200){
                    console.log("Data berhasil di update!")
                    validator.responseBodyValidator(res);

                }else{
                    console.log(error);
                }
        });
    });
});

var validPayload = function (id, title, body, userId){
    return{
        "id" : dataTest.testData.id,
        "title" : dataTest.testData.testTile,
        "body" : dataTest.testData.testBody,
        "userId" : dataTest.testData.userId
    }
}
