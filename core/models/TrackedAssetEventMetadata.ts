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
import type { ReferencedAnchor } from "./ReferencedAnchor.tsx";
import {
	ReferencedAnchorFromJSON,
	ReferencedAnchorToJSON,
} from "./ReferencedAnchor.tsx";
import type { ReferencedAnnotation } from "./ReferencedAnnotation.tsx";
import {
	ReferencedAnnotationFromJSON,
	ReferencedAnnotationToJSON,
} from "./ReferencedAnnotation.tsx";
import type { ReferencedHint } from "./ReferencedHint.tsx";
import {
	ReferencedHintFromJSON,
	ReferencedHintToJSON,
} from "./ReferencedHint.tsx";
import type { ReferencedPerson } from "./ReferencedPerson.tsx";
import {
	ReferencedPersonFromJSON,
	ReferencedPersonToJSON,
} from "./ReferencedPerson.tsx";
import type { ReferencedSensitive } from "./ReferencedSensitive.tsx";
import {
	ReferencedSensitiveFromJSON,
	ReferencedSensitiveToJSON,
} from "./ReferencedSensitive.tsx";
import type { ReferencedShare } from "./ReferencedShare.tsx";
import {
	ReferencedShareFromJSON,
	ReferencedShareToJSON,
} from "./ReferencedShare.tsx";
import type { ReferencedTag } from "./ReferencedTag.tsx";
import {
	ReferencedTagFromJSON,
	ReferencedTagToJSON,
} from "./ReferencedTag.tsx";
import type { ReferencedWebsite } from "./ReferencedWebsite.tsx";
import {
	ReferencedWebsiteFromJSON,
	ReferencedWebsiteToJSON,
} from "./ReferencedWebsite.tsx";
import type { TrackedAssetEventCreationMetadata } from "./TrackedAssetEventCreationMetadata.tsx";
import {
	TrackedAssetEventCreationMetadataFromJSON,
	TrackedAssetEventCreationMetadataToJSON,
} from "./TrackedAssetEventCreationMetadata.tsx";
import type { TrackedAssetEventFormatReclassificationMetadata } from "./TrackedAssetEventFormatReclassificationMetadata.tsx";
import {
	TrackedAssetEventFormatReclassificationMetadataFromJSON,
	TrackedAssetEventFormatReclassificationMetadataToJSON,
} from "./TrackedAssetEventFormatReclassificationMetadata.tsx";
import type { TrackedAssetEventRenameMetadata } from "./TrackedAssetEventRenameMetadata.tsx";
import {
	TrackedAssetEventRenameMetadataFromJSON,
	TrackedAssetEventRenameMetadataToJSON,
} from "./TrackedAssetEventRenameMetadata.tsx";
import type { TrackedAssetsEventSearchMetadata } from "./TrackedAssetsEventSearchMetadata.tsx";
import {
	TrackedAssetsEventSearchMetadataFromJSON,
	TrackedAssetsEventSearchMetadataToJSON,
} from "./TrackedAssetsEventSearchMetadata.tsx";

/**
 *
 * @export
 * @interface TrackedAssetEventMetadata
 */
