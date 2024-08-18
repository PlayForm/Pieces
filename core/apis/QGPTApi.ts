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
	QGPTHintsInput,
	QGPTPersonsRelatedInput,
	QGPTPersonsRelatedOutput,
	QGPTQuestionInput,
	QGPTQuestionOutput,
	QGPTRelevanceInput,
	QGPTRelevanceOutput,
	QGPTRepromptInput,
	QGPTRepromptOutput,
	QGPTStreamInput,
	QGPTStreamOutput,
} from "../models/index.ts";
import {
	QGPTHintsInputToJSON,
	QGPTPersonsRelatedInputToJSON,
	QGPTPersonsRelatedOutputFromJSON,
	QGPTQuestionInputToJSON,
	QGPTQuestionOutputFromJSON,
	QGPTRelevanceInputToJSON,
	QGPTRelevanceOutputFromJSON,
	QGPTRepromptInputToJSON,
	QGPTRepromptOutputFromJSON,
	QGPTStreamInputToJSON,
	QGPTStreamOutputFromJSON,
} from "../models/index.ts";
import * as runtime from "../runtime.ts";

export interface HintsRequest {
	qGPTHintsInput?: QGPTHintsInput;
}

export interface PersonsRelatedRequest {
	transferables?: boolean;
	qGPTPersonsRelatedInput?: QGPTPersonsRelatedInput;
}

export interface QgptStreamRequest {
	qGPTStreamInput?: QGPTStreamInput;
}

export interface QuestionRequest {
	qGPTQuestionInput?: QGPTQuestionInput;
}

export interface RelevanceRequest {
	qGPTRelevanceInput?: QGPTRelevanceInput;
}

export interface RepromptRequest {
	qGPTRepromptInput?: QGPTRepromptInput;
}

/**
 *
 */
