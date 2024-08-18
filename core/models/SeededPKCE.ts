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

import { exists } from "../runtime.ts";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { SeededPKCEADDITIONALPARAMETERS } from "./SeededPKCEADDITIONALPARAMETERS.tsx";
import {
	SeededPKCEADDITIONALPARAMETERSFromJSON,
	SeededPKCEADDITIONALPARAMETERSToJSON,
} from "./SeededPKCEADDITIONALPARAMETERS.tsx";

/**
 * A model that initialized a PKCE Authentication Flow.
 * @export
 * @interface SeededPKCE
 */
export interface SeededPKCE {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededPKCE
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow.
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	responseType: SeededPKCEResponseTypeEnum;
	/**
	 * An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks.
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	state: string;
	/**
	 * A local key that is held as the comparator to state, thus they should be the same.
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	nonce: string;
	/**
	 * http://localhost:8080/authentication/response
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	redirectUri?: string;
	/**
	 * Generated challenge from the code_verifier.
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	codeChallenge: string;
	/**
	 * Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged.
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	codeChallengeMethod: SeededPKCECodeChallengeMethodEnum;
	/**
	 * https://auth.pieces.services/authorize
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	domain?: string;
	/**
	 * The unique identifier of the target API you want to access.
	 * i.e. https://pieces.us.auth0.com/api/v2/
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	audience?: string;
	/**
	 * Provides a hint to Auth0 as to what flow should be displayed. The default behavior is to show a login page but you can override this by passing 'signup' to show the signup page instead.
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	screenHint?: SeededPKCEScreenHintEnum;
	/**
	 * 	To initiate a silent authentication request, use prompt=none (see Remarks for more info).
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	prompt?: SeededPKCEPromptEnum;
	/**
	 *
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	organization?: string;
	/**
	 *
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	invitation?: string;
	/**
	 * The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token.
	 * @type {Array<string>}
	 * @memberof SeededPKCE
	 */
	scope: SeededPKCEScopeEnum[];
	/**
	 * Your application's Client ID.
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	clientId: string;
	/**
	 *
	 * @type {SeededPKCEADDITIONALPARAMETERS}
	 * @memberof SeededPKCE
	 */
	aDDITIONALPARAMETERS?: SeededPKCEADDITIONALPARAMETERS;
	/**
	 *
	 * @type {string}
	 * @memberof SeededPKCE
	 */
	responseMode?: SeededPKCEResponseModeEnum;
}

/**
 * @export
 */
export const SeededPKCEResponseTypeEnum = {
	Code: "code",
	Token: "token",
	IdToken: "id_token",
} as const;
export type SeededPKCEResponseTypeEnum =
	(typeof SeededPKCEResponseTypeEnum)[keyof typeof SeededPKCEResponseTypeEnum];

/**
 * @export
 */
export const SeededPKCECodeChallengeMethodEnum = {
	S256: "S256",
} as const;
export type SeededPKCECodeChallengeMethodEnum =
	(typeof SeededPKCECodeChallengeMethodEnum)[keyof typeof SeededPKCECodeChallengeMethodEnum];

/**
 * @export
 */
export const SeededPKCEScreenHintEnum = {
	Signup: "signup",
} as const;
export type SeededPKCEScreenHintEnum =
	(typeof SeededPKCEScreenHintEnum)[keyof typeof SeededPKCEScreenHintEnum];

/**
 * @export
 */
export const SeededPKCEPromptEnum = {
	Login: "login",
	None: "none",
} as const;
export type SeededPKCEPromptEnum =
	(typeof SeededPKCEPromptEnum)[keyof typeof SeededPKCEPromptEnum];

/**
 * @export
 */
export const SeededPKCEScopeEnum = {
	OfflineAccess: "offline_access",
	Email: "email",
	Profile: "profile",
	Openid: "openid",
} as const;
export type SeededPKCEScopeEnum =
	(typeof SeededPKCEScopeEnum)[keyof typeof SeededPKCEScopeEnum];

/**
 * @export
 */
export const SeededPKCEResponseModeEnum = {
	FormPost: "form_post",
	WebMessage: "web_message",
	Fragment: "fragment",
	Query: "query",
} as const;
export type SeededPKCEResponseModeEnum =
	(typeof SeededPKCEResponseModeEnum)[keyof typeof SeededPKCEResponseModeEnum];

/**
 * Check if a given object implements the SeededPKCE interface.
 */
export function instanceOfSeededPKCE(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "responseType" in value;
	isInstance = isInstance && "state" in value;
	isInstance = isInstance && "nonce" in value;
	isInstance = isInstance && "codeChallenge" in value;
	isInstance = isInstance && "codeChallengeMethod" in value;
	isInstance = isInstance && "scope" in value;
	isInstance = isInstance && "clientId" in value;

	return isInstance;
}

export function SeededPKCEFromJSON(json: any): SeededPKCE {
	return SeededPKCEFromJSONTyped(json, false);
}

export function SeededPKCEFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededPKCE {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		responseType: json["response_type"],
		state: json["state"],
		nonce: json["nonce"],
		redirectUri: exists(json, "redirect_uri")
			? json["redirect_uri"]
			: undefined,
		codeChallenge: json["code_challenge"],
		codeChallengeMethod: json["code_challenge_method"],
		domain: exists(json, "domain") ? json["domain"] : undefined,
		audience: exists(json, "audience") ? json["audience"] : undefined,
		screenHint: exists(json, "screen_hint")
			? json["screen_hint"]
			: undefined,
		prompt: exists(json, "prompt") ? json["prompt"] : undefined,
		organization: exists(json, "organization")
			? json["organization"]
			: undefined,
		invitation: exists(json, "invitation") ? json["invitation"] : undefined,
		scope: json["scope"],
		clientId: json["client_id"],
		aDDITIONALPARAMETERS: exists(json, "ADDITIONAL_PARAMETERS")
			? SeededPKCEADDITIONALPARAMETERSFromJSON(
					json["ADDITIONAL_PARAMETERS"],
				)
			: undefined,
		responseMode: exists(json, "response_mode")
			? json["response_mode"]
			: undefined,
	};
}

export function SeededPKCEToJSON(value?: SeededPKCE | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		response_type: value.responseType,
		state: value.state,
		nonce: value.nonce,
		redirect_uri: value.redirectUri,
		code_challenge: value.codeChallenge,
		code_challenge_method: value.codeChallengeMethod,
		domain: value.domain,
		audience: value.audience,
		screen_hint: value.screenHint,
		prompt: value.prompt,
		organization: value.organization,
		invitation: value.invitation,
		scope: value.scope,
		client_id: value.clientId,
		ADDITIONAL_PARAMETERS: SeededPKCEADDITIONALPARAMETERSToJSON(
			value.aDDITIONALPARAMETERS,
		),
		response_mode: value.responseMode,
	};
}
