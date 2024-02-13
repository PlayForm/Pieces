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
import { Classification, EmbeddedModelSchema, Role } from './';
/**
 * A minimal format to send to Mixpanel
 * @export
 * @interface TrackedFormat
 */
export interface TrackedFormat {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TrackedFormat
     */
    schema?: EmbeddedModelSchema;
    /**
     * The UUID of the format
     * @type {string}
     * @memberof TrackedFormat
     */
    id: string;
    /**
     *
     * @type {Classification}
     * @memberof TrackedFormat
     */
    classification: Classification;
    /**
     *
     * @type {Role}
     * @memberof TrackedFormat
     */
    role: Role;
    /**
     * The UUID of the asset associated
     * @type {string}
     * @memberof TrackedFormat
     */
    asset: string;
    /**
     *
     * @type {boolean}
     * @memberof TrackedFormat
     */
    fragment: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TrackedFormat
     */
    file: boolean;
}
export declare function TrackedFormatFromJSON(json: any): TrackedFormat;
export declare function TrackedFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedFormat;
export declare function TrackedFormatToJSON(value?: TrackedFormat | null): any;
