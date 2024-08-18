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

import type {
	Model,
	ModelDeleteCacheInput,
	ModelDeleteCacheOutput,
	Models,
	SeededModel,
} from "../models/index.ts";
import {
	ModelDeleteCacheInputToJSON,
	ModelDeleteCacheOutputFromJSON,
	ModelFromJSON,
	ModelsFromJSON,
	SeededModelToJSON,
} from "../models/index.ts";
import * as runtime from "../runtime.ts";

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
	 * Creates a machine learning model. By default, all models created through this endpoint will have the \'custom\' attribute set to true. Additionally, the endpoint ensures that no duplicate models exist before creating a new one.
	 * /models/create [POST]
	 */
	async modelsCreateNewModelRaw(
		requestParameters: ModelsCreateNewModelRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Model>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/models/create",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SeededModelToJSON(requestParameters.seededModel),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ModelFromJSON(jsonValue),
		);
	}

	/**
	 * Creates a machine learning model. By default, all models created through this endpoint will have the \'custom\' attribute set to true. Additionally, the endpoint ensures that no duplicate models exist before creating a new one.
	 * /models/create [POST]
	 */
	async modelsCreateNewModel(
		requestParameters: ModelsCreateNewModelRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Model> {
		const response = await this.modelsCreateNewModelRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Deletes a specific model. It is exclusively available for custom models with the \'custom: true\' attribute.
	 * /models/{model}/delete [POST]
	 */
	async modelsDeleteSpecificModelRaw(
		requestParameters: ModelsDeleteSpecificModelRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.model === null ||
			requestParameters.model === undefined
		) {
			throw new runtime.RequiredError(
				"model",
				"Required parameter requestParameters.model was null or undefined when calling modelsDeleteSpecificModel.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/models/{model}/delete".replace(
					`{${"model"}}`,
					encodeURIComponent(String(requestParameters.model)),
				),
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 * Deletes a specific model. It is exclusively available for custom models with the \'custom: true\' attribute.
	 * /models/{model}/delete [POST]
	 */
	async modelsDeleteSpecificModel(
		requestParameters: ModelsDeleteSpecificModelRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.modelsDeleteSpecificModelRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * Deletes the data associated with a specific model, such as assets or libraries downloaded specifically for this model.   Note: This functionality is currently only available for LLM models.
	 * /models/{model}/delete/cache [POST]
	 */
	async modelsDeleteSpecificModelCacheRaw(
		requestParameters: ModelsDeleteSpecificModelCacheRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<ModelDeleteCacheOutput>> {
		if (
			requestParameters.model === null ||
			requestParameters.model === undefined
		) {
			throw new runtime.RequiredError(
				"model",
				"Required parameter requestParameters.model was null or undefined when calling modelsDeleteSpecificModelCache.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/models/{model}/delete/cache".replace(
					`{${"model"}}`,
					encodeURIComponent(String(requestParameters.model)),
				),
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: ModelDeleteCacheInputToJSON(
					requestParameters.modelDeleteCacheInput,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ModelDeleteCacheOutputFromJSON(jsonValue),
		);
	}

	/**
	 * Deletes the data associated with a specific model, such as assets or libraries downloaded specifically for this model.   Note: This functionality is currently only available for LLM models.
	 * /models/{model}/delete/cache [POST]
	 */
	async modelsDeleteSpecificModelCache(
		requestParameters: ModelsDeleteSpecificModelCacheRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<ModelDeleteCacheOutput> {
		const response = await this.modelsDeleteSpecificModelCacheRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This will get a snapshot of all of your models.
	 * /models [GET]
	 */
	async modelsSnapshotRaw(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Models>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/models",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ModelsFromJSON(jsonValue),
		);
	}

	/**
	 * This will get a snapshot of all of your models.
	 * /models [GET]
	 */
	async modelsSnapshot(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Models> {
		const response = await this.modelsSnapshotRaw(initOverrides);
		return await response.value();
	}

	/**
	 * Unloads all available machine learning models that are unloadable.
	 * /models/unload [POST]
	 */
	async unloadModelsRaw(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/models/unload",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 * Unloads all available machine learning models that are unloadable.
	 * /models/unload [POST]
	 */
	async unloadModels(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.unloadModelsRaw(initOverrides);
	}
}
