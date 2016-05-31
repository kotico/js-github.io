requirejs.config({
   paths: {
   	'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
   },
   shim: {
   	'jquery': {
   		exports: 'jQuery'
   	}
   }
});


require(
	[
       'module1',
       'modul2',
       'jquery'
	],
	function(module1, modul2, $) {
		console.log('$', $);
		console.log('module1', module1);
		console.log('module2', modul2);
		module1.sayHello();
		modul2.someMethod();

	}

	);