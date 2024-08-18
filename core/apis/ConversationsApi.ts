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
	Conversation,
	Conversations,
	ConversationsCreateFromAssetOutput,
	FlattenedConversations,
	SearchInput,
	SearchedConversations,
	SeededConversation,
} from "../models/index.ts";
import {
	ConversationFromJSON,
	ConversationsCreateFromAssetOutputFromJSON,
	ConversationsFromJSON,
	FlattenedConversationsFromJSON,
	SearchInputToJSON,
	SearchedConversationsFromJSON,
	SeededConversationToJSON,
} from "../models/index.ts";
import * as runtime from "../runtime.ts";

export interface ConversationsCreateFromAssetRequest {
	asset: string;
}

export interface ConversationsCreateSpecificConversationRequest {
	transferables?: boolean;
	seededConversation?: SeededConversation;
}

export interface ConversationsDeleteSpecificConversationRequest {
	conversation: string;
}

export interface ConversationsSnapshotRequest {
	transferables?: boolean;
}

export interface SearchConversationsRequest {
	transferables?: boolean;
	searchInput?: SearchInput;
}

/**
 *
 */
export class ConversationsApi extends runtime.BaseAPI {
	/**
	 * Creates a conversation based on an asset. It initiates a conversation and generates an initial message that includes a summary of the asset used as contextual grounding.
	 * /conversations/create/from_asset/{asset} [POST]
	 */
	async conversationsCreateFromAssetRaw(
		requestParameters: ConversationsCreateFromAssetRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<ConversationsCreateFromAssetOutput>> {
		if (
			requestParameters.asset === null ||
			requestParameters.asset === undefined
		) {
			throw new runtime.RequiredError(
				"asset",
				"Required parameter requestParameters.asset was null or undefined when calling conversationsCreateFromAsset.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/conversations/create/from_asset/{asset}".replace(
					`{${"asset"}}`,
					encodeURIComponent(String(requestParameters.asset)),
				),
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ConversationsCreateFromAssetOutputFromJSON(jsonValue),
		);
	}

	/**
	 * Creates a conversation based on an asset. It initiates a conversation and generates an initial message that includes a summary of the asset used as contextual grounding.
	 * /conversations/create/from_asset/{asset} [POST]
	 */
	async conversationsCreateFromAsset(
		requestParameters: ConversationsCreateFromAssetRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<ConversationsCreateFromAssetOutput> {
		const response = await this.conversationsCreateFromAssetRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Creates a specific conversation.
	 * /conversations/create [POST]
	 */
	async conversationsCreateSpecificConversationRaw(
		requestParameters: ConversationsCreateSpecificConversationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Conversation>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/conversations/create",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SeededConversationToJSON(
					requestParameters.seededConversation,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ConversationFromJSON(jsonValue),
		);
	}

	/**
	 * Creates a specific conversation.
	 * /conversations/create [POST]
	 */
	async conversationsCreateSpecificConversation(
		requestParameters: ConversationsCreateSpecificConversationRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Conversation> {
		const response = await this.conversationsCreateSpecificConversationRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Deletes a specific conversation.
	 * /conversations/{conversation}/delete [POST]
	 */
	async conversationsDeleteSpecificConversationRaw(
		requestParameters: ConversationsDeleteSpecificConversationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.conversation === null ||
			requestParameters.conversation === undefined
		) {
			throw new runtime.RequiredError(
				"conversation",
				"Required parameter requestParameters.conversation was null or undefined when calling conversationsDeleteSpecificConversation.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/conversations/{conversation}/delete".replace(
					`{${"conversation"}}`,
					encodeURIComponent(String(requestParameters.conversation)),
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
	 * Deletes a specific conversation.
	 * /conversations/{conversation}/delete [POST]
	 */
	async conversationsDeleteSpecificConversation(
		requestParameters: ConversationsDeleteSpecificConversationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.conversationsDeleteSpecificConversationRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * Retrieves all the UUIDs associated with a Conversation.
	 * /conversations/identifiers [GET]
	 */
	async conversationsIdentifiersSnapshotRaw(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<FlattenedConversations>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/conversations/identifiers",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			FlattenedConversationsFromJSON(jsonValue),
		);
	}

	/**
	 * Retrieves all the UUIDs associated with a Conversation.
	 * /conversations/identifiers [GET]
	 */
	async conversationsIdentifiersSnapshot(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<FlattenedConversations> {
		const response =
			await this.conversationsIdentifiersSnapshotRaw(initOverrides);
		return await response.value();
	}

	/**
	 * Retrieves a snapshot of a specific conversation.
	 * /conversations [GET]
	 */
	async conversationsSnapshotRaw(
		requestParameters: ConversationsSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Conversations>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/conversations",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ConversationsFromJSON(jsonValue),
		);
	}

	/**
	 * Retrieves a snapshot of a specific conversation.
	 * /conversations [GET]
	 */
	async conversationsSnapshot(
		requestParameters: ConversationsSnapshotRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Conversations> {
		const response = await this.conversationsSnapshotRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Provides a WebSocket connection that emits changes to your conversation identifiers (UUIDs).
	 * /conversations/stream/identifiers [WS]
	 */
	async conversationsStreamIdentifiersRaw(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/conversations/stream/identifiers",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 * Provides a WebSocket connection that emits changes to your conversation identifiers (UUIDs).
	 * /conversations/stream/identifiers [WS]
	 */
	async conversationsStreamIdentifiers(
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.conversationsStreamIdentifiersRaw(initOverrides);
	}

	/**
	 * This will search your conversations for a specific conversation  note: we will search annotations, the name of the conversation, and the conversation messages
	 * /conversations/search [POST]
	 */
	async searchConversationsRaw(
		requestParameters: SearchConversationsRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<SearchedConversations>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/conversations/search",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SearchInputToJSON(requestParameters.searchInput),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			SearchedConversationsFromJSON(jsonValue),
		);
	}

	/**
	 * This will search your conversations for a specific conversation  note: we will search annotations, the name of the conversation, and the conversation messages
	 * /conversations/search [POST]
	 */
	async searchConversations(
		requestParameters: SearchConversationsRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<SearchedConversations> {
		const response = await this.searchConversationsRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}
}
