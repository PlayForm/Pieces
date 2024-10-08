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

/**
 * This is an enum that will highlight something that is externally sourced.
 * @export
 */
export const ExternallySourcedEnum = {
	Twitter: "TWITTER",
	Medium: "MEDIUM",
	LinkedIn: "LINKED_IN",
	Instagram: "INSTAGRAM",
	Facebook: "FACEBOOK",
	Reddit: "REDDIT",
	Discord: "DISCORD",
	BitBucket: "BIT_BUCKET",
	GitLab: "GIT_LAB",
	GitHub: "GIT_HUB",
	Slack: "SLACK",
	Mailgun: "MAILGUN",
} as const;
export type ExternallySourcedEnum =
	(typeof ExternallySourcedEnum)[keyof typeof ExternallySourcedEnum];

export function ExternallySourcedEnumFromJSON(
	json: any,
): ExternallySourcedEnum {
	return ExternallySourcedEnumFromJSONTyped(json, false);
}

export function ExternallySourcedEnumFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ExternallySourcedEnum {
	return json as ExternallySourcedEnum;
}

export function ExternallySourcedEnumToJSON(
	value?: ExternallySourcedEnum | null,
): any {
	return value as any;
}
