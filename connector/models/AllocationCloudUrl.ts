/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AllocationStatusEnum,
    AllocationStatusEnumFromJSON,
    AllocationStatusEnumFromJSONTyped,
    AllocationStatusEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

/**
 * This is one of the 3 possible urls that will route to your cloud :).
 * @export
 * @interface AllocationCloudUrl
 */
export interface AllocationCloudUrl {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AllocationCloudUrl
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {AllocationStatusEnum}
     * @memberof AllocationCloudUrl
     */
    status: AllocationStatusEnum;
    /**
     * this is the base url that is used to communicat with your vpc.
     * @type {string}
     * @memberof AllocationCloudUrl
     */
    url: string;
}

export function AllocationCloudUrlFromJSON(json: any): AllocationCloudUrl {
    return AllocationCloudUrlFromJSONTyped(json, false);
}

export function AllocationCloudUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationCloudUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'status': AllocationStatusEnumFromJSON(json['status']),
        'url': json['url'],
    };
}

export function AllocationCloudUrlToJSON(value?: AllocationCloudUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'status': AllocationStatusEnumToJSON(value.status),
        'url': value.url,
    };
}

