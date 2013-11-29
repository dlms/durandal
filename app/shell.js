define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: ['', 'home'],                  moduleId: 'login/index',            title: dict.get('login'),   nav: 1 },
                { route: 'hello',                       moduleId: 'hello/index',            title: 'Hello World2',  nav: 2 },
                { route: 'view-composition',            moduleId: 'viewComposition/index',  title: 'View Composition',  nav: 3 },
                { route: 'modal',                       moduleId: 'modal/index',            title: 'Modal Dialogs',     nav: 4 },
                { route: 'event-aggregator',            moduleId: 'eventAggregator/index',  title: 'Events',            nav: 5 },
                { route: 'widgets',                     moduleId: 'widgets/index',          title: 'Widgets',           nav: true },
                { route: 'master-detail',               moduleId: 'masterDetail/index',     title: 'Master Detail',     nav: true },
                { route: 'knockout-samples*details',    moduleId: 'ko/index',               title: 'Knockout Samples',  nav: true, hash: '#knockout-samples' }
            ]).buildNavigationModel()
              .mapUnknownRoutes('login/index', 'not-found')
              .activate();
        }
    };
});