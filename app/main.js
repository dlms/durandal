/*
 * 
 * ENVIRONMENT:
 * - development
 * - testing
 * - production
 * 
 */
var ENVIRONMENT = 'development';
var software_version = '0.0.1';
var default_language = 'hu_HU';

requirejs.config({
    urlArgs: (ENVIRONMENT == 'development' ? "bust=" +  (new Date()).getTime() : "version="+software_version), 
    paths: {
        'dictionary': '../lib/language/'+default_language+'/dictionary',
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-2.3.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-2.0.3.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator','jquery', 'bootstrap', 'dictionary'],  function (system, app, viewLocator, $, b) {
    //>>excludeStart("build", true);
    system.debug(false);
    //>>excludeEnd("build");
    
    app.title = dict.get('title');

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router:true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    });

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application.
        app.setRoot('shell');
    });
});