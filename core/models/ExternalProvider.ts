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
import type { ExternalProviderProfileData } from './ExternalProviderProfileData';
import {
    ExternalProviderProfileDataFromJSON,
    ExternalProviderProfileDataFromJSONTyped,
    ExternalProviderProfileDataToJSON,
} from './ExternalProviderProfileData';
import type { ExternalProviderTypeEnum } from './ExternalProviderTypeEnum';
import {
    ExternalProviderTypeEnumFromJSON,
    ExternalProviderTypeEnumFromJSONTyped,
    ExternalProviderTypeEnumToJSON,
} from './ExternalProviderTypeEnum';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';

/**
 * I know that profileData and user_id have differeing casing but they are done because they map to Auth0's projeecties.
 * @export
 * @interface ExternalProvider
 */
export interface ExternalProvider {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ExternalProvider
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ExternalProviderTypeEnum}
     * @memberof ExternalProvider
     */
    type: ExternalProviderTypeEnum;
    /**
     * This is the user_id within the provider.
     * @type {string}
     * @memberof ExternalProvider
     */
    userId: string;
    /**
     * This is optional here, but will be present for BB, Github, and google.
     * @type {string}
     * @memberof ExternalProvider
     */
    accessToken?: string;
    /**
     * Some providers have an expiration on their access token. IE BB, Google, NOT Github.
     * @type {number}
     * @memberof ExternalProvider
     */
    expiresIn?: number;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof ExternalProvider
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof ExternalProvider
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {ExternalProviderProfileData}
     * @memberof ExternalProvider
     */
    profileData?: ExternalProviderProfileData;
    /**
     * This is an optional field that will be provided onentreprise connections. ie is type == waad then connection might be PiecesApp. However is other cases,you my find your provider and connection is the exact same string. To decifer between the two, you can use the isSocial bool.
     * @type {string}
     * @memberof ExternalProvider
     */
    connection?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExternalProvider
     */
    isSocial?: boolean;
}

/**
 * Check if a given object implements the ExternalProvider interface.
 */
export function instanceOfExternalProvider(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('userId' in value)) return false;
    if (!('created' in value)) return false;
    if (!('updated' in value)) return false;
    return true;
}

export function ExternalProviderFromJSON(json: any): ExternalProvider {
    return ExternalProviderFromJSONTyped(json, false);
}

export function ExternalProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalProvider {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'type': ExternalProviderTypeEnumFromJSON(json['type']),
        'userId': json['user_id'],
        'accessToken': json['access_token'] == null ? undefined : json['access_token'],
        'expiresIn': json['expires_in'] == null ? undefined : json['expires_in'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'profileData': json['profileData'] == null ? undefined : ExternalProviderProfileDataFromJSON(json['profileData']),
        'connection': json['connection'] == null ? undefined : json['connection'],
        'isSocial': json['isSocial'] == null ? undefined : json['isSocial'],
    };
}

export function ExternalProviderToJSON(value?: ExternalProvider | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'type': ExternalProviderTypeEnumToJSON(value['type']),
        'user_id': value['userId'],
        'access_token': value['accessToken'],
        'expires_in': value['expiresIn'],
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'profileData': ExternalProviderProfileDataToJSON(value['profileData']),
        'connection': value['connection'],
        'isSocial': value['isSocial'],
    };
}

