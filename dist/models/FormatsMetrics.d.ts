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
import { EmbeddedModelSchema, FormatMetric } from './';
/**
 *
 * @export
 * @interface FormatsMetrics
 */
export interface FormatsMetrics {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FormatsMetrics
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<FormatMetric>}
     * @memberof FormatsMetrics
     */
    iterable: Array<FormatMetric>;
}
export declare function FormatsMetricsFromJSON(json: any): FormatsMetrics;
export declare function FormatsMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatsMetrics;
export declare function FormatsMetricsToJSON(value?: FormatsMetrics | null): any;
