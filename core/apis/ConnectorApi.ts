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
  Context,
  Reaction,
  SeededConnectorAsset,
  SeededConnectorConnection,
  SeededConnectorCreation,
  SeededConnectorTracking,
  Suggestion,
} from '../models/index';
import {
    ContextFromJSON,
    ContextToJSON,
    ReactionFromJSON,
    ReactionToJSON,
    SeededConnectorAssetFromJSON,
    SeededConnectorAssetToJSON,
    SeededConnectorConnectionFromJSON,
    SeededConnectorConnectionToJSON,
    SeededConnectorCreationFromJSON,
    SeededConnectorCreationToJSON,
    SeededConnectorTrackingFromJSON,
    SeededConnectorTrackingToJSON,
    SuggestionFromJSON,
    SuggestionToJSON,
} from '../models/index';

export interface ConnectRequest {
    seededConnectorConnection?: SeededConnectorConnection;
}

export interface IntentionRequest {
    application: string;
    seededConnectorAsset?: SeededConnectorAsset;
}

export interface OnboardedRequest {
    application: string;
    body?: boolean;
}

export interface ReactRequest {
    application: string;
    reaction?: Reaction;
}

export interface SuggestRequest {
    application: string;
    seededConnectorCreation?: SeededConnectorCreation;
}

export interface TrackRequest {
    application: string;
    seededConnectorTracking?: SeededConnectorTracking;
}

/**
 * 
 */
export class ConnectorApi extends runtime.BaseAPI {

    /**
     * An endpoint which abstracts a bootup/connection for a specific context
     * /connect [POST]
     */
    async connectRaw(requestParameters: ConnectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Context>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/connect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededConnectorConnectionToJSON(requestParameters['seededConnectorConnection']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContextFromJSON(jsonValue));
    }

    /**
     * An endpoint which abstracts a bootup/connection for a specific context
     * /connect [POST]
     */
    async connect(requestParameters: ConnectRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Context> {
        const response = await this.connectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This can be used to send a SeededAsset over that you may use to compair in the future.
     * /{application}/intention [POST]
     */
    async intentionRaw(requestParameters: IntentionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['application'] == null) {
            throw new runtime.RequiredError(
                'application',
                'Required parameter "application" was null or undefined when calling intention().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/{application}/intention`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters['application']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededConnectorAssetToJSON(requestParameters['seededConnectorAsset']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * This can be used to send a SeededAsset over that you may use to compair in the future.
     * /{application}/intention [POST]
     */
    async intention(requestParameters: IntentionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.intentionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * A consolidation endpoint to handle the updating of an onboarding process.
     * /onboarded [POST]
     */
    async onboardedRaw(requestParameters: OnboardedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['application'] == null) {
            throw new runtime.RequiredError(
                'application',
                'Required parameter "application" was null or undefined when calling onboarded().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/{application}/onboarded`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters['application']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * A consolidation endpoint to handle the updating of an onboarding process.
     * /onboarded [POST]
     */
    async onboarded(requestParameters: OnboardedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.onboardedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will react to the response returned from the /suggest endpoint. 
     * /{application}/reaction [POST]
     */
    async reactRaw(requestParameters: ReactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['application'] == null) {
            throw new runtime.RequiredError(
                'application',
                'Required parameter "application" was null or undefined when calling react().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/{application}/reaction`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters['application']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReactionToJSON(requestParameters['reaction']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * This will react to the response returned from the /suggest endpoint. 
     * /{application}/reaction [POST]
     */
    async react(requestParameters: ReactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.reactRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This can and should be called everytime a snippet is coppied from an integration. IE A Jetbrains user coppies some code, then this end point can get called to weigh if we want to suggest a piece to be reused (if reuse is true we should provide asset that the user may want to use) or saved or neither.   **Note: Could potentially accept a SeededFormat for the request body if we want.  TODO potentially just make this a get endpoint. (because we are trying to retireve data.
     * /{application}/suggestion [POST]
     */
    async suggestRaw(requestParameters: SuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggestion>> {
        if (requestParameters['application'] == null) {
            throw new runtime.RequiredError(
                'application',
                'Required parameter "application" was null or undefined when calling suggest().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/{application}/suggestion`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters['application']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededConnectorCreationToJSON(requestParameters['seededConnectorCreation']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuggestionFromJSON(jsonValue));
    }

    /**
     * This can and should be called everytime a snippet is coppied from an integration. IE A Jetbrains user coppies some code, then this end point can get called to weigh if we want to suggest a piece to be reused (if reuse is true we should provide asset that the user may want to use) or saved or neither.   **Note: Could potentially accept a SeededFormat for the request body if we want.  TODO potentially just make this a get endpoint. (because we are trying to retireve data.
     * /{application}/suggestion [POST]
     */
    async suggest(requestParameters: SuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggestion> {
        const response = await this.suggestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis
     * /{application}/track [POST]
     */
    async trackRaw(requestParameters: TrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['application'] == null) {
            throw new runtime.RequiredError(
                'application',
                'Required parameter "application" was null or undefined when calling track().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/{application}/track`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters['application']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededConnectorTrackingToJSON(requestParameters['seededConnectorTracking']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis
     * /{application}/track [POST]
     */
    async track(requestParameters: TrackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.trackRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
