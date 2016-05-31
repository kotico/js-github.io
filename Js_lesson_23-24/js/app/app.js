requirejs.config({
   paths: {
   	'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery'
   },
   shim: {
   	'jquery': {
   		exports: 'jQuery'
   	}
   }
});


require(
	[
       'jquery',
       'tmpl',
       'model',
       'view',
       'controller'
	],
	function($, tmpl, model, view, controller) {
		var firstToDoList = ['name','surname', 'date of bth'];
                var model = new model.model(firstToDoList);
                var view = new view.view(model);
                var controller = new controller.controller(model, view);
        }
    );