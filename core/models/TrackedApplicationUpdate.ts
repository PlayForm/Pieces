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

import { exists, mapValues } from '../runtime';
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
} from './Application';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { TrackedUserProfile } from './TrackedUserProfile';
import {
    TrackedUserProfileFromJSON,
    TrackedUserProfileFromJSONTyped,
    TrackedUserProfileToJSON,
} from './TrackedUserProfile';

/**
 * This is a model used to track when an Application is Updated
 * @export
 * @interface TrackedApplicationUpdate
 */
export interface TrackedApplicationUpdate {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedApplicationUpdate
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Application}
     * @memberof TrackedApplicationUpdate
     */
    current: Application;
    /**
     * 
     * @type {Application}
     * @memberof TrackedApplicationUpdate
     */
    previous?: Application;
    /**
     * 
     * @type {TrackedUserProfile}
     * @memberof TrackedApplicationUpdate
     */
    user?: TrackedUserProfile;
}

/**
 * Check if a given object implements the TrackedApplicationUpdate interface.
 */
export function instanceOfTrackedApplicationUpdate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "current" in value;

    return isInstance;
}

export function TrackedApplicationUpdateFromJSON(json: any): TrackedApplicationUpdate {
    return TrackedApplicationUpdateFromJSONTyped(json, false);
}

export function TrackedApplicationUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedApplicationUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'current': ApplicationFromJSON(json['current']),
        'previous': !exists(json, 'previous') ? undefined : ApplicationFromJSON(json['previous']),
        'user': !exists(json, 'user') ? undefined : TrackedUserProfileFromJSON(json['user']),
    };
}

export function TrackedApplicationUpdateToJSON(value?: TrackedApplicationUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'current': ApplicationToJSON(value.current),
        'previous': ApplicationToJSON(value.previous),
        'user': TrackedUserProfileToJSON(value.user),
    };
}

