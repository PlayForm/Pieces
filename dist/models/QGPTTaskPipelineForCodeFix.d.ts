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
import { EmbeddedModelSchema } from './';
/**
 * This task is for fixing a bit of code.
 *
 * This is a class so that we can add optional properties in the future.
 * @export
 * @interface QGPTTaskPipelineForCodeFix
 */
export interface QGPTTaskPipelineForCodeFix {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof QGPTTaskPipelineForCodeFix
     */
    schema?: EmbeddedModelSchema;
}
export declare function QGPTTaskPipelineForCodeFixFromJSON(json: any): QGPTTaskPipelineForCodeFix;
export declare function QGPTTaskPipelineForCodeFixFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTTaskPipelineForCodeFix;
export declare function QGPTTaskPipelineForCodeFixToJSON(value?: QGPTTaskPipelineForCodeFix | null): any;
