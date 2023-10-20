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
import { AllocationCloud, Allocations, UserProfile } from '../models';
export interface AllocationsConnectNewCloudRequest {
    userProfile?: UserProfile;
}
export interface AllocationsCreateNewAllocationRequest {
    allocationCloud?: AllocationCloud;
}
export interface AllocationsDeleteAllocationRequest {
    allocationCloud?: AllocationCloud;
}
export interface AllocationsDisconnectCloudRequest {
    allocationCloud?: AllocationCloud;
}
export interface AllocationsReconnectCloudRequest {
    allocationCloud?: AllocationCloud;
}
/**
 *
 */
export declare class AllocationsApi extends runtime.BaseAPI {
    /**
     * This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)
     * /allocations/connect [POST]
     */
    allocationsConnectNewCloudRaw(requestParameters: AllocationsConnectNewCloudRequest): Promise<runtime.ApiResponse<AllocationCloud>>;
    /**
     * This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)
     * /allocations/connect [POST]
     */
    allocationsConnectNewCloud(requestParameters: AllocationsConnectNewCloudRequest): Promise<AllocationCloud>;
    /**
     * This is unimplemented locally. This will create an allocation. ONLY used within the cloud.
     * /allocations/create [POST]
     */
    allocationsCreateNewAllocationRaw(requestParameters: AllocationsCreateNewAllocationRequest): Promise<runtime.ApiResponse<AllocationCloud>>;
    /**
     * This is unimplemented locally. This will create an allocation. ONLY used within the cloud.
     * /allocations/create [POST]
     */
    allocationsCreateNewAllocation(requestParameters: AllocationsCreateNewAllocationRequest): Promise<AllocationCloud>;
    /**
     * This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.
     * /allocations/delete [POST]
     */
    allocationsDeleteAllocationRaw(requestParameters: AllocationsDeleteAllocationRequest): Promise<runtime.ApiResponse<string>>;
    /**
     * This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.
     * /allocations/delete [POST]
     */
    allocationsDeleteAllocation(requestParameters: AllocationsDeleteAllocationRequest): Promise<string>;
    /**
     * This will attempt to disconnect to a specific users cloud.
     * /allocations/disconnect [POST]
     */
    allocationsDisconnectCloudRaw(requestParameters: AllocationsDisconnectCloudRequest): Promise<runtime.ApiResponse<string>>;
    /**
     * This will attempt to disconnect to a specific users cloud.
     * /allocations/disconnect [POST]
     */
    allocationsDisconnectCloud(requestParameters: AllocationsDisconnectCloudRequest): Promise<string>;
    /**
     * This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.
     * /allocations/reconnect [POST]
     */
    allocationsReconnectCloudRaw(requestParameters: AllocationsReconnectCloudRequest): Promise<runtime.ApiResponse<AllocationCloud>>;
    /**
     * This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.
     * /allocations/reconnect [POST]
     */
    allocationsReconnectCloud(requestParameters: AllocationsReconnectCloudRequest): Promise<AllocationCloud>;
    /**
     * This is going to get a snapshot of all of the connected allocations.
     * /allocations [GET]
     */
    allocationsSnapshotRaw(): Promise<runtime.ApiResponse<Allocations>>;
    /**
     * This is going to get a snapshot of all of the connected allocations.
     * /allocations [GET]
     */
    allocationsSnapshot(): Promise<Allocations>;
}