export interface TrackedAssetEventMetadata {
	/**
	 *
	 * @type {TrackedAssetEventFormatReclassificationMetadata}
	 * @memberof TrackedAssetEventMetadata
	 */
	reclassification?: TrackedAssetEventFormatReclassificationMetadata;
	/**
	 *
	 * @type {TrackedAssetEventCreationMetadata}
	 * @memberof TrackedAssetEventMetadata
	 */
	creation?: TrackedAssetEventCreationMetadata;
	/**
	 *
	 * @type {TrackedAssetEventRenameMetadata}
	 * @memberof TrackedAssetEventMetadata
	 */
	rename?: TrackedAssetEventRenameMetadata;
	/**
	 *
	 * @type {ReferencedTag}
	 * @memberof TrackedAssetEventMetadata
	 */
	tag?: ReferencedTag;
	/**
	 *
	 * @type {ReferencedWebsite}
	 * @memberof TrackedAssetEventMetadata
	 */
	website?: ReferencedWebsite;
	/**
	 *
	 * @type {ReferencedPerson}
	 * @memberof TrackedAssetEventMetadata
	 */
	person?: ReferencedPerson;
	/**
	 *
	 * @type {ReferencedSensitive}
	 * @memberof TrackedAssetEventMetadata
	 */
	sensitive?: ReferencedSensitive;
	/**
	 *
	 * @type {ReferencedShare}
	 * @memberof TrackedAssetEventMetadata
	 */
	share?: ReferencedShare;
	/**
	 *
	 * @type {TrackedAssetsEventSearchMetadata}
	 * @memberof TrackedAssetEventMetadata
	 */
	search?: TrackedAssetsEventSearchMetadata;
	/**
	 *
	 * @type {ReferencedAnnotation}
	 * @memberof TrackedAssetEventMetadata
	 */
	annotation?: ReferencedAnnotation;
	/**
	 *
	 * @type {ReferencedHint}
	 * @memberof TrackedAssetEventMetadata
	 */
	hint?: ReferencedHint;
	/**
	 *
	 * @type {ReferencedAnchor}
	 * @memberof TrackedAssetEventMetadata
	 */
	anchor?: ReferencedAnchor;
}

/**
 * Check if a given object implements the TrackedAssetEventMetadata interface.
 */
export function instanceOfTrackedAssetEventMetadata(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function TrackedAssetEventMetadataFromJSON(
	json: any,
): TrackedAssetEventMetadata {
	return TrackedAssetEventMetadataFromJSONTyped(json, false);
}

export function TrackedAssetEventMetadataFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TrackedAssetEventMetadata {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		reclassification: exists(json, "reclassification")
			? TrackedAssetEventFormatReclassificationMetadataFromJSON(
					json["reclassification"],
				)
			: undefined,
		creation: exists(json, "creation")
			? TrackedAssetEventCreationMetadataFromJSON(json["creation"])
			: undefined,
		rename: exists(json, "rename")
			? TrackedAssetEventRenameMetadataFromJSON(json["rename"])
			: undefined,
		tag: exists(json, "tag")
			? ReferencedTagFromJSON(json["tag"])
			: undefined,
		website: exists(json, "website")
			? ReferencedWebsiteFromJSON(json["website"])
			: undefined,
		person: exists(json, "person")
			? ReferencedPersonFromJSON(json["person"])
			: undefined,
		sensitive: exists(json, "sensitive")
			? ReferencedSensitiveFromJSON(json["sensitive"])
			: undefined,
		share: exists(json, "share")
			? ReferencedShareFromJSON(json["share"])
			: undefined,
		search: exists(json, "search")
			? TrackedAssetsEventSearchMetadataFromJSON(json["search"])
			: undefined,
		annotation: exists(json, "annotation")
			? ReferencedAnnotationFromJSON(json["annotation"])
			: undefined,
		hint: exists(json, "hint")
			? ReferencedHintFromJSON(json["hint"])
			: undefined,
		anchor: exists(json, "anchor")
			? ReferencedAnchorFromJSON(json["anchor"])
			: undefined,
	};
}

export function TrackedAssetEventMetadataToJSON(
	value?: TrackedAssetEventMetadata | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		reclassification: TrackedAssetEventFormatReclassificationMetadataToJSON(
			value.reclassification,
		),
		creation: TrackedAssetEventCreationMetadataToJSON(value.creation),
		rename: TrackedAssetEventRenameMetadataToJSON(value.rename),
		tag: ReferencedTagToJSON(value.tag),
		website: ReferencedWebsiteToJSON(value.website),
		person: ReferencedPersonToJSON(value.person),
		sensitive: ReferencedSensitiveToJSON(value.sensitive),
		share: ReferencedShareToJSON(value.share),
		search: TrackedAssetsEventSearchMetadataToJSON(value.search),
		annotation: ReferencedAnnotationToJSON(value.annotation),
		hint: ReferencedHintToJSON(value.hint),
		anchor: ReferencedAnchorToJSON(value.anchor),
	};
}