export class QGPTApi extends runtime.BaseAPI {
	/**
	 * Generates suggested questions that users can ask. It accepts the answer displayed to the user, relevant code snippets used for the answer, and the previous query as inputs. In return, it provides a list of questions that can be presented to the user.
	 * /qgpt/hints [POST]
	 */
	async hintsRaw(
		requestParameters: HintsRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<QGPTQuestionOutput>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/qgpt/hints",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: QGPTHintsInputToJSON(requestParameters.qGPTHintsInput),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			QGPTQuestionOutputFromJSON(jsonValue),
		);
	}

	/**
	 * Generates suggested questions that users can ask. It accepts the answer displayed to the user, relevant code snippets used for the answer, and the previous query as inputs. In return, it provides a list of questions that can be presented to the user.
	 * /qgpt/hints [POST]
	 */
	async hints(
		requestParameters: HintsRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<QGPTQuestionOutput> {
		const response = await this.hintsRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	 * Utilize this endpoint for Who Support, identifying individuals who can provide assistance when given context such as a Seed or a QGPT Conversation, for example.  Input:   - (optional) seed: Seed - Only supports fragments for now.   - (optional) conversation: QGPTConversation.  Output:   - persons: Persons
	 * /qgpt/persons/related [POST]
	 */
	async personsRelatedRaw(
		requestParameters: PersonsRelatedRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<QGPTPersonsRelatedOutput>> {
		const queryParameters: any = {};

		if (requestParameters.transferables !== undefined) {
			queryParameters["transferables"] = requestParameters.transferables;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/qgpt/persons/related",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: QGPTPersonsRelatedInputToJSON(
					requestParameters.qGPTPersonsRelatedInput,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			QGPTPersonsRelatedOutputFromJSON(jsonValue),
		);
	}

	/**
	 * Utilize this endpoint for Who Support, identifying individuals who can provide assistance when given context such as a Seed or a QGPT Conversation, for example.  Input:   - (optional) seed: Seed - Only supports fragments for now.   - (optional) conversation: QGPTConversation.  Output:   - persons: Persons
	 * /qgpt/persons/related [POST]
	 */
	async personsRelated(
		requestParameters: PersonsRelatedRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<QGPTPersonsRelatedOutput> {
		const response = await this.personsRelatedRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Provides a WebSocket connection that streams inputs to the qGPT model. It handles relevance and questions, but will throw an error if both are passed in simultaneously. However, if you wish to utilize both question and relevance, you can obtain stream results by passing relevance with the option \'question:true\'. It is designed to manage multiple conversations.
	 * /qgpt/stream [WS]
	 */
	async qgptStreamRaw(
		requestParameters: QgptStreamRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<QGPTStreamOutput>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/qgpt/stream",
				method: "GET",
				headers: headerParameters,
				query: queryParameters,
				body: QGPTStreamInputToJSON(requestParameters.qGPTStreamInput),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			QGPTStreamOutputFromJSON(jsonValue),
		);
	}

	/**
	 * Provides a WebSocket connection that streams inputs to the qGPT model. It handles relevance and questions, but will throw an error if both are passed in simultaneously. However, if you wish to utilize both question and relevance, you can obtain stream results by passing relevance with the option \'question:true\'. It is designed to manage multiple conversations.
	 * /qgpt/stream [WS]
	 */
	async qgptStream(
		requestParameters: QgptStreamRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<QGPTStreamOutput> {
		const response = await this.qgptStreamRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * Processes relevant code snippets or UUIDs returned from the /qgpt/relevance endpoint, along with a question query, to provide possible answers.  Note:   - Relevant seeds must either include an ID used within the /qgpt/relevance endpoint or a seed with a fragment/string; otherwise, an error will be thrown.   - This endpoint utilizes your query and relevant snippets to generate multiple answers, each accompanied by a score.
	 * /qgpt/question [POST]
	 */
	async questionRaw(
		requestParameters: QuestionRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<QGPTQuestionOutput>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/qgpt/question",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: QGPTQuestionInputToJSON(
					requestParameters.qGPTQuestionInput,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			QGPTQuestionOutputFromJSON(jsonValue),
		);
	}

	/**
	 * Processes relevant code snippets or UUIDs returned from the /qgpt/relevance endpoint, along with a question query, to provide possible answers.  Note:   - Relevant seeds must either include an ID used within the /qgpt/relevance endpoint or a seed with a fragment/string; otherwise, an error will be thrown.   - This endpoint utilizes your query and relevant snippets to generate multiple answers, each accompanied by a score.
	 * /qgpt/question [POST]
	 */
	async question(
		requestParameters: QuestionRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<QGPTQuestionOutput> {
		const response = await this.questionRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This is the first phase to the QGPT flow.  Please one of the following. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  required - query: string; This is the question of the user. optional - question: boolean; This will by-pass the second endpoint and just ask the question and return the results(as an ease of use bool)  This endpoint will embed everything. and will return the relevance snippets that we will use in the next phase, to answer your question.  on the UI: we can show this to users (around this is the snippets we used to answer your question.)  Next: feed this information to the /qgpt/question [POST] endpoint to get your question answered.(unless you included the question:true optional boolean, then you will get the results from here.)
	 * /qgpt/relevance [POST]
	 */
	async relevanceRaw(
		requestParameters: RelevanceRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<QGPTRelevanceOutput>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/qgpt/relevance",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: QGPTRelevanceInputToJSON(
					requestParameters.qGPTRelevanceInput,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			QGPTRelevanceOutputFromJSON(jsonValue),
		);
	}

	/**
	 * This is the first phase to the QGPT flow.  Please one of the following. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  required - query: string; This is the question of the user. optional - question: boolean; This will by-pass the second endpoint and just ask the question and return the results(as an ease of use bool)  This endpoint will embed everything. and will return the relevance snippets that we will use in the next phase, to answer your question.  on the UI: we can show this to users (around this is the snippets we used to answer your question.)  Next: feed this information to the /qgpt/question [POST] endpoint to get your question answered.(unless you included the question:true optional boolean, then you will get the results from here.)
	 * /qgpt/relevance [POST]
	 */
	async relevance(
		requestParameters: RelevanceRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<QGPTRelevanceOutput> {
		const response = await this.relevanceRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}

	/**
	 * This will take in a followup question and the history of the conversation, and emit your a prompt or query that you can pass to the /qgpt/relevance and then the /qgpt/question endpoint to get your next answer.
	 * /qgpt/reprompt [POST]
	 */
	async repromptRaw(
		requestParameters: RepromptRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<runtime.ApiResponse<QGPTRepromptOutput>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: "/qgpt/reprompt",
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: QGPTRepromptInputToJSON(
					requestParameters.qGPTRepromptInput,
				),
			},
			initOverrides,
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			QGPTRepromptOutputFromJSON(jsonValue),
		);
	}

	/**
	 * This will take in a followup question and the history of the conversation, and emit your a prompt or query that you can pass to the /qgpt/relevance and then the /qgpt/question endpoint to get your next answer.
	 * /qgpt/reprompt [POST]
	 */
	async reprompt(
		requestParameters: RepromptRequest = {},
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<QGPTRepromptOutput> {
		const response = await this.repromptRaw(
			requestParameters,
			initOverrides,
		);
		return await response.value();
	}
}
