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

import {
	AnchorPointFromJSON,
	AnchorPointsFromJSON,
	SeededAnchorPointToJSON,
	type AnchorPoint,
	type AnchorPoints,
	type SeededAnchorPoint,
} from "../models/index.ts";
import * as runtime from "../runtime.ts";

export interface AnchorPointsCreateNewAnchorPointRequest {
	transferables?: boolean;
	seededAnchorPoint?: SeededAnchorPoint;
}

export interface AnchorPointsDeleteSpecificAnchorPointRequest {
	anchorPoint: string;
}

export interface AnchorPointsSnapshotRequest {
	transferables?: boolean;
}

/**
 *
 */
export class AnchorPointsApi extends runtime.BaseAPI {
	/**
	 * This will create a anchorPoint.
	 * /anchor_points/create [POST]
	 */
	async anchorPointsCreateNewAnchorPointRaw(
		requestParameters: AnchorPointsCreateNewAnchorPointRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<AnchorPoint>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/anchor_points/create",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SeededAnchorPointToJSON(
					requestParameters.seededAnchorPoint,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			AnchorPointFromJSON(jsonValue),
		);
	}

	/**
	 * This will create a anchorPoint.
	 * /anchor_points/create [POST]
	 */
	async anchorPointsCreateNewAnchorPoint(
		requestParameters: AnchorPointsCreateNewAnchorPointRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<AnchorPoint> {
		const response = await this.anchorPointsCreateNewAnchorPointRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This will delete a specific anchorPoint!
	 * /anchor_points/{anchor_point}/delete [POST]
	 */
	async anchorPointsDeleteSpecificAnchorPointRaw(
		requestParameters: AnchorPointsDeleteSpecificAnchorPointRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchorPoint === null ||
			requestParameters.anchorPoint === undefined
		) {
			throw new runtime.RequiredError(
				"anchorPoint",
				"Required parameter requestParameters.anchorPoint was null or undefined when calling anchorPointsDeleteSpecificAnchorPoint.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor_points/{anchor_point}/delete".replace(
					`{${"anchor_point"}}`,
					encodeURIComponent(String(requestParameters.anchorPoint)),
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
	 * This will delete a specific anchorPoint!
	 * /anchor_points/{anchor_point}/delete [POST]
	 */
	async anchorPointsDeleteSpecificAnchorPoint(
		requestParameters: AnchorPointsDeleteSpecificAnchorPointRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorPointsDeleteSpecificAnchorPointRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * This will get a snapshot of all your anchorPoints.
	 * /anchor_points [GET]
	 */
	async anchorPointsSnapshotRaw(
		requestParameters: AnchorPointsSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<AnchorPoints>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor_points",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			AnchorPointsFromJSON(jsonValue),
		);
	}

	/**
	 * This will get a snapshot of all your anchorPoints.
	 * /anchor_points [GET]
	 */
	async anchorPointsSnapshot(
		requestParameters: AnchorPointsSnapshotRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<AnchorPoints> {
		const response = await this.anchorPointsSnapshotRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}
}
