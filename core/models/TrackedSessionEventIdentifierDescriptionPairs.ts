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

/**
 * These are all of the available event types that are permitted in an object pair notation.
 * @export
 * @interface TrackedSessionEventIdentifierDescriptionPairs
 */
export interface TrackedSessionEventIdentifierDescriptionPairs {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * The key value pair for an application being opened.
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionInitialized?: TrackedSessionEventIdentifierDescriptionPairsSessionInitializedEnum;
	/**
	 * There was a successful connection locally
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionLocalConnectionSucceeded?: TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionSucceededEnum;
	/**
	 * There was a failed connection locally
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionLocalConnectionFailed?: TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionFailedEnum;
	/**
	 * If the current application is in the background or not, could also be minimized.
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionInactive?: TrackedSessionEventIdentifierDescriptionPairsSessionInactiveEnum;
	/**
	 * If the application has been brought to the forground.
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionActive?: TrackedSessionEventIdentifierDescriptionPairsSessionActiveEnum;
	/**
	 * If the user has closed the application, thus ending the session.
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionTerminated?: TrackedSessionEventIdentifierDescriptionPairsSessionTerminatedEnum;
	/**
	 * A user has signed into this session with a an external account
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionAuthenticatedWithSignIn?: TrackedSessionEventIdentifierDescriptionPairsSessionAuthenticatedWithSignInEnum;
	/**
	 * A user has signed out of this session
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionUnauthenticatedWithSignOut?: TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithSignOutEnum;
	/**
	 * A user did not sign into the session with a dismissal
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionUnauthenticatedWithDismiss?: TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithDismissEnum;
	/**
	 * A user did not sign into the session with a reminder
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionUnauthenticatedWithRemind?: TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithRemindEnum;
	/**
	 * Onboarding has been initialized for this session
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionOnboardingInitialized?: TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingInitializedEnum;
	/**
	 * Onboarding has been completed for this session
	 * @type {string}
	 * @memberof TrackedSessionEventIdentifierDescriptionPairs
	 */
	sessionOnboardingCompleted?: TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingCompletedEnum;
}

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionInitializedEnum =
	{
		ASessionHasBeenInitializedAndTheApplicationHasBeenOpened:
			"a_session_has_been_initialized_and_the_application_has_been_opened",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionInitializedEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionInitializedEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionInitializedEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionSucceededEnum =
	{
		OneOrMoreApplicationsHasSuccessfullyConnected:
			"one_or_more_applications_has_successfully_connected",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionSucceededEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionSucceededEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionSucceededEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionFailedEnum =
	{
		OneOrMoreApplicationsHasFailedToConnectLocally:
			"one_or_more_applications_has_failed_to_connect_locally",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionFailedEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionFailedEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionLocalConnectionFailedEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionInactiveEnum =
	{
		ASessionIsInactiveBecauseTheApplicationIsNotInTheForeground:
			"a_session_is_inactive_because_the_application_is_not_in_the_foreground",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionInactiveEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionInactiveEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionInactiveEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionActiveEnum = {
	ASessionIsActiveBecauseTheApplicationIsInTheForeground:
		"a_session_is_active_because_the_application_is_in_the_foreground",
} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionActiveEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionActiveEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionActiveEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionTerminatedEnum =
	{
		ASessionHasBeenEndedAndTheApplicationHasBeenClosed:
			"a_session_has_been_ended_and_the_application_has_been_closed",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionTerminatedEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionTerminatedEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionTerminatedEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionAuthenticatedWithSignInEnum =
	{
		AUserHasSignedIntoThisSessionWithAAnExternalAccount:
			"a_user_has_signed_into_this_session_with_a_an_external_account",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionAuthenticatedWithSignInEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionAuthenticatedWithSignInEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionAuthenticatedWithSignInEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithSignOutEnum =
	{
		AUserHasSignedOutOfThisSession: "a_user_has_signed_out_of_this_session",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithSignOutEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithSignOutEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithSignOutEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithDismissEnum =
	{
		AUserDidNotSignIntoTheSessionWithADismissal:
			"a_user_did_not_sign_into_the_session_with_a_dismissal",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithDismissEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithDismissEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithDismissEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithRemindEnum =
	{
		AUserDidNotSignIntoTheSessionWithAReminder:
			"a_user_did_not_sign_into_the_session_with_a_reminder",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithRemindEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithRemindEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionUnauthenticatedWithRemindEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingInitializedEnum =
	{
		OnboardingHasBeenInitializedForThisSession:
			"onboarding_has_been_initialized_for_this_session",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingInitializedEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingInitializedEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingInitializedEnum];

/**
 * @export
 */
export const TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingCompletedEnum =
	{
		OnboardingHasBeenCompletedForThisSession:
			"onboarding_has_been_completed_for_this_session",
	} as const;
export type TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingCompletedEnum =
	(typeof TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingCompletedEnum)[keyof typeof TrackedSessionEventIdentifierDescriptionPairsSessionOnboardingCompletedEnum];

/**
 * Check if a given object implements the TrackedSessionEventIdentifierDescriptionPairs interface.
 */
export function instanceOfTrackedSessionEventIdentifierDescriptionPairs(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function TrackedSessionEventIdentifierDescriptionPairsFromJSON(
	json: any,
): TrackedSessionEventIdentifierDescriptionPairs {
	return TrackedSessionEventIdentifierDescriptionPairsFromJSONTyped(
		json,
		false,
	);
}

export function TrackedSessionEventIdentifierDescriptionPairsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TrackedSessionEventIdentifierDescriptionPairs {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		sessionInitialized: exists(json, "session_initialized")
			? json["session_initialized"]
			: undefined,
		sessionLocalConnectionSucceeded: exists(
			json,
			"session_local_connection_succeeded",
		)
			? json["session_local_connection_succeeded"]
			: undefined,
		sessionLocalConnectionFailed: exists(
			json,
			"session_local_connection_failed",
		)
			? json["session_local_connection_failed"]
			: undefined,
		sessionInactive: exists(json, "session_inactive")
			? json["session_inactive"]
			: undefined,
		sessionActive: exists(json, "session_active")
			? json["session_active"]
			: undefined,
		sessionTerminated: exists(json, "session_terminated")
			? json["session_terminated"]
			: undefined,
		sessionAuthenticatedWithSignIn: exists(
			json,
			"session_authenticated_with_sign_in",
		)
			? json["session_authenticated_with_sign_in"]
			: undefined,
		sessionUnauthenticatedWithSignOut: exists(
			json,
			"session_unauthenticated_with_sign_out",
		)
			? json["session_unauthenticated_with_sign_out"]
			: undefined,
		sessionUnauthenticatedWithDismiss: exists(
			json,
			"session_unauthenticated_with_dismiss",
		)
			? json["session_unauthenticated_with_dismiss"]
			: undefined,
		sessionUnauthenticatedWithRemind: exists(
			json,
			"session_unauthenticated_with_remind",
		)
			? json["session_unauthenticated_with_remind"]
			: undefined,
		sessionOnboardingInitialized: exists(
			json,
			"session_onboarding_initialized",
		)
			? json["session_onboarding_initialized"]
			: undefined,
		sessionOnboardingCompleted: exists(json, "session_onboarding_completed")
			? json["session_onboarding_completed"]
			: undefined,
	};
}

export function TrackedSessionEventIdentifierDescriptionPairsToJSON(
	value?: TrackedSessionEventIdentifierDescriptionPairs | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		session_initialized: value.sessionInitialized,
		session_local_connection_succeeded:
			value.sessionLocalConnectionSucceeded,
		session_local_connection_failed: value.sessionLocalConnectionFailed,
		session_inactive: value.sessionInactive,
		session_active: value.sessionActive,
		session_terminated: value.sessionTerminated,
		session_authenticated_with_sign_in:
			value.sessionAuthenticatedWithSignIn,
		session_unauthenticated_with_sign_out:
			value.sessionUnauthenticatedWithSignOut,
		session_unauthenticated_with_dismiss:
			value.sessionUnauthenticatedWithDismiss,
		session_unauthenticated_with_remind:
			value.sessionUnauthenticatedWithRemind,
		session_onboarding_initialized: value.sessionOnboardingInitialized,
		session_onboarding_completed: value.sessionOnboardingCompleted,
	};
}
