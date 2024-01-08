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
import { Asset, AssetReclassification, Conversations, ExportedAsset, Formats, SeededAccessor, SeededScoreIncrement } from '../models';
export interface AssetAssociateTagRequest {
    asset: string;
    tag: string;
}
export interface AssetAssociateWebsiteRequest {
    asset: string;
    website: string;
}
export interface AssetDisassociateTagRequest {
    tag: string;
    asset: string;
}
export interface AssetDisassociateWebsiteRequest {
    website: string;
    asset: string;
}
export interface AssetFormatsRequest {
    asset: string;
    transferables?: boolean;
}
export interface AssetReclassifyRequest {
    transferables?: boolean;
    assetReclassification?: AssetReclassification;
}
export interface AssetScoresIncrementRequest {
    asset: string;
    seededScoreIncrement?: SeededScoreIncrement;
}
export interface AssetSnapshotRequest {
    asset: string;
    transferables?: boolean;
}
export interface AssetSnapshotPostRequest {
    asset: string;
    transferables?: boolean;
    seededAccessor?: SeededAccessor;
}
export interface AssetSpecificAssetConversationsRequest {
    asset: string;
    transferables?: boolean;
}
export interface AssetSpecificAssetExportRequest {
    asset: string;
    exportType: AssetSpecificAssetExportExportTypeEnum;
}
export interface AssetUpdateRequest {
    transferables?: boolean;
    asset?: Asset;
}
/**
 *
 */
export declare class AssetApi extends runtime.BaseAPI {
    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    assetAssociateTagRaw(requestParameters: AssetAssociateTagRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    assetAssociateTag(requestParameters: AssetAssociateTagRequest): Promise<void>;
    /**
     * This will associate a website with a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    assetAssociateWebsiteRaw(requestParameters: AssetAssociateWebsiteRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will associate a website with a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    assetAssociateWebsite(requestParameters: AssetAssociateWebsiteRequest): Promise<void>;
    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    assetDisassociateTagRaw(requestParameters: AssetDisassociateTagRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    assetDisassociateTag(requestParameters: AssetDisassociateTagRequest): Promise<void>;
    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    assetDisassociateWebsiteRaw(requestParameters: AssetDisassociateWebsiteRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    assetDisassociateWebsite(requestParameters: AssetDisassociateWebsiteRequest): Promise<void>;
    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    assetFormatsRaw(requestParameters: AssetFormatsRequest): Promise<runtime.ApiResponse<Formats>>;
    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    assetFormats(requestParameters: AssetFormatsRequest): Promise<Formats>;
    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    assetReclassifyRaw(requestParameters: AssetReclassifyRequest): Promise<runtime.ApiResponse<Asset>>;
    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    assetReclassify(requestParameters: AssetReclassifyRequest): Promise<Asset>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    assetScoresIncrementRaw(requestParameters: AssetScoresIncrementRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    assetScoresIncrement(requestParameters: AssetScoresIncrementRequest): Promise<void>;
    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    assetSnapshotRaw(requestParameters: AssetSnapshotRequest): Promise<runtime.ApiResponse<Asset>>;
    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    assetSnapshot(requestParameters: AssetSnapshotRequest): Promise<Asset>;
    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    assetSnapshotPostRaw(requestParameters: AssetSnapshotPostRequest): Promise<runtime.ApiResponse<Asset>>;
    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    assetSnapshotPost(requestParameters: AssetSnapshotPostRequest): Promise<Asset>;
    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    assetSpecificAssetConversationsRaw(requestParameters: AssetSpecificAssetConversationsRequest): Promise<runtime.ApiResponse<Conversations>>;
    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    assetSpecificAssetConversations(requestParameters: AssetSpecificAssetConversationsRequest): Promise<Conversations>;
    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    assetSpecificAssetExportRaw(requestParameters: AssetSpecificAssetExportRequest): Promise<runtime.ApiResponse<ExportedAsset>>;
    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    assetSpecificAssetExport(requestParameters: AssetSpecificAssetExportRequest): Promise<ExportedAsset>;
    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    assetUpdateRaw(requestParameters: AssetUpdateRequest): Promise<runtime.ApiResponse<Asset>>;
    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    assetUpdate(requestParameters: AssetUpdateRequest): Promise<Asset>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum AssetSpecificAssetExportExportTypeEnum {
    Html = "HTML",
    Md = "MD"
}