import lookupController from '../controller/lookupController';

module.exports = function(app)
{
   
    app.route('/api/lookup/list').get(lookupController.listLookup);

  
    
}