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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * A user that will be passed along with each analytics event
 * @export
 * @interface TrackedUserProfile
 */
export interface TrackedUserProfile {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedUserProfile
     */
    schema?: EmbeddedModelSchema;
    /**
     * The ID of the user that you are tracking.
     * @type {string}
     * @memberof TrackedUserProfile
     */
    id: string;
    /**
     * This is a username that is attempted to be assigned but is "Anonymous User" by default
     * @type {string}
     * @memberof TrackedUserProfile
     */
    username: string;
    /**
     * The user's email if we have it.
     * @type {string}
     * @memberof TrackedUserProfile
     */
    email?: string;
    /**
     * At what level is this user being tracked.
     * @type {string}
     * @memberof TrackedUserProfile
     */
    granularity: TrackedUserProfileGranularityEnum;
}


/**
 * @export
 */
export const TrackedUserProfileGranularityEnum = {
    Device: 'DEVICE',
    Account: 'ACCOUNT',
    Anonymous: 'ANONYMOUS'
} as const;
export type TrackedUserProfileGranularityEnum = typeof TrackedUserProfileGranularityEnum[keyof typeof TrackedUserProfileGranularityEnum];


/**
 * Check if a given object implements the TrackedUserProfile interface.
 */
export function instanceOfTrackedUserProfile(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('username' in value)) return false;
    if (!('granularity' in value)) return false;
    return true;
}

export function TrackedUserProfileFromJSON(json: any): TrackedUserProfile {
    return TrackedUserProfileFromJSONTyped(json, false);
}

export function TrackedUserProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedUserProfile {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'username': json['username'],
        'email': json['email'] == null ? undefined : json['email'],
        'granularity': json['granularity'],
    };
}

export function TrackedUserProfileToJSON(value?: TrackedUserProfile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'username': value['username'],
        'email': value['email'],
        'granularity': value['granularity'],
    };
}

