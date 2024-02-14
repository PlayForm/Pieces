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
import { Analysis, EmbeddedModelSchema } from './';
/**
 *
 * @export
 * @interface Analyses
 */
export interface Analyses {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Analyses
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Analysis>}
     * @memberof Analyses
     */
    iterable: Array<Analysis>;
}
export declare function AnalysesFromJSON(json: any): Analyses;
export declare function AnalysesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Analyses;
export declare function AnalysesToJSON(value?: Analyses | null): any;
