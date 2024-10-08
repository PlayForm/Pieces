/**
 * A Model to support account creation to Auth0's Database.
 * @export
 * @interface OAuthAccount
 */
export interface OAuthAccount {
	/**
	 * The client_id of your client.
	 * @type {string}
	 * @memberof OAuthAccount
	 */
	clientId: string;
	/**
	 * The user's email address.
	 * @type {string}
	 * @memberof OAuthAccount
	 */
	email: string;
	/**
	 * The name of the database configured to your client.
	 * @type {string}
	 * @memberof OAuthAccount
	 */
	connection: string;
	/**
	 * The user's username. Only valid if the connection requires a username.
	 * @type {string}
	 * @memberof OAuthAccount
	 */
	username: string;
	/**
	 * The user's given name(s).
	 * @type {string}
	 * @memberof OAuthAccount
	 */
	givenName: string;
	/**
	 * The user's family name(s).
	 * @type {string}
	 * @memberof OAuthAccount
	 */
	familyName: string;
	/**
	 * The user's full name.
	 * @type {string}
	 * @memberof OAuthAccount
	 */
	name: string;
	/**
	 * A URI pointing to the user's picture.
	 * @type {string}
	 * @memberof OAuthAccount
	 */
	picture: string;
	/**
	 * The user's nickname.
	 * @type {string}
	 * @memberof OAuthAccount
	 */
	nickname: string;
}

/**
 * Check if a given object implements the OAuthAccount interface.
 */
export function instanceOfOAuthAccount(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "clientId" in value;
	isInstance = isInstance && "email" in value;
	isInstance = isInstance && "connection" in value;
	isInstance = isInstance && "username" in value;
	isInstance = isInstance && "givenName" in value;
	isInstance = isInstance && "familyName" in value;
	isInstance = isInstance && "name" in value;
	isInstance = isInstance && "picture" in value;
	isInstance = isInstance && "nickname" in value;

	return isInstance;
}

export function OAuthAccountFromJSON(json: any): OAuthAccount {
	return OAuthAccountFromJSONTyped(json, false);
}

export function OAuthAccountFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): OAuthAccount {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		clientId: json["client_id"],
		email: json["email"],
		connection: json["connection"],
		username: json["username"],
		givenName: json["given_name"],
		familyName: json["family_name"],
		name: json["name"],
		picture: json["picture"],
		nickname: json["nickname"],
	};
}

export function OAuthAccountToJSON(value?: OAuthAccount | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		client_id: value.clientId,
		email: value.email,
		connection: value.connection,
		username: value.username,
		given_name: value.givenName,
		family_name: value.familyName,
		name: value.name,
		picture: value.picture,
		nickname: value.nickname,
	};
}
