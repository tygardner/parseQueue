var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': 'iJjTOoUYa63N1CLVHPtBVxHgDCZyLVDzbza0jNi8', 'X-Parse-REST-API-Key': '00TsTgCzwyePSC8I65gbgTDJUV68kkc1g22Hp9Ad'};
            return config;
        }
    };
});