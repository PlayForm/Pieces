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
import type { Auth0 } from "./Auth0.tsx";
import { Auth0FromJSON, Auth0ToJSON } from "./Auth0.tsx";
import type { ChallengedPKCE } from "./ChallengedPKCE.tsx";
import {
	ChallengedPKCEFromJSON,
	ChallengedPKCEToJSON,
} from "./ChallengedPKCE.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { ResultedPKCE } from "./ResultedPKCE.tsx";
import { ResultedPKCEFromJSON, ResultedPKCEToJSON } from "./ResultedPKCE.tsx";
import type { RevokedPKCE } from "./RevokedPKCE.tsx";
import { RevokedPKCEFromJSON, RevokedPKCEToJSON } from "./RevokedPKCE.tsx";
import type { SeededPKCE } from "./SeededPKCE.tsx";
import { SeededPKCEFromJSON, SeededPKCEToJSON } from "./SeededPKCE.tsx";
import type { TokenizedPKCE } from "./TokenizedPKCE.tsx";
import {
	TokenizedPKCEFromJSON,
	TokenizedPKCEToJSON,
} from "./TokenizedPKCE.tsx";

/**
 * An object representing all of the properties involved in a PKCE Authentication Flow
 * @export
 * @interface PKCE
 */
export interface PKCE {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof PKCE
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {ResultedPKCE}
	 * @memberof PKCE
	 */
	result?: ResultedPKCE;
	/**
	 *
	 * @type {ChallengedPKCE}
	 * @memberof PKCE
	 */
	challenge?: ChallengedPKCE;
	/**
	 *
	 * @type {RevokedPKCE}
	 * @memberof PKCE
	 */
	revocation?: RevokedPKCE;
	/**
	 *
	 * @type {SeededPKCE}
	 * @memberof PKCE
	 */
	seed?: SeededPKCE;
	/**
	 *
	 * @type {TokenizedPKCE}
	 * @memberof PKCE
	 */
	token?: TokenizedPKCE;
	/**
	 *
	 * @type {Auth0}
	 * @memberof PKCE
	 */
	auth0?: Auth0;
}

/**
 * Check if a given object implements the PKCE interface.
 */
export function instanceOfPKCE(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function PKCEFromJSON(json: any): PKCE {
	return PKCEFromJSONTyped(json, false);
}

export function PKCEFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): PKCE {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		result: exists(json, "result")
			? ResultedPKCEFromJSON(json["result"])
			: undefined,
		challenge: exists(json, "challenge")
			? ChallengedPKCEFromJSON(json["challenge"])
			: undefined,
		revocation: exists(json, "revocation")
			? RevokedPKCEFromJSON(json["revocation"])
			: undefined,
		seed: exists(json, "seed")
			? SeededPKCEFromJSON(json["seed"])
			: undefined,
		token: exists(json, "token")
			? TokenizedPKCEFromJSON(json["token"])
			: undefined,
		auth0: exists(json, "auth0") ? Auth0FromJSON(json["auth0"]) : undefined,
	};
}

export function PKCEToJSON(value?: PKCE | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		result: ResultedPKCEToJSON(value.result),
		challenge: ChallengedPKCEToJSON(value.challenge),
		revocation: RevokedPKCEToJSON(value.revocation),
		seed: SeededPKCEToJSON(value.seed),
		token: TokenizedPKCEToJSON(value.token),
		auth0: Auth0ToJSON(value.auth0),
	};
}
