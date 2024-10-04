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
	SeededScoreIncrementToJSON,
	WorkstreamEventFromJSON,
	WorkstreamEventToJSON,
	type SeededScoreIncrement,
	type WorkstreamEvent,
} from "../models/index.ts";
import * as runtime from "../runtime.ts";

export interface WorkstreamEventAssociateWorkstreamSummaryRequest {
	workstreamEvent: string;
	workstreamSummary: string;
}

export interface WorkstreamEventDisassociateWorkstreamSummaryRequest {
	workstreamEvent: string;
	workstreamSummary: string;
}

export interface WorkstreamEventScoresIncrementRequest {
	workstreamEvent: string;
	seededScoreIncrement?: SeededScoreIncrement;
}

export interface WorkstreamEventUpdateRequest {
	transferables?: boolean;
	workstreamEvent?: WorkstreamEvent;
}

export interface WorkstreamEventsSpecificWorkstreamEventSnapshotRequest {
	workstreamEvent: string;
	transferables?: boolean;
}

/**
 *
 */
export class WorkstreamEventApi extends runtime.BaseAPI {
	/**
	 * This will associate a workstream_event with a workstream summary. This will do the same thing as the workstreamSummary equivalent.
	 * /workstream_event/{workstream_event}/workstream_summaries/associate/{workstream_summary} [POST]
	 */
	async workstreamEventAssociateWorkstreamSummaryRaw(
		requestParameters: WorkstreamEventAssociateWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.workstreamEvent === null ||
			requestParameters.workstreamEvent === undefined
		) {
			throw new runtime.RequiredError(
				"workstreamEvent",
				"Required parameter requestParameters.workstreamEvent was null or undefined when calling workstreamEventAssociateWorkstreamSummary.",
			);
		}

		if (
			requestParameters.workstreamSummary === null ||
			requestParameters.workstreamSummary === undefined
		) {
			throw new runtime.RequiredError(
				"workstreamSummary",
				"Required parameter requestParameters.workstreamSummary was null or undefined when calling workstreamEventAssociateWorkstreamSummary.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/workstream_event/{workstream_event}/workstream_summaries/associate/{workstream_summary}"
					.replace(
						`{${"workstream_event"}}`,
						encodeURIComponent(
							String(requestParameters.workstreamEvent),
						),
					)
					.replace(
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
	 * This will associate a workstream_event with a workstream summary. This will do the same thing as the workstreamSummary equivalent.
	 * /workstream_event/{workstream_event}/workstream_summaries/associate/{workstream_summary} [POST]
	 */
	async workstreamEventAssociateWorkstreamSummary(
		requestParameters: WorkstreamEventAssociateWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.workstreamEventAssociateWorkstreamSummaryRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * This will enable us to disassociate a workstream_event from a workstream summary. This will do the same thing as the workstreamSummary equivalent.
	 * /workstream_event/{workstream_event}/workstream_summaries/disassociate/{workstream_summary} [POST]
	 */
	async workstreamEventDisassociateWorkstreamSummaryRaw(
		requestParameters: WorkstreamEventDisassociateWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.workstreamEvent === null ||
			requestParameters.workstreamEvent === undefined
		) {
			throw new runtime.RequiredError(
				"workstreamEvent",
				"Required parameter requestParameters.workstreamEvent was null or undefined when calling workstreamEventDisassociateWorkstreamSummary.",
			);
		}

		if (
			requestParameters.workstreamSummary === null ||
			requestParameters.workstreamSummary === undefined
		) {
			throw new runtime.RequiredError(
				"workstreamSummary",
				"Required parameter requestParameters.workstreamSummary was null or undefined when calling workstreamEventDisassociateWorkstreamSummary.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/workstream_event/{workstream_event}/workstream_summaries/disassociate/{workstream_summary}"
					.replace(
						`{${"workstream_event"}}`,
						encodeURIComponent(
							String(requestParameters.workstreamEvent),
						),
					)
					.replace(
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
	 * This will enable us to disassociate a workstream_event from a workstream summary. This will do the same thing as the workstreamSummary equivalent.
	 * /workstream_event/{workstream_event}/workstream_summaries/disassociate/{workstream_summary} [POST]
	 */
	async workstreamEventDisassociateWorkstreamSummary(
		requestParameters: WorkstreamEventDisassociateWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.workstreamEventDisassociateWorkstreamSummaryRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
	 * \'/workstream_event/{workstream_event}/scores/increment\' [POST]
	 */
	async workstreamEventScoresIncrementRaw(
		requestParameters: WorkstreamEventScoresIncrementRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.workstreamEvent === null ||
			requestParameters.workstreamEvent === undefined
		) {
			throw new runtime.RequiredError(
				"workstreamEvent",
				"Required parameter requestParameters.workstreamEvent was null or undefined when calling workstreamEventScoresIncrement.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/workstream_event/{workstream_event}/scores/increment".replace(
					`{${"workstream_event"}}`,
					encodeURIComponent(
						String(requestParameters.workstreamEvent),
					),
				),
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SeededScoreIncrementToJSON(
					requestParameters.seededScoreIncrement,
				),
			},
			initOverrides,
		);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
	 * \'/workstream_event/{workstream_event}/scores/increment\' [POST]
	 */
	async workstreamEventScoresIncrement(
		requestParameters: WorkstreamEventScoresIncrementRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.workstreamEventScoresIncrementRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * This will update a specific workstream_event.
	 * /workstream_event/update [POST]
	 */
	async workstreamEventUpdateRaw(
		requestParameters: WorkstreamEventUpdateRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<WorkstreamEvent>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/workstream_event/update",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: WorkstreamEventToJSON(requestParameters.workstreamEvent),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			WorkstreamEventFromJSON(jsonValue),
		);
	}

	/**
	 * This will update a specific workstream_event.
	 * /workstream_event/update [POST]
	 */
	async workstreamEventUpdate(
		requestParameters: WorkstreamEventUpdateRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<WorkstreamEvent> {
		const response = await this.workstreamEventUpdateRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This will get a snapshot of a single workstream_event.
	 * /workstream_event/{workstream_event} [GET]
	 */
	async workstreamEventsSpecificWorkstreamEventSnapshotRaw(
		requestParameters: WorkstreamEventsSpecificWorkstreamEventSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<WorkstreamEvent>> {
		if (
			requestParameters.workstreamEvent === null ||
			requestParameters.workstreamEvent === undefined
		) {
			throw new runtime.RequiredError(
				"workstreamEvent",
				"Required parameter requestParameters.workstreamEvent was null or undefined when calling workstreamEventsSpecificWorkstreamEventSnapshot.",
			);
		}

		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/workstream_event/{workstream_event}".replace(
					`{${"workstream_event"}}`,
					encodeURIComponent(
						String(requestParameters.workstreamEvent),
					),
				),
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			WorkstreamEventFromJSON(jsonValue),
		);
	}

	/**
	 * This will get a snapshot of a single workstream_event.
	 * /workstream_event/{workstream_event} [GET]
	 */
	async workstreamEventsSpecificWorkstreamEventSnapshot(
		requestParameters: WorkstreamEventsSpecificWorkstreamEventSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<WorkstreamEvent> {
		const response =
			await this.workstreamEventsSpecificWorkstreamEventSnapshotRaw(
				requestParameters,
				initOverrides,
			);
		return await response.value();
	}
}
