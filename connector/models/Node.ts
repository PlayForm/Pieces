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
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    NodeTypeEnum,
    NodeTypeEnumFromJSON,
    NodeTypeEnumFromJSONTyped,
    NodeTypeEnumToJSON,
} from './';

/**
 * This describes a node within a relationship graph used to related like types. ie asset to asset, tag to tag, ...etc
 * 
 * created: is here to let us know when the node was attached.
 * 
 * id: this is the the id of the type ie, if the type is Asset the id here points to the asset that this node represents.
 * @export
 * @interface Node
 */
export interface Node {
    /**
     * 
     * @type {string}
     * @memberof Node
     */
    id: string;
    /**
     * 
     * @type {NodeTypeEnum}
     * @memberof Node
     */
    type: NodeTypeEnum;
    /**
     * This is a boolean to let us know if this node is the root or origin of the relationship graph.
     * @type {boolean}
     * @memberof Node
     */
    root: boolean;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Node
     */
    created: GroupedTimestamp;
}

export function NodeFromJSON(json: any): Node {
    return NodeFromJSONTyped(json, false);
}

export function NodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Node {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': NodeTypeEnumFromJSON(json['type']),
        'root': json['root'],
        'created': GroupedTimestampFromJSON(json['created']),
    };
}

export function NodeToJSON(value?: Node | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': NodeTypeEnumToJSON(value.type),
        'root': value.root,
        'created': GroupedTimestampToJSON(value.created),
    };
}

