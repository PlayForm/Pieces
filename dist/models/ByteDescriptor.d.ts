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
 * This is a nice microclass to help with managing the size of a File or Fragment in a readable way for UI's
 * @export
 * @interface ByteDescriptor
 */
export interface ByteDescriptor {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ByteDescriptor
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {number}
     * @memberof ByteDescriptor
     */
    value: number;
    /**
     *
     * @type {string}
     * @memberof ByteDescriptor
     */
    readable: string;
}
export declare function ByteDescriptorFromJSON(json: any): ByteDescriptor;
export declare function ByteDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ByteDescriptor;
export declare function ByteDescriptorToJSON(value?: ByteDescriptor | null): any;