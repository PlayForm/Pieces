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
  CheckedOSUpdate,
  FilePickerInput,
  OSDeviceInformationReturnable,
  ReturnedUserProfile,
  SeededExternalProvider,
  UncheckedOSUpdate,
  UserProfile,
  Users,
} from '../models/index';
import {
    CheckedOSUpdateFromJSON,
    CheckedOSUpdateToJSON,
    FilePickerInputFromJSON,
    FilePickerInputToJSON,
    OSDeviceInformationReturnableFromJSON,
    OSDeviceInformationReturnableToJSON,
    ReturnedUserProfileFromJSON,
    ReturnedUserProfileToJSON,
    SeededExternalProviderFromJSON,
    SeededExternalProviderToJSON,
    UncheckedOSUpdateFromJSON,
    UncheckedOSUpdateToJSON,
    UserProfileFromJSON,
    UserProfileToJSON,
    UsersFromJSON,
    UsersToJSON,
} from '../models/index';

export interface LinkProviderRequest {
    seededExternalProvider?: SeededExternalProvider;
}

export interface OsUpdateCheckRequest {
    uncheckedOSUpdate?: UncheckedOSUpdate;
}

export interface PickFilesRequest {
    filePickerInput?: FilePickerInput;
}

/**
 * 
 */
export class OSApi extends runtime.BaseAPI {

    /**
     * This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.
     * /os/link_provider [POST]
     */
    async linkProviderRaw(requestParameters: LinkProviderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReturnedUserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/os/link_provider`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededExternalProviderToJSON(requestParameters.seededExternalProvider),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReturnedUserProfileFromJSON(jsonValue));
    }

    /**
     * This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.
     * /os/link_provider [POST]
     */
    async linkProvider(requestParameters: LinkProviderRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReturnedUserProfile> {
        const response = await this.linkProviderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will get information related to your specific device.
     * /os/device/information [GET]
     */
    async osDeviceInformationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OSDeviceInformationReturnable>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/os/device/information`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OSDeviceInformationReturnableFromJSON(jsonValue));
    }

    /**
     * This will get information related to your specific device.
     * /os/device/information [GET]
     */
    async osDeviceInformation(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OSDeviceInformationReturnable> {
        const response = await this.osDeviceInformationRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.
     * Your GET endpoint
     */
    async osRestartRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/os/restart`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.
     * Your GET endpoint
     */
    async osRestart(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.osRestartRaw(initOverrides);
    }

    /**
     * This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc
     * /os/update/check [POST]
     */
    async osUpdateCheckRaw(requestParameters: OsUpdateCheckRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckedOSUpdate>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/os/update/check`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UncheckedOSUpdateToJSON(requestParameters.uncheckedOSUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckedOSUpdateFromJSON(jsonValue));
    }

    /**
     * This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc
     * /os/update/check [POST]
     */
    async osUpdateCheck(requestParameters: OsUpdateCheckRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckedOSUpdate> {
        const response = await this.osUpdateCheckRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will trigger a filer picker and return the string paths of the files that were selected.
     * /os/files/pick [POST]
     */
    async pickFilesRaw(requestParameters: PickFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/os/files/pick`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FilePickerInputToJSON(requestParameters.filePickerInput),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * This will trigger a filer picker and return the string paths of the files that were selected.
     * /os/files/pick [POST]
     */
    async pickFiles(requestParameters: PickFilesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.pickFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will trigger a folder picker and return the string paths of the folders that were selected.
     * /os/folders/pick [POST]
     */
    async pickFoldersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/os/folders/pick`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * This will trigger a folder picker and return the string paths of the folders that were selected.
     * /os/folders/pick [POST]
     */
    async pickFolders(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.pickFoldersRaw(initOverrides);
        return await response.value();
    }

    /**
     * A trigger that launches a Sign into OS Server
     * 
     */
    async signIntoOSRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/os/sign_in`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * A trigger that launches a Sign into OS Server
     * 
     */
    async signIntoOS(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfile> {
        const response = await this.signIntoOSRaw(initOverrides);
        return await response.value();
    }

    /**
     * A trigger that signs out a user from the OS
     * /os/sign_out [POST]
     */
    async signOutOfOSRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Users>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/os/sign_out`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersFromJSON(jsonValue));
    }

    /**
     * A trigger that signs out a user from the OS
     * /os/sign_out [POST]
     */
    async signOutOfOS(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Users> {
        const response = await this.signOutOfOSRaw(initOverrides);
        return await response.value();
    }

}
