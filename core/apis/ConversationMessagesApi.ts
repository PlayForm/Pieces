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
	ConversationMessage,
	ConversationMessages,
	SearchInput,
	SearchedConversationMessages,
	SeededConversationMessage,
} from "../models/index.ts";
import {
	ConversationMessageFromJSON,
	ConversationMessagesFromJSON,
	SearchInputToJSON,
	SearchedConversationMessagesFromJSON,
	SeededConversationMessageToJSON,
} from "../models/index.ts";
import * as runtime from "../runtime.ts";

export interface MessagesCreateSpecificMessageRequest {
	transferables?: boolean;
	seededConversationMessage?: SeededConversationMessage;
}

export interface MessagesDeleteSpecificMessageRequest {
	message: string;
}

export interface MessagesSnapshotRequest {
	transferables?: boolean;
}

export interface SearchMessagesRequest {
	transferables?: boolean;
	searchInput?: SearchInput;
}

/**
 *
 */
export class ConversationMessagesApi extends runtime.BaseAPI {
	/**
	 * This will create a Message on a specific conversation.
	 * /messages/create [POST]
	 */
	async messagesCreateSpecificMessageRaw(
		requestParameters: MessagesCreateSpecificMessageRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<ConversationMessage>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/messages/create",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SeededConversationMessageToJSON(
					requestParameters.seededConversationMessage,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ConversationMessageFromJSON(jsonValue),
		);
	}

	/**
	 * This will create a Message on a specific conversation.
	 * /messages/create [POST]
	 */
	async messagesCreateSpecificMessage(
		requestParameters: MessagesCreateSpecificMessageRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<ConversationMessage> {
		const response = await this.messagesCreateSpecificMessageRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This will delete a specific message.
	 * /messages/{message}/delete [POST]
	 */
	async messagesDeleteSpecificMessageRaw(
		requestParameters: MessagesDeleteSpecificMessageRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.message === null ||
			requestParameters.message === undefined
		) {
			throw new runtime.RequiredError(
				"message",
				"Required parameter requestParameters.message was null or undefined when calling messagesDeleteSpecificMessage.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/messages/{message}/delete".replace(
					`{${"message"}}`,
					encodeURIComponent(String(requestParameters.message)),
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
	 * This will delete a specific message.
	 * /messages/{message}/delete [POST]
	 */
	async messagesDeleteSpecificMessage(
		requestParameters: MessagesDeleteSpecificMessageRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.messagesDeleteSpecificMessageRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * This will get all the messages.
	 * /messages [GET]
	 */
	async messagesSnapshotRaw(
		requestParameters: MessagesSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<ConversationMessages>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/messages",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			ConversationMessagesFromJSON(jsonValue),
		);
	}

	/**
	 * This will get all the messages.
	 * /messages [GET]
	 */
	async messagesSnapshot(
		requestParameters: MessagesSnapshotRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<ConversationMessages> {
		const response = await this.messagesSnapshotRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This will search your conversationMessages for a specific conversation_message  note: we will just search the conversation message values
	 * /messages/search [POST]
	 */
	async searchMessagesRaw(
		requestParameters: SearchMessagesRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<SearchedConversationMessages>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/messages/search",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: SearchInputToJSON(requestParameters.searchInput),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			SearchedConversationMessagesFromJSON(jsonValue),
		);
	}

	/**
	 * This will search your conversationMessages for a specific conversation_message  note: we will just search the conversation message values
	 * /messages/search [POST]
	 */
	async searchMessages(
		requestParameters: SearchMessagesRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<SearchedConversationMessages> {
		const response = await this.searchMessagesRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}
}
