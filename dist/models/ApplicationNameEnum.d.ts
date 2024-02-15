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
 * This is a running enumeration for the Names of all the Applications that can be Registered
 * @export
 * @enum {string}
 */
export declare enum ApplicationNameEnum {
    Sublime = "SUBLIME",
    VsCode = "VS_CODE",
    Jetbrains = "JETBRAINS",
    FirefoxAddonMv2 = "FIREFOX_ADDON_MV2",
    FirefoxAddonMv3 = "FIREFOX_ADDON_MV3",
    SafariExtensionMv2 = "SAFARI_EXTENSION_MV2",
    SafariExtensionMv3 = "SAFARI_EXTENSION_MV3",
    PiecesForDevelopers = "PIECES_FOR_DEVELOPERS",
    PiecesForDevelopersCli = "PIECES_FOR_DEVELOPERS_CLI",
    OsServer = "OS_SERVER",
    GoogleChromeExtensionMv2 = "GOOGLE_CHROME_EXTENSION_MV2",
    GoogleChromeExtensionMv3 = "GOOGLE_CHROME_EXTENSION_MV3",
    UltraEdit = "ULTRA_EDIT",
    AtomPackage = "ATOM_PACKAGE",
    AdobeIllustratorPiecesColorShare = "ADOBE_ILLUSTRATOR_PIECES_COLOR_SHARE",
    MicrosoftTeams = "MICROSOFT_TEAMS",
    ChatGpt = "CHAT_GPT",
    Obsidian = "OBSIDIAN",
    JupyterHub = "JUPYTER_HUB",
    VisualStudio = "VISUAL_STUDIO",
    MicrosoftEdge = "MICROSOFT_EDGE",
    Brave = "BRAVE",
    GoogleChat = "GOOGLE_CHAT",
    Slack = "SLACK",
    AzureDataStudio = "AZURE_DATA_STUDIO",
    OpenSource = "OPEN_SOURCE",
    RStudio = "R_STUDIO",
    Vim = "VIM",
    Notion = "NOTION",
    GithubDesktop = "GITHUB_DESKTOP",
    Raycast = "RAYCAST",
    Replit = "REPLIT",
    Alfred = "ALFRED",
    Figma = "FIGMA",
    Sketch = "SKETCH",
    AdobeIllustrator = "ADOBE_ILLUSTRATOR",
    NotepadPlusPlus = "NOTEPAD_PLUS_PLUS",
    Unknown = "UNKNOWN"
}
export declare function ApplicationNameEnumFromJSON(json: any): ApplicationNameEnum;
export declare function ApplicationNameEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationNameEnum;
export declare function ApplicationNameEnumToJSON(value?: ApplicationNameEnum | null): any;
