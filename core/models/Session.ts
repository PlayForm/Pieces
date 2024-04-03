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
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';

/**
 * This is a specific model that will let us know at what time this user was using the application.
 * @export
 * @interface Session
 */
export interface Session {
    /**
     * The UUID of the current Session
     * @type {string}
     * @memberof Session
     */
    id: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Session
     */
    opened: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Session
     */
    closed?: GroupedTimestamp;
}

/**
 * Check if a given object implements the Session interface.
 */
export function instanceOfSession(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('opened' in value)) return false;
    return true;
}

export function SessionFromJSON(json: any): Session {
    return SessionFromJSONTyped(json, false);
}

export function SessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Session {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'opened': GroupedTimestampFromJSON(json['opened']),
        'closed': json['closed'] == null ? undefined : GroupedTimestampFromJSON(json['closed']),
    };
}

export function SessionToJSON(value?: Session | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'opened': GroupedTimestampToJSON(value['opened']),
        'closed': GroupedTimestampToJSON(value['closed']),
    };
}

