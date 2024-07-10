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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedAnchors } from './FlattenedAnchors';
import {
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
} from './FlattenedAnchors';
import type { FlattenedPersons } from './FlattenedPersons';
import {
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
} from './FlattenedPersons';
import type { FlattenedWebsites } from './FlattenedWebsites';
import {
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
} from './FlattenedWebsites';
import type { Seeds } from './Seeds';
import {
    SeedsFromJSON,
    SeedsFromJSONTyped,
    SeedsToJSON,
} from './Seeds';
import type { TextLocation } from './TextLocation';
import {
    TextLocationFromJSON,
    TextLocationFromJSONTyped,
    TextLocationToJSON,
} from './TextLocation';

/**
 * This is an extraction,
 * this was a person/website/anchor that was extracted
 * 
 * this will return the text location where this was found within the extraction.
 * 
 * as well return the material itself that was extracted.
 * 
 * Note:
 * - seeds: will only be extracted people if provided, because the website/anchors will be created if extracted.
 * - basically only thing that is different about the extracted people, if that if we extract a person that was not already saved,
 *   then we will not save them, however if there are related people then we will add them as well.
 * @export
 * @interface TextuallyExtractedMaterial
 */
export interface TextuallyExtractedMaterial {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TextuallyExtractedMaterial
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TextLocation}
     * @memberof TextuallyExtractedMaterial
     */
    match: TextLocation;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof TextuallyExtractedMaterial
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof TextuallyExtractedMaterial
     */
    anchors?: FlattenedAnchors;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof TextuallyExtractedMaterial
     */
    persons?: FlattenedPersons;
    /**
     * 
     * @type {Seeds}
     * @memberof TextuallyExtractedMaterial
     */
    seeds?: Seeds;
}

/**
 * Check if a given object implements the TextuallyExtractedMaterial interface.
 */
export function instanceOfTextuallyExtractedMaterial(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "match" in value;

    return isInstance;
}

export function TextuallyExtractedMaterialFromJSON(json: any): TextuallyExtractedMaterial {
    return TextuallyExtractedMaterialFromJSONTyped(json, false);
}

export function TextuallyExtractedMaterialFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextuallyExtractedMaterial {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'match': TextLocationFromJSON(json['match']),
        'websites': !exists(json, 'websites') ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'anchors': !exists(json, 'anchors') ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
        'persons': !exists(json, 'persons') ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'seeds': !exists(json, 'seeds') ? undefined : SeedsFromJSON(json['seeds']),
    };
}

export function TextuallyExtractedMaterialToJSON(value?: TextuallyExtractedMaterial | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'match': TextLocationToJSON(value.match),
        'websites': FlattenedWebsitesToJSON(value.websites),
        'anchors': FlattenedAnchorsToJSON(value.anchors),
        'persons': FlattenedPersonsToJSON(value.persons),
        'seeds': SeedsToJSON(value.seeds),
    };
}

