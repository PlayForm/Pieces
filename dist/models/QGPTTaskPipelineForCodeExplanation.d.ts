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
 * This task is for explaining a bit of code.
 *
 * This is a class so that we can add optional properties in the future.
 *
 * Note: the snippet && language that needs to be explaned should be within the QGPTQuestionInput.relevant
 * @export
 * @interface QGPTTaskPipelineForCodeExplanation
 */
export interface QGPTTaskPipelineForCodeExplanation {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof QGPTTaskPipelineForCodeExplanation
     */
    schema?: EmbeddedModelSchema;
}
export declare function QGPTTaskPipelineForCodeExplanationFromJSON(json: any): QGPTTaskPipelineForCodeExplanation;
export declare function QGPTTaskPipelineForCodeExplanationFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTTaskPipelineForCodeExplanation;
export declare function QGPTTaskPipelineForCodeExplanationToJSON(value?: QGPTTaskPipelineForCodeExplanation | null): any;
