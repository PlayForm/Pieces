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
/**
 * Strongly-typed returnable class for link extraction from a text asset.
 * @export
 * @interface LinkExtractionReturnable
 */
export interface LinkExtractionReturnable {
    /**
     *
     * @type {Array<string>}
     * @memberof LinkExtractionReturnable
     */
    urls: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof LinkExtractionReturnable
     */
    emails: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof LinkExtractionReturnable
     */
    users: Array<string>;
}
export declare function LinkExtractionReturnableFromJSON(json: any): LinkExtractionReturnable;
export declare function LinkExtractionReturnableFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkExtractionReturnable;
export declare function LinkExtractionReturnableToJSON(value?: LinkExtractionReturnable | null): any;