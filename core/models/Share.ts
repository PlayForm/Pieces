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
import type { AccessEnum } from './AccessEnum';
import {
    AccessEnumFromJSON,
    AccessEnumFromJSONTyped,
    AccessEnumToJSON,
} from './AccessEnum';
import type { Accessors } from './Accessors';
import {
    AccessorsFromJSON,
    AccessorsFromJSONTyped,
    AccessorsToJSON,
} from './Accessors';
import type { Distributions } from './Distributions';
import {
    DistributionsFromJSON,
    DistributionsFromJSONTyped,
    DistributionsToJSON,
} from './Distributions';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedAsset } from './FlattenedAsset';
import {
    FlattenedAssetFromJSON,
    FlattenedAssetFromJSONTyped,
    FlattenedAssetToJSON,
} from './FlattenedAsset';
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
} from './FlattenedAssets';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This represents what information that is relavent to anything and every sharing related. v1 will look very bare and will add more and more data as we go!
 * 
 * if user is undefined && access is public then we have an asset that is publicly available.
 * @export
 * @interface Share
 */
export interface Share {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Share
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the uuid that represents this share model.
     * @type {string}
     * @memberof Share
     */
    id: string;
    /**
     * this is the uuid of the user that the share is created for.
     * @type {string}
     * @memberof Share
     */
    user?: string;
    /**
     * 
     * @type {FlattenedAsset}
     * @memberof Share
     */
    asset?: FlattenedAsset;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof Share
     */
    assets?: FlattenedAssets;
    /**
     * This is the prebuilt link.
     * @type {string}
     * @memberof Share
     */
    link: string;
    /**
     * 
     * @type {AccessEnum}
     * @memberof Share
     */
    access: AccessEnum;
    /**
     * 
     * @type {Accessors}
     * @memberof Share
     */
    accessors: Accessors;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Share
     */
    created: GroupedTimestamp;
    /**
     * This is a shortened version of our uuid.
     * @type {string}
     * @memberof Share
     */
    _short: string;
    /**
     * this is an optional name we can give to the link, ie ?p=JAVASCRIPT or what ever the user wants as long as it is available.
     * @type {string}
     * @memberof Share
     */
    name?: string;
    /**
     * 
     * @type {Distributions}
     * @memberof Share
     */
    distributions?: Distributions;
    /**
     * 
     * @type {Score}
     * @memberof Share
     */
    score?: Score;
}

/**
 * Check if a given object implements the Share interface.
 */
export function instanceOfShare(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('link' in value)) return false;
    if (!('access' in value)) return false;
    if (!('accessors' in value)) return false;
    if (!('created' in value)) return false;
    if (!('_short' in value)) return false;
    return true;
}

export function ShareFromJSON(json: any): Share {
    return ShareFromJSONTyped(json, false);
}

export function ShareFromJSONTyped(json: any, ignoreDiscriminator: boolean): Share {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'user': json['user'] == null ? undefined : json['user'],
        'asset': json['asset'] == null ? undefined : FlattenedAssetFromJSON(json['asset']),
        'assets': json['assets'] == null ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'link': json['link'],
        'access': AccessEnumFromJSON(json['access']),
        'accessors': AccessorsFromJSON(json['accessors']),
        'created': GroupedTimestampFromJSON(json['created']),
        '_short': json['short'],
        'name': json['name'] == null ? undefined : json['name'],
        'distributions': json['distributions'] == null ? undefined : DistributionsFromJSON(json['distributions']),
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function ShareToJSON(value?: Share | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'user': value['user'],
        'asset': FlattenedAssetToJSON(value['asset']),
        'assets': FlattenedAssetsToJSON(value['assets']),
        'link': value['link'],
        'access': AccessEnumToJSON(value['access']),
        'accessors': AccessorsToJSON(value['accessors']),
        'created': GroupedTimestampToJSON(value['created']),
        'short': value['_short'],
        'name': value['name'],
        'distributions': DistributionsToJSON(value['distributions']),
        'score': ScoreToJSON(value['score']),
    };
}

