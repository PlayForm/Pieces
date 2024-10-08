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
	Application,
	Applications,
	DetectedExternalApplications,
	SeededTrackedInteractionEvent,
	SeededTrackedKeyboardEvent,
	Session,
	TrackedApplicationInstall,
	TrackedApplicationUpdate,
	TrackedInteractionEvent,
	TrackedKeyboardEvent,
} from "../models/index.ts";
import {
	ApplicationFromJSON,
	ApplicationToJSON,
	ApplicationsFromJSON,
	DetectedExternalApplicationsFromJSON,
	SeededTrackedInteractionEventToJSON,
	SeededTrackedKeyboardEventToJSON,
	SessionFromJSON,
	TrackedApplicationInstallToJSON,
	TrackedApplicationUpdateToJSON,
	TrackedInteractionEventFromJSON,
	TrackedKeyboardEventFromJSON,
} from "../models/index.ts";
import * as runtime from "../runtime.ts";

export interface ApplicationsRegisterRequest {
	application?: Application;
}

export interface ApplicationsSessionCloseRequest {
	body?: string;
}

export interface ApplicationsSessionSnapshotRequest {
	session: string;
}

export interface ApplicationsSpecificApplicationSnapshotRequest {
	application: string;
}

export interface ApplicationsUsageEngagementInteractionRequest {
	seededTrackedInteractionEvent?: SeededTrackedInteractionEvent;
}

export interface ApplicationsUsageEngagementKeyboardRequest {
	seededTrackedKeyboardEvent?: SeededTrackedKeyboardEvent;
}

export interface ApplicationsUsageInstallationRequest {
	trackedApplicationInstall?: TrackedApplicationInstall;
}

export interface PostApplicationsUsageUpdatedRequest {
	trackedApplicationUpdate?: TrackedApplicationUpdate;
}

/**
 *
 */
