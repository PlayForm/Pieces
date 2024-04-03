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
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';
import type { PersonAccess } from './PersonAccess';
import {
    PersonAccessFromJSON,
    PersonAccessFromJSONTyped,
    PersonAccessToJSON,
} from './PersonAccess';
import type { PersonModel } from './PersonModel';
import {
    PersonModelFromJSON,
    PersonModelFromJSONTyped,
    PersonModelToJSON,
} from './PersonModel';
import type { PersonType } from './PersonType';
import {
    PersonTypeFromJSON,
    PersonTypeFromJSONTyped,
    PersonTypeToJSON,
} from './PersonType';
import type { SeededAnnotation } from './SeededAnnotation';
import {
    SeededAnnotationFromJSON,
    SeededAnnotationFromJSONTyped,
    SeededAnnotationToJSON,
} from './SeededAnnotation';

/**
 * This is a per-cursor to a full person.
 * 
 * Will throw an error, if asset is passed in but acces.scope is undefined.
 * 
 * can optionally pass in our mechanism here, as the default will be manual unless specified.
 * 
 * TODO consider updating these asset, format to referenced Models
 * 
 * Note: model, access, mechanism will only be added if the asset is passed in.
 * @export
 * @interface SeededPerson
 */
export interface SeededPerson {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededPerson
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof SeededPerson
     */
    asset?: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededPerson
     */
    mechanism?: MechanismEnum;
    /**
     * 
     * @type {PersonAccess}
     * @memberof SeededPerson
     */
    access?: PersonAccess;
    /**
     * 
     * @type {PersonType}
     * @memberof SeededPerson
     */
    type: PersonType;
    /**
     * 
     * @type {PersonModel}
     * @memberof SeededPerson
     */
    model?: PersonModel;
    /**
     * 
     * @type {Array<SeededAnnotation>}
     * @memberof SeededPerson
     */
    annotations?: Array<SeededAnnotation>;
}

/**
 * Check if a given object implements the SeededPerson interface.
 */
export function instanceOfSeededPerson(value: object): boolean {
    if (!('type' in value)) return false;
    return true;
}

export function SeededPersonFromJSON(json: any): SeededPerson {
    return SeededPersonFromJSONTyped(json, false);
}

export function SeededPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededPerson {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': json['asset'] == null ? undefined : json['asset'],
        'mechanism': json['mechanism'] == null ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'access': json['access'] == null ? undefined : PersonAccessFromJSON(json['access']),
        'type': PersonTypeFromJSON(json['type']),
        'model': json['model'] == null ? undefined : PersonModelFromJSON(json['model']),
        'annotations': json['annotations'] == null ? undefined : ((json['annotations'] as Array<any>).map(SeededAnnotationFromJSON)),
    };
}

export function SeededPersonToJSON(value?: SeededPerson | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'asset': value['asset'],
        'mechanism': MechanismEnumToJSON(value['mechanism']),
        'access': PersonAccessToJSON(value['access']),
        'type': PersonTypeToJSON(value['type']),
        'model': PersonModelToJSON(value['model']),
        'annotations': value['annotations'] == null ? undefined : ((value['annotations'] as Array<any>).map(SeededAnnotationToJSON)),
    };
}

