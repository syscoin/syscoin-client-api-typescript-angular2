"use strict";
/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var encoder_1 = require("../encoder");
require("../rxjs-operators");
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var AliasesService = /** @class */ (function () {
    function AliasesService(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://localhost:8001';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    AliasesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * add a redeem script to alias
     * @param request
     */
    AliasesService.prototype.aliasaddscript = function (request, extraHttpRequestParams) {
        return this.aliasaddscriptWithHttpInfo(request, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Returns the total amount received by the given alias in transactions with at least minconf confirmations.
     * @param alias The syscoin alias for transactions
     */
    AliasesService.prototype.aliasbalance = function (alias, extraHttpRequestParams) {
        return this.aliasbalanceWithHttpInfo(alias, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Clear your whitelist(controls who can resell).
     * @param request
     */
    AliasesService.prototype.aliasclearwhitelist = function (request, extraHttpRequestParams) {
        return this.aliasclearwhitelistWithHttpInfo(request, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Show values of an alias.
     * @param aliasname
     */
    AliasesService.prototype.aliasinfo = function (aliasname, extraHttpRequestParams) {
        return this.aliasinfoWithHttpInfo(aliasname, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    AliasesService.prototype.aliasnew = function (request, extraHttpRequestParams) {
        return this.aliasnewWithHttpInfo(request, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     */
    AliasesService.prototype.aliaspay = function (request, extraHttpRequestParams) {
        return this.aliaspayWithHttpInfo(request, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    AliasesService.prototype.aliasupdate = function (request, extraHttpRequestParams) {
        return this.aliasupdateWithHttpInfo(request, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
     * @param request
     */
    AliasesService.prototype.aliasupdatewhitelist = function (request, extraHttpRequestParams) {
        return this.aliasupdatewhitelistWithHttpInfo(request, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * List all affiliates for this alias.
     * @param aliasname
     */
    AliasesService.prototype.aliaswhitelist = function (aliasname, extraHttpRequestParams) {
        return this.aliaswhitelistWithHttpInfo(aliasname, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * fund an alias creation (possibly other operations in the future)
     * @param request
     */
    AliasesService.prototype.syscointxfund = function (request, extraHttpRequestParams) {
        return this.syscointxfundWithHttpInfo(request, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * add a redeem script to alias
     * @param request
     
     */
    AliasesService.prototype.aliasaddscriptWithHttpInfo = function (request, extraHttpRequestParams) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling aliasaddscript.');
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request),
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/aliasaddscript", requestOptions);
    };
    /**
     *
     * Returns the total amount received by the given alias in transactions with at least minconf confirmations.
     * @param alias The syscoin alias for transactions
     
     */
    AliasesService.prototype.aliasbalanceWithHttpInfo = function (alias, extraHttpRequestParams) {
        if (alias === null || alias === undefined) {
            throw new Error('Required parameter alias was null or undefined when calling aliasbalance.');
        }
        var queryParameters = new http_1.URLSearchParams('', new encoder_1.CustomQueryEncoderHelper());
        if (alias !== undefined) {
            queryParameters.set('alias', alias);
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/aliasbalance", requestOptions);
    };
    /**
     *
     * Clear your whitelist(controls who can resell).
     * @param request
     
     */
    AliasesService.prototype.aliasclearwhitelistWithHttpInfo = function (request, extraHttpRequestParams) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling aliasclearwhitelist.');
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request),
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/aliasclearwhitelist", requestOptions);
    };
    /**
     *
     * Show values of an alias.
     * @param aliasname
     
     */
    AliasesService.prototype.aliasinfoWithHttpInfo = function (aliasname, extraHttpRequestParams) {
        if (aliasname === null || aliasname === undefined) {
            throw new Error('Required parameter aliasname was null or undefined when calling aliasinfo.');
        }
        var queryParameters = new http_1.URLSearchParams('', new encoder_1.CustomQueryEncoderHelper());
        if (aliasname !== undefined) {
            queryParameters.set('aliasname', aliasname);
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/aliasinfo", requestOptions);
    };
    /**
     *
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     
     */
    AliasesService.prototype.aliasnewWithHttpInfo = function (request, extraHttpRequestParams) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling aliasnew.');
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request),
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/aliasnew", requestOptions);
    };
    /**
     *
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     
     */
    AliasesService.prototype.aliaspayWithHttpInfo = function (request, extraHttpRequestParams) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling aliaspay.');
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request),
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/aliaspay", requestOptions);
    };
    /**
     *
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     
     */
    AliasesService.prototype.aliasupdateWithHttpInfo = function (request, extraHttpRequestParams) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling aliasupdate.');
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request),
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/aliasupdate", requestOptions);
    };
    /**
     *
     * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
     * @param request
     
     */
    AliasesService.prototype.aliasupdatewhitelistWithHttpInfo = function (request, extraHttpRequestParams) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling aliasupdatewhitelist.');
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request),
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/aliasupdatewhitelist", requestOptions);
    };
    /**
     *
     * List all affiliates for this alias.
     * @param aliasname
     
     */
    AliasesService.prototype.aliaswhitelistWithHttpInfo = function (aliasname, extraHttpRequestParams) {
        if (aliasname === null || aliasname === undefined) {
            throw new Error('Required parameter aliasname was null or undefined when calling aliaswhitelist.');
        }
        var queryParameters = new http_1.URLSearchParams('', new encoder_1.CustomQueryEncoderHelper());
        if (aliasname !== undefined) {
            queryParameters.set('aliasname', aliasname);
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/aliaswhitelist", requestOptions);
    };
    /**
     *
     * fund an alias creation (possibly other operations in the future)
     * @param request
     
     */
    AliasesService.prototype.syscointxfundWithHttpInfo = function (request, extraHttpRequestParams) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling syscointxfund.');
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request),
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/syscointxfund", requestOptions);
    };
    AliasesService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional()),
        __metadata("design:paramtypes", [http_1.Http, String, configuration_1.Configuration])
    ], AliasesService);
    return AliasesService;
}());
exports.AliasesService = AliasesService;
//# sourceMappingURL=aliases.service.js.map