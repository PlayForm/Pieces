/* tslint:disable */
/* eslint-disable */
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
import type {
  AllocationCloud,
  Allocations,
  UserProfile,
} from '../models/index';
import {
    AllocationCloudFromJSON,
    AllocationCloudToJSON,
    AllocationsFromJSON,
    AllocationsToJSON,
    UserProfileFromJSON,
    UserProfileToJSON,
} from '../models/index';

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
export class AllocationsApi extends runtime.BaseAPI {

    /**
     * This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)
     * /allocations/connect [POST]
     */
    async allocationsConnectNewCloudRaw(requestParameters: AllocationsConnectNewCloudRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AllocationCloud>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/allocations/connect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserProfileToJSON(requestParameters['userProfile']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AllocationCloudFromJSON(jsonValue));
    }

    /**
     * This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)
     * /allocations/connect [POST]
     */
    async allocationsConnectNewCloud(requestParameters: AllocationsConnectNewCloudRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AllocationCloud> {
        const response = await this.allocationsConnectNewCloudRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is unimplemented locally. This will create an allocation. ONLY used within the cloud.
     * /allocations/create [POST]
     */
    async allocationsCreateNewAllocationRaw(requestParameters: AllocationsCreateNewAllocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AllocationCloud>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/allocations/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AllocationCloudToJSON(requestParameters['allocationCloud']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AllocationCloudFromJSON(jsonValue));
    }

    /**
     * This is unimplemented locally. This will create an allocation. ONLY used within the cloud.
     * /allocations/create [POST]
     */
    async allocationsCreateNewAllocation(requestParameters: AllocationsCreateNewAllocationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AllocationCloud> {
        const response = await this.allocationsCreateNewAllocationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.
     * /allocations/delete [POST]
     */
    async allocationsDeleteAllocationRaw(requestParameters: AllocationsDeleteAllocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/allocations/delete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AllocationCloudToJSON(requestParameters['allocationCloud']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.
     * /allocations/delete [POST]
     */
    async allocationsDeleteAllocation(requestParameters: AllocationsDeleteAllocationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.allocationsDeleteAllocationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will attempt to disconnect to a specific users cloud.
     * /allocations/disconnect [POST]
     */
    async allocationsDisconnectCloudRaw(requestParameters: AllocationsDisconnectCloudRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/allocations/disconnect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AllocationCloudToJSON(requestParameters['allocationCloud']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * This will attempt to disconnect to a specific users cloud.
     * /allocations/disconnect [POST]
     */
    async allocationsDisconnectCloud(requestParameters: AllocationsDisconnectCloudRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.allocationsDisconnectCloudRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.
     * /allocations/reconnect [POST]
     */
    async allocationsReconnectCloudRaw(requestParameters: AllocationsReconnectCloudRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AllocationCloud>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/allocations/reconnect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AllocationCloudToJSON(requestParameters['allocationCloud']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AllocationCloudFromJSON(jsonValue));
    }

    /**
     * This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.
     * /allocations/reconnect [POST]
     */
    async allocationsReconnectCloud(requestParameters: AllocationsReconnectCloudRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AllocationCloud> {
        const response = await this.allocationsReconnectCloudRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is going to get a snapshot of all of the connected allocations.
     * /allocations [GET]
     */
    async allocationsSnapshotRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Allocations>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/allocations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AllocationsFromJSON(jsonValue));
    }

    /**
     * This is going to get a snapshot of all of the connected allocations.
     * /allocations [GET]
     */
    async allocationsSnapshot(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Allocations> {
        const response = await this.allocationsSnapshotRaw(initOverrides);
        return await response.value();
    }

}
