'use strict';
import * as f from '../../constants';
import {
    saveLSData,
    loginSearch

} from '../../core/core-queryExecute';
import {
    createLSQuery
} from '../../core/core-querybuilder';

exports.createUser = function (req, res) {
    checkValidRequest(req);
    var clause = req.body;
    if (clause){
        saveLSData(clause, f.LOGIN_INDEX, f.LOGIN_TYPE, (response) => {
           res.json(response);
        });
    }
}

function checkValidRequest(req) {
    if (!req.body) return res.sendStatus(400);
}

exports.listUser = function (req, res) {
    let query = {
        "query": {
            "match_all": {}
        },
        "size": f.MAX_RESULTS
    };

    loginSearch(f.LOGIN_INDEX, f.LOGIN_TYPE,
        JSON.stringify(query), (response) => {
            res.json(response);
        });
}

exports.searchUser = function (req, res) {
    checkValidRequest(req);
    console.log('login'+req);
    let retQuery = createLSQuery(req);

    let query = {
        "query": {
            "constant_score": {
                "filter": {
                    "bool": {
                        "must": retQuery
                    }
                }
            }
        },
        "size": f.MAX_RESULTS
    };

    console.log('query:' + JSON.stringify(query));

    loginSearch(f.LOGIN_INDEX, f.LOGIN_TYPE,
        JSON.stringify(query), (response) => {
            res.json(response);
        });
}