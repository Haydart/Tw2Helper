/**
 * Tribal Wars 2 - Socket listeners/emiters
 */
const socketService = injector.get('socketService');

// List of event listeners
const eventTypeProvider = injector.get('eventTypeProvider');
// List of routes (emit requests)
const routeProvider = injector.get('routeProvider');

// Game's global scope
const $rootScope = angular.element(document).scope();

/*
 * Setting a listener
 */

$rootScope.$on(eventTypeProvider.COMMAND_SENT, function listener(event, command) {
    console.log(command)
});

/*
 * Emiting a request
 */

socketService.emit(routeProvider.GET_PRESETS, {
    // data structure specified in routeProvider.GET_PRESETS
}, function callback(presets) {
    console.log(presets)
});

/*
 * Triggering a listener
 */

$rootScope.$broadcast(eventTypeProvider.MESSAGE_SUCCESS, {
    message: 'Custom Message'
});