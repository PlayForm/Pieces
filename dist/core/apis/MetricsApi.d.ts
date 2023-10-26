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
import * as runtime from '../runtime';
import { FormatsMetrics, OrderedMetrics } from '../models';
/**
 *
 */
export declare class MetricsApi extends runtime.BaseAPI {
    /**
     * This is going to get a snapshot of our FormatsMetrics
     * /metrics/formats [GET]
     */
    getMetricsFormatsRaw(): Promise<runtime.ApiResponse<FormatsMetrics>>;
    /**
     * This is going to get a snapshot of our FormatsMetrics
     * /metrics/formats [GET]
     */
    getMetricsFormats(): Promise<FormatsMetrics>;
    /**
     * This will return a list of code formats in desc order from most to least formats uploaded.
     * /metrics/formats/ordered [GET]
     */
    metricsFormatsOrderedRaw(): Promise<runtime.ApiResponse<OrderedMetrics>>;
    /**
     * This will return a list of code formats in desc order from most to least formats uploaded.
     * /metrics/formats/ordered [GET]
     */
    metricsFormatsOrdered(): Promise<OrderedMetrics>;
}