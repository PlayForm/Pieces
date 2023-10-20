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
import { AnchorTypeEnum, EmbeddedModelSchema, PlatformEnum } from './';
/**
 *
 * @export
 * @interface SeededAnchorPoint
 */
export interface SeededAnchorPoint {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededAnchorPoint
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {AnchorTypeEnum}
     * @memberof SeededAnchorPoint
     */
    type: AnchorTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof SeededAnchorPoint
     */
    watch?: boolean;
    /**
     *
     * @type {string}
     * @memberof SeededAnchorPoint
     */
    fullpath: string;
    /**
     * Cannot create an AnchorPoint w/o a Anchor.
     * @type {string}
     * @memberof SeededAnchorPoint
     */
    anchor: string;
    /**
     *
     * @type {PlatformEnum}
     * @memberof SeededAnchorPoint
     */
    platform?: PlatformEnum;
}
export declare function SeededAnchorPointFromJSON(json: any): SeededAnchorPoint;
export declare function SeededAnchorPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAnchorPoint;
export declare function SeededAnchorPointToJSON(value?: SeededAnchorPoint | null): any;