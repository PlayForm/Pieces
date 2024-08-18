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
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";
import type { Recipients } from "./Recipients.tsx";
import { RecipientsFromJSON, RecipientsToJSON } from "./Recipients.tsx";

/**
 * This is a published Github Gist.
 * @export
 * @interface GitHubGistDistribution
 */
export interface GitHubGistDistribution {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof GitHubGistDistribution
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Recipients}
	 * @memberof GitHubGistDistribution
	 */
	recipients: Recipients;
	/**
	 * This will let us know if the gist is public or private.
	 * @type {boolean}
	 * @memberof GitHubGistDistribution
	 */
	_public: boolean;
	/**
	 * This is the description of the Gist Distribution
	 * @type {string}
	 * @memberof GitHubGistDistribution
	 */
	description?: string;
	/**
	 * This is the name of the gist you will add.
	 * @type {string}
	 * @memberof GitHubGistDistribution
	 */
	name: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof GitHubGistDistribution
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof GitHubGistDistribution
	 */
	updated: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof GitHubGistDistribution
	 */
	deleted?: GroupedTimestamp;
	/**
	 * This is the id that github uses to represent the gist.
	 * @type {string}
	 * @memberof GitHubGistDistribution
	 */
	githubId: string;
	/**
	 * This is the url where the gist is.
	 * @type {string}
	 * @memberof GitHubGistDistribution
	 */
	url: string;
}

/**
 * Check if a given object implements the GitHubGistDistribution interface.
 */
export function instanceOfGitHubGistDistribution(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "recipients" in value;
	isInstance = isInstance && "_public" in value;
	isInstance = isInstance && "name" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "updated" in value;
	isInstance = isInstance && "githubId" in value;
	isInstance = isInstance && "url" in value;

	return isInstance;
}

export function GitHubGistDistributionFromJSON(
	json: any,
): GitHubGistDistribution {
	return GitHubGistDistributionFromJSONTyped(json, false);
}

export function GitHubGistDistributionFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): GitHubGistDistribution {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		recipients: RecipientsFromJSON(json["recipients"]),
		_public: json["public"],
		description: exists(json, "description")
			? json["description"]
			: undefined,
		name: json["name"],
		created: GroupedTimestampFromJSON(json["created"]),
		updated: GroupedTimestampFromJSON(json["updated"]),
		deleted: exists(json, "deleted")
			? GroupedTimestampFromJSON(json["deleted"])
			: undefined,
		githubId: json["github_id"],
		url: json["url"],
	};
}

export function GitHubGistDistributionToJSON(
	value?: GitHubGistDistribution | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		recipients: RecipientsToJSON(value.recipients),
		public: value._public,
		description: value.description,
		name: value.name,
		created: GroupedTimestampToJSON(value.created),
		updated: GroupedTimestampToJSON(value.updated),
		deleted: GroupedTimestampToJSON(value.deleted),
		github_id: value.githubId,
		url: value.url,
	};
}
