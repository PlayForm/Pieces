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
import { EmbeddedModelSchema } from './';
/**
 * if reuse was used in the reaction then we can provide the uuid of the asset that was reused.
 * @export
 * @interface ReuseReaction
 */
export interface ReuseReaction {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReuseReaction
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReuseReaction
     */
    asset: string;
}
export declare function ReuseReactionFromJSON(json: any): ReuseReaction;
export declare function ReuseReactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReuseReaction;
export declare function ReuseReactionToJSON(value?: ReuseReaction | null): any;