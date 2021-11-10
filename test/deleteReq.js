const supertest = require('supertest');
const { expect } = require('chai');
const constants = require('../lib/constants');
let baseUrl = constants.baseUrl;
const request = supertest(baseUrl);
const endPoints = require('../helper/putReq/api_endpoint');
const dataTest = require('../lib/dataTest');

describe('DELETE posts/1', () => {
    it('DELETE posts/1', () => {
        return request.delete(endPoints.endpoint)
            .set('Accept' , 'application/json')
            .set('Content-Type' , 'application/json')
            .then((res) => {
                expect(res.statusCode).to.equals(200);
                console.log('Status Code = ', res.statusCode);
                if(res.statusCode == 200){
                    console.log("Data berhasil di hapus")

                }else{
                    console.log(error);
                }
        });
    });
});