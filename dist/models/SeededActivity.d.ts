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
import { Application, MechanismEnum, ReferencedAsset, ReferencedConversation, ReferencedFormat, ReferencedUser, SeededConnectorTracking } from './';
/**
 * This is the preseed to a full blown Activity.
 *
 * This is the minimum information needed to create an Activity, used within our [POST] /activities/create
 *
 * if mechenism is not passed in we will default to AUTOMATIC
 *
 * NOT required to pass in an asset/user/format.
 * @export
 * @interface SeededActivity
 */
export interface SeededActivity {
    /**
     *
     * @type {SeededConnectorTracking}
     * @memberof SeededActivity
     */
    event: SeededConnectorTracking;
    /**
     *
     * @type {Application}
     * @memberof SeededActivity
     */
    application: Application;
    /**
     *
     * @type {ReferencedAsset}
     * @memberof SeededActivity
     */
    asset?: ReferencedAsset;
    /**
     *
     * @type {ReferencedUser}
     * @memberof SeededActivity
     */
    user?: ReferencedUser;
    /**
     *
     * @type {ReferencedFormat}
     * @memberof SeededActivity
     */
    format?: ReferencedFormat;
    /**
     *
     * @type {MechanismEnum}
     * @memberof SeededActivity
     */
    mechanism?: MechanismEnum;
    /**
     *
     * @type {ReferencedConversation}
     * @memberof SeededActivity
     */
    conversation?: ReferencedConversation;
}
export declare function SeededActivityFromJSON(json: any): SeededActivity;
export declare function SeededActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededActivity;
export declare function SeededActivityToJSON(value?: SeededActivity | null): any;
