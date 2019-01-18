'use strict';
import * as f from '../../constants';
import {
    executeSearch
} from '../../core/core-queryExecute'





function checkValidRequest(req) {
    if (!req.body) return res.sendStatus(400);
}

exports.listLookup = function (req, res) {
    let query = {
        "query": {
            "match_all": {}
        },
        "size": f.MAX_RES
    };

   let type = '';
    if (req.query.type) {
        type = req.query.type.toUpperCase();
        executeSearch(f.LOOKUP_INDEX, [f.lookupTypeMapping.get(type)], f.MAX_RES,
        JSON.stringify(query), (response) => {
           res.json(response);
        });
    }
    else{
        res.send("Please specify type");
    }
   
}
