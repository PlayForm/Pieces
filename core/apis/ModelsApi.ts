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
  Model,
  ModelDeleteCacheInput,
  ModelDeleteCacheOutput,
  Models,
  SeededModel,
} from '../models/index';
import {
    ModelFromJSON,
    ModelToJSON,
    ModelDeleteCacheInputFromJSON,
    ModelDeleteCacheInputToJSON,
    ModelDeleteCacheOutputFromJSON,
    ModelDeleteCacheOutputToJSON,
    ModelsFromJSON,
    ModelsToJSON,
    SeededModelFromJSON,
    SeededModelToJSON,
} from '../models/index';

export interface ModelsCreateNewModelRequest {
    seededModel?: SeededModel;
}

export interface ModelsDeleteSpecificModelRequest {
    model: string;
}

export interface ModelsDeleteSpecificModelCacheRequest {
    model: string;
    modelDeleteCacheInput?: ModelDeleteCacheInput;
}

/**
 * 
 */
export class ModelsApi extends runtime.BaseAPI {

    /**
     * This will create a ml model, this is aloud however all models will be set to custom: true.  && we will verify we dont have a model that matches this model.
     * /models/create [POST]
     */
    async modelsCreateNewModelRaw(requestParameters: ModelsCreateNewModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/models/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededModelToJSON(requestParameters['seededModel']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     * This will create a ml model, this is aloud however all models will be set to custom: true.  && we will verify we dont have a model that matches this model.
     * /models/create [POST]
     */
    async modelsCreateNewModel(requestParameters: ModelsCreateNewModelRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.modelsCreateNewModelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will delete a model, This is only available for custom: true models.
     * /models/{model}/delete [POST]
     */
    async modelsDeleteSpecificModelRaw(requestParameters: ModelsDeleteSpecificModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError(
                'model',
                'Required parameter "model" was null or undefined when calling modelsDeleteSpecificModel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models/{model}/delete`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will delete a model, This is only available for custom: true models.
     * /models/{model}/delete [POST]
     */
    async modelsDeleteSpecificModel(requestParameters: ModelsDeleteSpecificModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.modelsDeleteSpecificModelRaw(requestParameters, initOverrides);
    }

    /**
     * This is going to delete and sort of data that is associated with the Model itself IE the Assets/Libraries downloaded specifically for this model.  This is only available for the LLLM models for now.
     * /models/{model}/delete/cache [POST]
     */
    async modelsDeleteSpecificModelCacheRaw(requestParameters: ModelsDeleteSpecificModelCacheRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelDeleteCacheOutput>> {
        if (requestParameters['model'] == null) {
            throw new runtime.RequiredError(
                'model',
                'Required parameter "model" was null or undefined when calling modelsDeleteSpecificModelCache().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/models/{model}/delete/cache`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters['model']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelDeleteCacheInputToJSON(requestParameters['modelDeleteCacheInput']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelDeleteCacheOutputFromJSON(jsonValue));
    }

    /**
     * This is going to delete and sort of data that is associated with the Model itself IE the Assets/Libraries downloaded specifically for this model.  This is only available for the LLLM models for now.
     * /models/{model}/delete/cache [POST]
     */
    async modelsDeleteSpecificModelCache(requestParameters: ModelsDeleteSpecificModelCacheRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelDeleteCacheOutput> {
        const response = await this.modelsDeleteSpecificModelCacheRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will get a snapshot of all of your models.
     * /models [GET]
     */
    async modelsSnapshotRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Models>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of all of your models.
     * /models [GET]
     */
    async modelsSnapshot(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Models> {
        const response = await this.modelsSnapshotRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will unload all of the ml models.(that are unloadable)
     * /models/unload [POST]
     */
    async unloadModelsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models/unload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will unload all of the ml models.(that are unloadable)
     * /models/unload [POST]
     */
    async unloadModels(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.unloadModelsRaw(initOverrides);
    }

}
