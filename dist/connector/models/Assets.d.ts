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
import { Asset, EmbeddedModelSchema } from './';
/**
 * A base class for a collection of assets and some additional meta properties. Fully Populated with Formats internally (not just uuid's).
 * @export
 * @interface Assets
 */
export interface Assets {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Assets
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Asset>}
     * @memberof Assets
     */
    iterable: Array<Asset>;
    /**
     * This is a Map<String, int> where the the key is an asset id.
     * @type {{ [key: string]: number; }}
     * @memberof Assets
     */
    indices?: {
        [key: string]: number;
    };
}
export declare function AssetsFromJSON(json: any): Assets;
export declare function AssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Assets;
export declare function AssetsToJSON(value?: Assets | null): any;