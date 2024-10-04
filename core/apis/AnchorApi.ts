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
	AnchorFromJSON,
	AnchorToJSON,
	SeededScoreIncrementToJSON,
	type Anchor,
	type SeededScoreIncrement,
} from "../models/index.ts";
import * as runtime from "../runtime.ts";

export interface AnchorAssociateAssetRequest {
	anchor: string;
	asset: string;
}

export interface AnchorAssociateConversationRequest {
	anchor: string;
	conversation: string;
}

export interface AnchorAssociatePersonRequest {
	anchor: string;
	person: string;
}

export interface AnchorAssociateWorkstreamSummaryRequest {
	anchor: string;
	workstreamSummary: string;
}

export interface AnchorDisassociateAssetRequest {
	anchor: string;
	asset: string;
}

export interface AnchorDisassociateConversationRequest {
	anchor: string;
	conversation: string;
}

export interface AnchorDisassociatePersonRequest {
	anchor: string;
	person: string;
}

export interface AnchorDisassociateWorkstreamSummaryRequest {
	anchor: string;
	workstreamSummary: string;
}

export interface AnchorRenameRequest {
	anchor: string;
	transferables?: boolean;
}

export interface AnchorScoresIncrementRequest {
	anchor: string;
	seededScoreIncrement?: SeededScoreIncrement;
}

export interface AnchorSpecificAnchorSnapshotRequest {
	anchor: string;
	transferables?: boolean;
}

export interface AnchorUpdateRequest {
	transferables?: boolean;
	anchor?: Anchor;
}

/**
 *
 */
