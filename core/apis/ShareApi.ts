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
  SeededScoreIncrement,
  Share,
} from '../models/index';
import {
    SeededScoreIncrementFromJSON,
    SeededScoreIncrementToJSON,
    ShareFromJSON,
    ShareToJSON,
} from '../models/index';

export interface ShareScoresIncrementRequest {
    share: string;
    seededScoreIncrement?: SeededScoreIncrement;
}

export interface ShareSnapshotRequest {
    share: string;
    transferables?: boolean;
}

export interface ShareUpdateRequest {
    transferables?: boolean;
    share?: Share;
}

/**
 * 
 */
export class ShareApi extends runtime.BaseAPI {

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/share/{share}/scores/increment\' [POST]
     */
    async shareScoresIncrementRaw(requestParameters: ShareScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['share'] == null) {
            throw new runtime.RequiredError(
                'share',
                'Required parameter "share" was null or undefined when calling shareScoresIncrement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/share/{share}/scores/increment`.replace(`{${"share"}}`, encodeURIComponent(String(requestParameters['share']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededScoreIncrementToJSON(requestParameters['seededScoreIncrement']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/share/{share}/scores/increment\' [POST]
     */
    async shareScoresIncrement(requestParameters: ShareScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.shareScoresIncrementRaw(requestParameters, initOverrides);
    }

    /**
     * Get the snapshot of a specific share.
     * /share/{share}
     */
    async shareSnapshotRaw(requestParameters: ShareSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Share>> {
        if (requestParameters['share'] == null) {
            throw new runtime.RequiredError(
                'share',
                'Required parameter "share" was null or undefined when calling shareSnapshot().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['transferables'] != null) {
            queryParameters['transferables'] = requestParameters['transferables'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/share/{share}`.replace(`{${"share"}}`, encodeURIComponent(String(requestParameters['share']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShareFromJSON(jsonValue));
    }

    /**
     * Get the snapshot of a specific share.
     * /share/{share}
     */
    async shareSnapshot(requestParameters: ShareSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Share> {
        const response = await this.shareSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!
     * /share/update [POST]
     */
    async shareUpdateRaw(requestParameters: ShareUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Share>> {
        const queryParameters: any = {};

        if (requestParameters['transferables'] != null) {
            queryParameters['transferables'] = requestParameters['transferables'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/share/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShareToJSON(requestParameters['share']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShareFromJSON(jsonValue));
    }

    /**
     * This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!
     * /share/update [POST]
     */
    async shareUpdate(requestParameters: ShareUpdateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Share> {
        const response = await this.shareUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
