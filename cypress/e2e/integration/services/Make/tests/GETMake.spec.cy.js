import * as GETrequest from '../requests/Requests.request.js';

/// <reference types="cypress" />

const MAKEpayload = require('../payloads/MAKEpayload.json')
const MODELpayload = require('../payloads/MODELpayload.json')
const VERSIONSpayload = require('../payloads/VERSIONpayload.json')
const VEHICLESpayload = require('../payloads/VEHICLESpayload.json')

describe('Validar APIs ', () => {
    it('API Make', () => {
        GETrequest.listarInfos('MAKE').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].ID).to.eq(MAKEpayload.ID_1);
            expect(response.body[0].Name).to.eq(MAKEpayload.Name_1);

            expect(response.body[1].ID).to.eq(MAKEpayload.ID_2);
            expect(response.body[1].Name).to.eq(MAKEpayload.Name_2);

            expect(response.body[2].ID).to.eq(MAKEpayload.ID_3);
            expect(response.body[2].Name).to.eq(MAKEpayload.Name_3);

        })
    });

    it('API Models', () => {
        GETrequest.listarInfos('Model?MakeID=1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].MakeID).to.eq(MODELpayload.MakeID);
            expect(response.body[0].ID).to.eq(MODELpayload.ID_1);
            expect(response.body[0].Name).to.eq(MODELpayload.Name_1);

            expect(response.body[1].MakeID).to.eq(MODELpayload.MakeID);
            expect(response.body[1].ID).to.eq(MODELpayload.ID_2);
            expect(response.body[1].Name).to.eq(MODELpayload.Name_2);

            expect(response.body[2].MakeID).to.eq(MODELpayload.MakeID);
            expect(response.body[2].ID).to.eq(MODELpayload.ID_3);
            expect(response.body[2].Name).to.eq(MODELpayload.Name_3);

        })
    });

    it('API Versions', () => {
        GETrequest.listarInfos('Version?ModelID=1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].ModelID).to.eq(VERSIONSpayload.ModelID);
            expect(response.body[0].ID).to.eq(VERSIONSpayload.ID_1);
            expect(response.body[0].Name).to.eq(VERSIONSpayload.Name_1);

            expect(response.body[1].ModelID).to.eq(VERSIONSpayload.ModelID);
            expect(response.body[1].ID).to.eq(VERSIONSpayload.ID_2);
            expect(response.body[1].Name).to.eq(VERSIONSpayload.Name_2);

            expect(response.body[2].ModelID).to.eq(VERSIONSpayload.ModelID);
            expect(response.body[2].ID).to.eq(VERSIONSpayload.ID_3);
            expect(response.body[2].Name).to.eq(VERSIONSpayload.Name_3);

            expect(response.body[3].ModelID).to.eq(VERSIONSpayload.ModelID);
            expect(response.body[3].ID).to.eq(VERSIONSpayload.ID_4);
            expect(response.body[3].Name).to.eq(VERSIONSpayload.Name_4);

        })
    });

    it('API Vehicles', () => {
        GETrequest.listarInfos('Vehicles?Page=1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].ID).to.eq(VEHICLESpayload.ID_1);
            expect(response.body[0].Make).to.eq(VEHICLESpayload.Make_1);
            expect(response.body[0].Model).to.eq(VEHICLESpayload.Model_1);
            expect(response.body[0].Version).to.eq(VEHICLESpayload.Version_1);
            expect(response.body[0].YearModel).to.eq(VEHICLESpayload.YearModel_1);
            expect(response.body[0].YearFab).to.eq(VEHICLESpayload.YearFab_1);
        })
    });
});

