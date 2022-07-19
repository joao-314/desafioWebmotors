/// <reference types="cypress"/>

const payloads = require('../payloads/BASEpayload.json')


function listarInfos(endpoint) {
    return cy.request({
        method: 'GET',
        url: payloads.baseUrl+endpoint,
        failOnStatusCode: false,
    })   
}

export {listarInfos};
