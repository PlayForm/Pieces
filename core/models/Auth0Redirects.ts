/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * The redirect URI for you Auth 0 Service
 * @export
 * @interface Auth0Redirects
 */
export interface Auth0Redirects {
    /**
     * Where the Auth0 redirects after the user is authorized
     * @type {string}
     * @memberof Auth0Redirects
     */
    authenticated?: string;
    /**
     * The redirect where a user returns once unauthenticated
     * @type {string}
     * @memberof Auth0Redirects
     */
    unauthenticated?: string;
}

/**
 * Check if a given object implements the Auth0Redirects interface.
 */
export function instanceOfAuth0Redirects(value: object): boolean {
    return true;
}

export function Auth0RedirectsFromJSON(json: any): Auth0Redirects {
    return Auth0RedirectsFromJSONTyped(json, false);
}

export function Auth0RedirectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Auth0Redirects {
    if (json == null) {
        return json;
    }
    return {
        
        'authenticated': json['authenticated'] == null ? undefined : json['authenticated'],
        'unauthenticated': json['unauthenticated'] == null ? undefined : json['unauthenticated'],
    };
}

export function Auth0RedirectsToJSON(value?: Auth0Redirects | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'authenticated': value['authenticated'],
        'unauthenticated': value['unauthenticated'],
    };
}