export class AnchorApi extends runtime.BaseAPI {
	/**
	 * associates an anchor and an asset. It performs the same action as the asset equivalent.
	 * /anchor/{anchor}/assets/associate/{asset} [POST]
	 */
	async anchorAssociateAssetRaw(
		requestParameters: AnchorAssociateAssetRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorAssociateAsset.",
			);
		}

		if (
			requestParameters.asset === null ||
			requestParameters.asset === undefined
		) {
			throw new runtime.RequiredError(
				"asset",
				"Required parameter requestParameters.asset was null or undefined when calling anchorAssociateAsset.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}/assets/associate/{asset}"
					.replace(
						`{${"anchor"}}`,
						encodeURIComponent(String(requestParameters.anchor)),
					)
					.replace(
						`{${"asset"}}`,
						encodeURIComponent(String(requestParameters.asset)),
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
	 * associates an anchor and an asset. It performs the same action as the asset equivalent.
	 * /anchor/{anchor}/assets/associate/{asset} [POST]
	 */
	async anchorAssociateAsset(
		requestParameters: AnchorAssociateAssetRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorAssociateAssetRaw(requestParameters, initOverrides);
	}

	/**
	 * associates an anchor and a conversation. It performs the same action as the conversation equivalent.
	 * /anchor/{anchor}/conversations/associate/{conversation} [POST]
	 */
	async anchorAssociateConversationRaw(
		requestParameters: AnchorAssociateConversationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorAssociateConversation.",
			);
		}

		if (
			requestParameters.conversation === null ||
			requestParameters.conversation === undefined
		) {
			throw new runtime.RequiredError(
				"conversation",
				"Required parameter requestParameters.conversation was null or undefined when calling anchorAssociateConversation.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}/conversations/associate/{conversation}"
					.replace(
						`{${"anchor"}}`,
						encodeURIComponent(String(requestParameters.anchor)),
					)
					.replace(
						`{${"conversation"}}`,
						encodeURIComponent(
							String(requestParameters.conversation),
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
	 * associates an anchor and a conversation. It performs the same action as the conversation equivalent.
	 * /anchor/{anchor}/conversations/associate/{conversation} [POST]
	 */
	async anchorAssociateConversation(
		requestParameters: AnchorAssociateConversationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorAssociateConversationRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * associates an anchor and a person. It performs the same action as the person equivalent.
	 * /anchor/{anchor}/persons/associate/{person} [POST]
	 */
	async anchorAssociatePersonRaw(
		requestParameters: AnchorAssociatePersonRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorAssociatePerson.",
			);
		}

		if (
			requestParameters.person === null ||
			requestParameters.person === undefined
		) {
			throw new runtime.RequiredError(
				"person",
				"Required parameter requestParameters.person was null or undefined when calling anchorAssociatePerson.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}/persons/associate/{person}"
					.replace(
						`{${"anchor"}}`,
						encodeURIComponent(String(requestParameters.anchor)),
					)
					.replace(
						`{${"person"}}`,
						encodeURIComponent(String(requestParameters.person)),
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
	 * associates an anchor and a person. It performs the same action as the person equivalent.
	 * /anchor/{anchor}/persons/associate/{person} [POST]
	 */
	async anchorAssociatePerson(
		requestParameters: AnchorAssociatePersonRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorAssociatePersonRaw(requestParameters, initOverrides);
	}

	/**
	 * This will associate a anchor with a workstream summary. This will do the same thing as the workstreamSummary equivalent.
	 * /anchor/{anchor}/workstream_summaries/associate/{workstream_summary} [POST]
	 */
	async anchorAssociateWorkstreamSummaryRaw(
		requestParameters: AnchorAssociateWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorAssociateWorkstreamSummary.",
			);
		}

		if (
			requestParameters.workstreamSummary === null ||
			requestParameters.workstreamSummary === undefined
		) {
			throw new runtime.RequiredError(
				"workstreamSummary",
				"Required parameter requestParameters.workstreamSummary was null or undefined when calling anchorAssociateWorkstreamSummary.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}/workstream_summaries/associate/{workstream_summary}"
					.replace(
						`{${"anchor"}}`,
						encodeURIComponent(String(requestParameters.anchor)),
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
	 * This will associate a anchor with a workstream summary. This will do the same thing as the workstreamSummary equivalent.
	 * /anchor/{anchor}/workstream_summaries/associate/{workstream_summary} [POST]
	 */
	async anchorAssociateWorkstreamSummary(
		requestParameters: AnchorAssociateWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorAssociateWorkstreamSummaryRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * Disassociates an anchor from an asset. It performs the same action as the asset equivalent.
	 * /anchor/{anchor}/assets/disassociate/{asset} [POST]
	 */
	async anchorDisassociateAssetRaw(
		requestParameters: AnchorDisassociateAssetRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorDisassociateAsset.",
			);
		}

		if (
			requestParameters.asset === null ||
			requestParameters.asset === undefined
		) {
			throw new runtime.RequiredError(
				"asset",
				"Required parameter requestParameters.asset was null or undefined when calling anchorDisassociateAsset.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}/assets/disassociate/{asset}"
					.replace(
						`{${"anchor"}}`,
						encodeURIComponent(String(requestParameters.anchor)),
					)
					.replace(
						`{${"asset"}}`,
						encodeURIComponent(String(requestParameters.asset)),
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
	 * Disassociates an anchor from an asset. It performs the same action as the asset equivalent.
	 * /anchor/{anchor}/assets/disassociate/{asset} [POST]
	 */
	async anchorDisassociateAsset(
		requestParameters: AnchorDisassociateAssetRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorDisassociateAssetRaw(requestParameters, initOverrides);
	}

	/**
	 * Disassociates an anchor from a conversation. It performs the same action as the conversation equivalent.
	 * /anchor/{anchor}/conversations/disassociate/{conversation} [POST]
	 */
	async anchorDisassociateConversationRaw(
		requestParameters: AnchorDisassociateConversationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorDisassociateConversation.",
			);
		}

		if (
			requestParameters.conversation === null ||
			requestParameters.conversation === undefined
		) {
			throw new runtime.RequiredError(
				"conversation",
				"Required parameter requestParameters.conversation was null or undefined when calling anchorDisassociateConversation.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}/conversations/disassociate/{conversation}"
					.replace(
						`{${"anchor"}}`,
						encodeURIComponent(String(requestParameters.anchor)),
					)
					.replace(
						`{${"conversation"}}`,
						encodeURIComponent(
							String(requestParameters.conversation),
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
	 * Disassociates an anchor from a conversation. It performs the same action as the conversation equivalent.
	 * /anchor/{anchor}/conversations/disassociate/{conversation} [POST]
	 */
	async anchorDisassociateConversation(
		requestParameters: AnchorDisassociateConversationRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorDisassociateConversationRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * Disassociates an anchor from a person. It performs the same action as the person equivalent.
	 * /anchor/{anchor}/persons/disassociate/{person} [POST]
	 */
	async anchorDisassociatePersonRaw(
		requestParameters: AnchorDisassociatePersonRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorDisassociatePerson.",
			);
		}

		if (
			requestParameters.person === null ||
			requestParameters.person === undefined
		) {
			throw new runtime.RequiredError(
				"person",
				"Required parameter requestParameters.person was null or undefined when calling anchorDisassociatePerson.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}/persons/disassociate/{person}"
					.replace(
						`{${"anchor"}}`,
						encodeURIComponent(String(requestParameters.anchor)),
					)
					.replace(
						`{${"person"}}`,
						encodeURIComponent(String(requestParameters.person)),
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
	 * Disassociates an anchor from a person. It performs the same action as the person equivalent.
	 * /anchor/{anchor}/persons/disassociate/{person} [POST]
	 */
	async anchorDisassociatePerson(
		requestParameters: AnchorDisassociatePersonRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorDisassociatePersonRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * This will enable us to disassociate a anchor from a workstream summary. This will do the same thing as the workstreamSummary equivalent.
	 * /anchor/{anchor}/workstream_summaries/disassociate/{workstream_summary} [POST]
	 */
	async anchorDisassociateWorkstreamSummaryRaw(
		requestParameters: AnchorDisassociateWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorDisassociateWorkstreamSummary.",
			);
		}

		if (
			requestParameters.workstreamSummary === null ||
			requestParameters.workstreamSummary === undefined
		) {
			throw new runtime.RequiredError(
				"workstreamSummary",
				"Required parameter requestParameters.workstreamSummary was null or undefined when calling anchorDisassociateWorkstreamSummary.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}/workstream_summaries/disassociate/{workstream_summary}"
					.replace(
						`{${"anchor"}}`,
						encodeURIComponent(String(requestParameters.anchor)),
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
	 * This will enable us to disassociate a anchor from a workstream summary. This will do the same thing as the workstreamSummary equivalent.
	 * /anchor/{anchor}/workstream_summaries/disassociate/{workstream_summary} [POST]
	 */
	async anchorDisassociateWorkstreamSummary(
		requestParameters: AnchorDisassociateWorkstreamSummaryRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorDisassociateWorkstreamSummaryRaw(
			requestParameters,
			initOverrides,
		);
	}

	/**
	 * This will rename a specific anchor.
	 * /anchor/{anchor}/rename [POST]
	 */
	async anchorRenameRaw(
		requestParameters: AnchorRenameRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Anchor>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorRename.",
			);
		}

		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}/rename".replace(
					`{${"anchor"}}`,
					encodeURIComponent(String(requestParameters.anchor)),
				),
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			AnchorFromJSON(jsonValue),
		);
	}

	/**
	 * This will rename a specific anchor.
	 * /anchor/{anchor}/rename [POST]
	 */
	async anchorRename(
		requestParameters: AnchorRenameRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Anchor> {
		const response = await this.anchorRenameRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
	 * \'/anchor/{anchor}/scores/increment\' [POST]
	 */
	async anchorScoresIncrementRaw(
		requestParameters: AnchorScoresIncrementRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<void>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorScoresIncrement.",
			);
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/anchor/{anchor}/scores/increment".replace(
					`{${"anchor"}}`,
					encodeURIComponent(String(requestParameters.anchor)),
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
	 * \'/anchor/{anchor}/scores/increment\' [POST]
	 */
	async anchorScoresIncrement(
		requestParameters: AnchorScoresIncrementRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<void> {
		await this.anchorScoresIncrementRaw(requestParameters, initOverrides);
	}

	/**
	 * This will get a snapshot of a single anchor.
	 * /anchor/{anchor} [GET]
	 */
	async anchorSpecificAnchorSnapshotRaw(
		requestParameters: AnchorSpecificAnchorSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Anchor>> {
		if (
			requestParameters.anchor === null ||
			requestParameters.anchor === undefined
		) {
			throw new runtime.RequiredError(
				"anchor",
				"Required parameter requestParameters.anchor was null or undefined when calling anchorSpecificAnchorSnapshot.",
			);
		}

		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		const response = await this.request(
			{
				path: "/anchor/{anchor}".replace(
					`{${"anchor"}}`,
					encodeURIComponent(String(requestParameters.anchor)),
				),
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			AnchorFromJSON(jsonValue),
		);
	}

	/**
	 * This will get a snapshot of a single anchor.
	 * /anchor/{anchor} [GET]
	 */
	async anchorSpecificAnchorSnapshot(
		requestParameters: AnchorSpecificAnchorSnapshotRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Anchor> {
		const response = await this.anchorSpecificAnchorSnapshotRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This will update a specific anchor.
	 * /anchor/update [POST]
	 */
	async anchorUpdateRaw(
		requestParameters: AnchorUpdateRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<Anchor>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/anchor/update",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: AnchorToJSON(requestParameters.anchor),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			AnchorFromJSON(jsonValue),
		);
	}

	/**
	 * This will update a specific anchor.
	 * /anchor/update [POST]
	 */
	async anchorUpdate(
		requestParameters: AnchorUpdateRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<Anchor> {
		const response = await this.anchorUpdateRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}
}
