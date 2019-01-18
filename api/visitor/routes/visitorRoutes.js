import visitorController from '../controller/visitorController';

module.exports = function(app)
{
    app.route('/api/visitor/create').post(visitorController.createVisitor);

    app.route('/api/visitor/list').get(visitorController.listVisitor);

    app.route('/api/visitor/search').post(visitorController.searchVisitor);
    
    app.route('/api/visitor/delete/:id').get(visitorController.deleteVisitor);

    app.route('/api/visitor/update').post(visitorController.updateVisitor);
    
}
