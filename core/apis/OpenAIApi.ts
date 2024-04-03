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
  OpenAIModelsListInput,
  OpenAIModelsListOutput,
} from '../models/index';
import {
    OpenAIModelsListInputFromJSON,
    OpenAIModelsListInputToJSON,
    OpenAIModelsListOutputFromJSON,
    OpenAIModelsListOutputToJSON,
} from '../models/index';

export interface OpenAiModelsListRequest {
    openAIModelsListInput?: OpenAIModelsListInput;
}

/**
 * 
 */
export class OpenAIApi extends runtime.BaseAPI {

    /**
     * This will get a list of all of your Models from OpenAI w/ you user.auth0.openAI.apiKey.  if the user is unauthenticated or if the openAI key doesnt exist or if it is invalid we will return a 401.  Requires internet as this will ping out to OpenAI\'s server to get the models.
     * /open_ai/models/list [POST]
     */
    async openAiModelsListRaw(requestParameters: OpenAiModelsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OpenAIModelsListOutput>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/open_ai/models/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OpenAIModelsListInputToJSON(requestParameters['openAIModelsListInput']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OpenAIModelsListOutputFromJSON(jsonValue));
    }

    /**
     * This will get a list of all of your Models from OpenAI w/ you user.auth0.openAI.apiKey.  if the user is unauthenticated or if the openAI key doesnt exist or if it is invalid we will return a 401.  Requires internet as this will ping out to OpenAI\'s server to get the models.
     * /open_ai/models/list [POST]
     */
    async openAiModelsList(requestParameters: OpenAiModelsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OpenAIModelsListOutput> {
        const response = await this.openAiModelsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
