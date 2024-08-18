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
	SearchInput,
	SearchedWorkstreamSummaries,
	SeededWorkstreamSummary,
	WorkstreamSummaries,
	WorkstreamSummary,
} from "../models/index.ts";
import {
	SearchInputToJSON,
	SearchedWorkstreamSummariesFromJSON,
	SeededWorkstreamSummaryToJSON,
	WorkstreamSummariesFromJSON,
	WorkstreamSummaryFromJSON,
} from "../models/index.ts";
import * as runtime from "../runtime.ts";

export interface SearchWorkstreamSummariesRequest {
	transferables?: boolean;
	searchInput?: SearchInput;
}

export interface WorkstreamSummariesCreateNewWorkstreamSummaryRequest {
	transferables?: boolean;
	seededWorkstreamSummary?: SeededWorkstreamSummary;
}

export interface WorkstreamSummariesDeleteSpecificWorkstreamSummaryRequest {
	workstreamSummary: string;
}

export interface WorkstreamSummariesSnapshotRequest {
	transferables?: boolean;
}

/**
 *
 */
export class WorkstreamSummariesApi extends runtime.BaseAPI {
	/**
	 * This will search your workstream_summaries for a specific workstream_summary  note: we will just search the summary value(which is an annotation)
	 * /workstream_summaries/search [POST]
	 */
	async searchWorkstreamSummariesRaw(
		requestParameters: SearchWorkstreamSummariesRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<SearchedWorkstreamSummaries>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/workstream_summaries/search",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SearchInputToJSON(requestParameters.searchInput),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			SearchedWorkstreamSummariesFromJSON(jsonValue),
		);
	}

	/**
	 * This will search your workstream_summaries for a specific workstream_summary  note: we will just search the summary value(which is an annotation)
	 * /workstream_summaries/search [POST]
	 */
	async searchWorkstreamSummaries(
		requestParameters: SearchWorkstreamSummariesRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<SearchedWorkstreamSummaries> {
		const response = await this.searchWorkstreamSummariesRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This will create a new WorkstreamSummary in the database.
	 * /workstream_summaries/create [POST]
	 */
	async workstreamSummariesCreateNewWorkstreamSummaryRaw(
		requestParameters: WorkstreamSummariesCreateNewWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<WorkstreamSummary>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/workstream_summaries/create",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SeededWorkstreamSummaryToJSON(
					requestParameters.seededWorkstreamSummary,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			WorkstreamSummaryFromJSON(jsonValue),
		);
	}

	/**
	 * This will create a new WorkstreamSummary in the database.
	 * /workstream_summaries/create [POST]
	 */
	async workstreamSummariesCreateNewWorkstreamSummary(
		requestParameters: WorkstreamSummariesCreateNewWorkstreamSummaryRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<WorkstreamSummary> {
		const response =
			await this.workstreamSummariesCreateNewWorkstreamSummaryRaw(
				requestParameters,
				initOverrides,
			);
		return await response.value();
	}

	/**
	 * This will delete a specific workstream_summary from the database!
	 * /workstream_summaries/{workstream_summary}/delete [POST]
	 */
	async workstreamSummariesDeleteSpecificWorkstreamSummaryRaw(
		requestParameters: WorkstreamSummariesDeleteSpecificWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.workstreamSummary === null ||
			requestParameters.workstreamSummary === undefined
		) {
			throw new runtime.RequiredError(
				"workstreamSummary",
				"Required parameter requestParameters.workstreamSummary was null or undefined when calling workstreamSummariesDeleteSpecificWorkstreamSummary.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/workstream_summaries/{workstream_summary}/delete".replace(
					`{${"workstream_summary"}}`,
					encodeURIComponent(
						String(requestParameters.workstreamSummary),
					),
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
	 * This will delete a specific workstream_summary from the database!
	 * /workstream_summaries/{workstream_summary}/delete [POST]
	 */
	async workstreamSummariesDeleteSpecificWorkstreamSummary(
		requestParameters: WorkstreamSummariesDeleteSpecificWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.workstreamSummariesDeleteSpecificWorkstreamSummaryRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * This will get a snapshot of all your workstream summaries.
	 * /workstream_summaries [GET]
	 */
	async workstreamSummariesSnapshotRaw(
		requestParameters: WorkstreamSummariesSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<WorkstreamSummaries>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/workstream_summaries",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			WorkstreamSummariesFromJSON(jsonValue),
		);
	}

	/**
	 * This will get a snapshot of all your workstream summaries.
	 * /workstream_summaries [GET]
	 */
	async workstreamSummariesSnapshot(
		requestParameters: WorkstreamSummariesSnapshotRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<WorkstreamSummaries> {
		const response = await this.workstreamSummariesSnapshotRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}
}
