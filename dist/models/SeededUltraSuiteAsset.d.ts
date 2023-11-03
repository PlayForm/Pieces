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
import { ClassificationSpecificEnum, EmbeddedModelSchema, SeededFormat } from './';
/**
 * A SeededUEAsset is the minimum data sent from UE required to create an asset within Pieces.
 *
 * Fragment & file are both optional properties however we will throw an internal error if both fragment and file are passed through or if both are undefined.
 * @export
 * @interface SeededUltraSuiteAsset
 */
export interface SeededUltraSuiteAsset {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededUltraSuiteAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * (optional) name is the name of the file
     * @type {string}
     * @memberof SeededUltraSuiteAsset
     */
    name?: string;
    /**
     *
     * @type {ClassificationSpecificEnum}
     * @memberof SeededUltraSuiteAsset
     */
    ext?: ClassificationSpecificEnum;
    /**
     *
     * @type {SeededFormat}
     * @memberof SeededUltraSuiteAsset
     */
    format: SeededFormat;
    /**
     *
     * @type {string}
     * @memberof SeededUltraSuiteAsset
     */
    description?: string;
}
export declare function SeededUltraSuiteAssetFromJSON(json: any): SeededUltraSuiteAsset;
export declare function SeededUltraSuiteAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededUltraSuiteAsset;
export declare function SeededUltraSuiteAssetToJSON(value?: SeededUltraSuiteAsset | null): any;