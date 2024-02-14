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
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    Recipients,
    RecipientsFromJSON,
    RecipientsFromJSONTyped,
    RecipientsToJSON,
} from './';

/**
 * This is the minimum information needed to distribute a Piece to a Gist.
 * @export
 * @interface SeededGitHubGistDistribution
 */
export interface SeededGitHubGistDistribution {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededGitHubGistDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Recipients}
     * @memberof SeededGitHubGistDistribution
     */
    recipients?: Recipients;
    /**
     * we will default to true
     * @type {boolean}
     * @memberof SeededGitHubGistDistribution
     */
    _public?: boolean;
    /**
     * This is the description of the Gist Distribution
     * @type {string}
     * @memberof SeededGitHubGistDistribution
     */
    description?: string;
    /**
     * This is the name of the gist you will add.
     * @type {string}
     * @memberof SeededGitHubGistDistribution
     */
    name: string;
}

export function SeededGitHubGistDistributionFromJSON(json: any): SeededGitHubGistDistribution {
    return SeededGitHubGistDistributionFromJSONTyped(json, false);
}

export function SeededGitHubGistDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededGitHubGistDistribution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'recipients': !exists(json, 'recipients') ? undefined : RecipientsFromJSON(json['recipients']),
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': json['name'],
    };
}

export function SeededGitHubGistDistributionToJSON(value?: SeededGitHubGistDistribution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'recipients': RecipientsToJSON(value.recipients),
        'public': value._public,
        'description': value.description,
        'name': value.name,
    };
}


