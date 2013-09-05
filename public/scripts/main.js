
require.config({
    baseUrl: 'public/scripts/libs',
    paths: {
        jquery: 'jquery-1.10.2',
        backbone: 'backbone-1.0',
        underscore: 'underscore-1.5.1',
        handlebars: 'handlebars-1.0.0',
        foundation: 'foundation/foundation'
    }
});

require(['jquery'], function($) {
	$('body').append('Reed is a bad ass!');
});