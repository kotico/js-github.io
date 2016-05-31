define(
	'module1',
	['jquery'],
	function() {

		var abc = 123;

		return {
          sayHello: function() {
          	console.log('Hello world');
          }
		};
	  }
	);