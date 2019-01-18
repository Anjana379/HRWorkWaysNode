'use strict';
import * as f from '../../constants';
import {
    saveVSData,
    visitorSearch,
    deleteVSDataByQuery,
    updateVSData
} from '../../core/core-queryExecute'
import {
    createVSQuery
} from '../../core/core-querybuilder'


exports.createVisitor = function (req, res) {
    checkValidRequest(req);
    var clause = req.body;
    if (clause.length > 0) {
        clause.forEach(function (req) {
            saveVSData(req, f.VISITOR_INDEX, f.VISITOR_TYPE, (response) => {
                res.json(response);
            });
        });
    }
}

function checkValidRequest(req) {
    if (!req.body) return res.sendStatus(400);
}

exports.listVisitor = function (req, res) {
    let query = {
        "query": {
            "match_all": {}
        },
        "sort": [
            {
            "date": {
                "order": "desc"
            }
            }
        ]
        ,
        "size": f.MAX_RESULT
    };

    visitorSearch(f.VISITOR_INDEX, f.VISITOR_TYPE, f.MAX_RESULT,
        JSON.stringify(query), (response) => {
            res.json(response);
        });
}


exports.searchVisitor = function (req, res) {
    checkValidRequest(req);
    let retQuery = createVSQuery(req);

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
        "size": f.MAX_RESULT
    };

    console.log('query:' + JSON.stringify(query));

    visitorSearch(f.VISITOR_INDEX, f.VISITOR_TYPE, f.MAX_RESULT,
        JSON.stringify(query), (response) => {
            res.json(response);
        });
}


exports.deleteVisitor = function (req, res) {
    let retQuery = createVSQuery(req);

    let query = {
        "query": {
            "constant_score": {
                "filter": {
                    "bool": {
                        "must": retQuery
                    }
                }
            }
        }
    };

    console.log('query:' + JSON.stringify(query));

    visitorSearch(f.VISITOR_INDEX, f.VISITOR_TYPE, f.MAX_RESULT,
        JSON.stringify(query), (response) => {
          console.log('response' + JSON.stringify(response));
            if(response && response.hits && response.hits.hits[0]){
            
            deleteVSDataByQuery(f.VISITOR_INDEX, f.VISITOR_TYPE, response.hits.hits[0]._id, (resp) => {
                res.json(resp);
            });
        
        }

        });
}

exports.updateVisitor = function (req, res) {
    checkValidRequest(req);
    let retQuery = createVSQuery(req);

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
        "size": f.MAX_RESULT
    };

    console.log('query:' + JSON.stringify(query));

    visitorSearch(f.VISITOR_INDEX, f.VISITOR_TYPE, f.MAX_RESULT,
        JSON.stringify(query), (response) => {
            var clause = req.body;
            if (clause.length > 0) {
                clause.forEach(function (req) {
                    if(response && response.hits && response.hits.hits[0]){
                    updateVSData(req, f.VISITOR_INDEX, f.VISITOR_TYPE,response.hits.hits[0]._id, (response) => {
                        res.json(response);
                    });
                }
                });
            
            }
        
        });
      
        
}