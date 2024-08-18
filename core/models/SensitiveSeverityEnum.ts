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
 * This is the enum used to describe the severity of our sensitive model. ie low, moderate, high
 * @export
 */
export const SensitiveSeverityEnum = {
	Low: "LOW",
	Moderate: "MODERATE",
	High: "HIGH",
} as const;
export type SensitiveSeverityEnum =
	(typeof SensitiveSeverityEnum)[keyof typeof SensitiveSeverityEnum];

export function SensitiveSeverityEnumFromJSON(
	json: any,
): SensitiveSeverityEnum {
	return SensitiveSeverityEnumFromJSONTyped(json, false);
}

export function SensitiveSeverityEnumFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SensitiveSeverityEnum {
	return json as SensitiveSeverityEnum;
}

export function SensitiveSeverityEnumToJSON(
	value?: SensitiveSeverityEnum | null,
): any {
	return value as any;
}