export class ApplicationsApi extends runtime.BaseAPI {
	/**
	 * Retrieves a list of external applications installed on the user\'s machine that have potential integrations with Pieces, including those not yet installed by the user and those anticipated to be supported in the future.
	 * /applications/external/related [GET]
	 */
	async applicationsExternalRelatedRaw(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<DetectedExternalApplications>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/applications/external/related",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			DetectedExternalApplicationsFromJSON(jsonValue),
		);
	}

	/**
	 * Retrieves a list of external applications installed on the user\'s machine that have potential integrations with Pieces, including those not yet installed by the user and those anticipated to be supported in the future.
	 * /applications/external/related [GET]
	 */
	async applicationsExternalRelated(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<DetectedExternalApplications> {
		const response =
			await this.applicationsExternalRelatedRaw(initOverrides);
		return await response.value();
	}

	/**
	 * Provides a snapshot of all external applications detected on the user\'s machine, such as Microsoft Teams classic, Google Chat, Obsidian, etc.
	 * /applications/external [GET]
	 */
	async applicationsExternalSnapshotRaw(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<DetectedExternalApplications>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/applications/external",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			DetectedExternalApplicationsFromJSON(jsonValue),
		);
	}

	/**
	 * Provides a snapshot of all external applications detected on the user\'s machine, such as Microsoft Teams classic, Google Chat, Obsidian, etc.
	 * /applications/external [GET]
	 */
	async applicationsExternalSnapshot(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<DetectedExternalApplications> {
		const response =
			await this.applicationsExternalSnapshotRaw(initOverrides);
		return await response.value();
	}

	/**
	 * Registers a new application within the Pieces ecosystem.
	 * /applications/register [POST]
	 * @deprecated
	 */
	async applicationsRegisterRaw(
		requestParameters: ApplicationsRegisterRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Application>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/applications/register",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: ApplicationToJSON(requestParameters.application),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ApplicationFromJSON(jsonValue),
		);
	}

	/**
	 * Registers a new application within the Pieces ecosystem.
	 * /applications/register [POST]
	 * @deprecated
	 */
	async applicationsRegister(
		requestParameters: ApplicationsRegisterRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Application> {
		const response = await this.applicationsRegisterRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Closes an active session, identified by a session UUID, marking the end of the user\'s current interaction with the Pieces application.
	 * /applications/session/close [POST]
	 * @deprecated
	 */
	async applicationsSessionCloseRaw(
		requestParameters: ApplicationsSessionCloseRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Session>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/applications/session/close",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: requestParameters.body as any,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			SessionFromJSON(jsonValue),
		);
	}

	/**
	 * Closes an active session, identified by a session UUID, marking the end of the user\'s current interaction with the Pieces application.
	 * /applications/session/close [POST]
	 * @deprecated
	 */
	async applicationsSessionClose(
		requestParameters: ApplicationsSessionCloseRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Session> {
		const response = await this.applicationsSessionCloseRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Initiates a new session, marking the start of a user\'s interaction with the Pieces application.
	 * /applications/session/open [POST]
	 * @deprecated
	 */
	async applicationsSessionOpenRaw(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Session>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/applications/session/open",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			SessionFromJSON(jsonValue),
		);
	}

	/**
	 * Initiates a new session, marking the start of a user\'s interaction with the Pieces application.
	 * /applications/session/open [POST]
	 * @deprecated
	 */
	async applicationsSessionOpen(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Session> {
		const response = await this.applicationsSessionOpenRaw(initOverrides);
		return await response.value();
	}

	/**
	 * Fetches detailed information about a specific session, identified by a session UUID, including application usage and engagement data.
	 * /applications/sessions/{session} [GET]
	 * @deprecated
	 */
	async applicationsSessionSnapshotRaw(
		requestParameters: ApplicationsSessionSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Session>> {
		if (
			requestParameters.session === null ||
			requestParameters.session === undefined
		) {
			throw new runtime.RequiredError(
				"session",
				"Required parameter requestParameters.session was null or undefined when calling applicationsSessionSnapshot.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/applications/sessions/{session}".replace(
					`{${"session"}}`,
					encodeURIComponent(String(requestParameters.session)),
				),
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			SessionFromJSON(jsonValue),
		);
	}

	/**
	 * Fetches detailed information about a specific session, identified by a session UUID, including application usage and engagement data.
	 * /applications/sessions/{session} [GET]
	 * @deprecated
	 */
	async applicationsSessionSnapshot(
		requestParameters: ApplicationsSessionSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Session> {
		const response = await this.applicationsSessionSnapshotRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Retrieves a comprehensive overview of all applications tracked by the Pieces system, including status, version, and engagement metrics.
	 * /applications [GET]
	 */
	async applicationsSnapshotRaw(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Applications>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/applications",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ApplicationsFromJSON(jsonValue),
		);
	}

	/**
	 * Retrieves a comprehensive overview of all applications tracked by the Pieces system, including status, version, and engagement metrics.
	 * /applications [GET]
	 */
	async applicationsSnapshot(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Applications> {
		const response = await this.applicationsSnapshotRaw(initOverrides);
		return await response.value();
	}

	/**
	 * Obtains a snapshot with information about a specific application, identified by its UUID.
	 * /applications/{application} [GET]
	 */
	async applicationsSpecificApplicationSnapshotRaw(
		requestParameters: ApplicationsSpecificApplicationSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Application>> {
		if (
			requestParameters.application === null ||
			requestParameters.application === undefined
		) {
			throw new runtime.RequiredError(
				"application",
				"Required parameter requestParameters.application was null or undefined when calling applicationsSpecificApplicationSnapshot.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/applications/{application}".replace(
					`{${"application"}}`,
					encodeURIComponent(String(requestParameters.application)),
				),
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ApplicationFromJSON(jsonValue),
		);
	}

	/**
	 * Obtains a snapshot with information about a specific application, identified by its UUID.
	 * /applications/{application} [GET]
	 */
	async applicationsSpecificApplicationSnapshot(
		requestParameters: ApplicationsSpecificApplicationSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Application> {
		const response = await this.applicationsSpecificApplicationSnapshotRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Records user interaction events within applications, such as clicks or taps, to analyze engagement patterns and user behavior.
	 * /applications/usage/engagement/interaction [POST] Scoped to Apps
	 * @deprecated
	 */
	async applicationsUsageEngagementInteractionRaw(
		requestParameters: ApplicationsUsageEngagementInteractionRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<TrackedInteractionEvent>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/applications/usage/engagement/interaction",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SeededTrackedInteractionEventToJSON(
					requestParameters.seededTrackedInteractionEvent,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			TrackedInteractionEventFromJSON(jsonValue),
		);
	}

	/**
	 * Records user interaction events within applications, such as clicks or taps, to analyze engagement patterns and user behavior.
	 * /applications/usage/engagement/interaction [POST] Scoped to Apps
	 * @deprecated
	 */
	async applicationsUsageEngagementInteraction(
		requestParameters: ApplicationsUsageEngagementInteractionRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<TrackedInteractionEvent> {
		const response = await this.applicationsUsageEngagementInteractionRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Captures keyboard interaction events, including shortcuts, within applications to monitor user engagement and productivity enhancements.
	 * /applications/usage/engagement/keyboard [POST] Scoped to Apps
	 * @deprecated
	 */
	async applicationsUsageEngagementKeyboardRaw(
		requestParameters: ApplicationsUsageEngagementKeyboardRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<TrackedKeyboardEvent>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/applications/usage/engagement/keyboard",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SeededTrackedKeyboardEventToJSON(
					requestParameters.seededTrackedKeyboardEvent,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			TrackedKeyboardEventFromJSON(jsonValue),
		);
	}

	/**
	 * Captures keyboard interaction events, including shortcuts, within applications to monitor user engagement and productivity enhancements.
	 * /applications/usage/engagement/keyboard [POST] Scoped to Apps
	 * @deprecated
	 */
	async applicationsUsageEngagementKeyboard(
		requestParameters: ApplicationsUsageEngagementKeyboardRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<TrackedKeyboardEvent> {
		const response = await this.applicationsUsageEngagementKeyboardRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Logs the installation events of the Pieces application.
	 * /applications/usage/installation [POST]
	 * @deprecated
	 */
	async applicationsUsageInstallationRaw(
		requestParameters: ApplicationsUsageInstallationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/applications/usage/installation",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: TrackedApplicationInstallToJSON(
					requestParameters.trackedApplicationInstall,
				),
			},
			initOverrides,
		);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 * Logs the installation events of the Pieces application.
	 * /applications/usage/installation [POST]
	 * @deprecated
	 */
	async applicationsUsageInstallation(
		requestParameters: ApplicationsUsageInstallationRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.applicationsUsageInstallationRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * Tracks updates to the Pieces application, including version changes.
	 * /applications/usage/updated [POST]
	 * @deprecated
	 */
	async postApplicationsUsageUpdatedRaw(
		requestParameters: PostApplicationsUsageUpdatedRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/applications/usage/updated",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: TrackedApplicationUpdateToJSON(
					requestParameters.trackedApplicationUpdate,
				),
			},
			initOverrides,
		);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 * Tracks updates to the Pieces application, including version changes.
	 * /applications/usage/updated [POST]
	 * @deprecated
	 */
	async postApplicationsUsageUpdated(
		requestParameters: PostApplicationsUsageUpdatedRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.postApplicationsUsageUpdatedRaw(
			requestParameters,
			initOverrides,
		);
	}
}
