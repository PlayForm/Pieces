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
import { EmbeddedModelSchema, StreamedIdentifier } from './';
/**
 * This is currently only used within /assets/steam/identifiers && /conversations/steam/identifiers but can be used with other as well, if we want to expand this class. && expand the StreamedIdentifier class.
 * @export
 * @interface StreamedIdentifiers
 */
export interface StreamedIdentifiers {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof StreamedIdentifiers
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<StreamedIdentifier>}
     * @memberof StreamedIdentifiers
     */
    iterable: Array<StreamedIdentifier>;
}
export declare function StreamedIdentifiersFromJSON(json: any): StreamedIdentifiers;
export declare function StreamedIdentifiersFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamedIdentifiers;
export declare function StreamedIdentifiersToJSON(value?: StreamedIdentifiers | null): any;
