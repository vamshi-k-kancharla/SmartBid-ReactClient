
export const httpRequestURLPrefix = "http://127.0.0.1:8000/";

export const httpImagesRequestURLPrefix = "http://127.0.0.1:8080/Smart-Bid/AssetImages/";

export const maxFilesUploadCount = 10;

export const auctionAssetKeysForDisplay = ["AssetType", "Address", "Colony", "City", "State", "Country", "ApprovalType", 
        "AssetSize", "BuiltUpArea"];

export const auctionAssetUIIdsForDisplay = ["id_assettype_", "id_address_", "id_colony_", "id_city_", "id_state_", "id_country_", 
        "id_approvaltype_", "id_size_", "id_builtup_area_"];

export const userAuthItemsToBeRemovedFromCache = ["CurrentUser_Password", "CurrentUser_CustomerId", "CurrentUser_Name", 
        "CurrentUser_EmailAddress", "CurrentUser_PhoneNumber"];


// Validate & Upload Asset Data

export const auctionAssetUIIdsForUpload = ["id_asset_type", "id_bidding_type", "id_min_auction_price", "id_address", "id_colony", "id_city", "id_state", 
        "id_country", "id_approval_type", "id_asset_size", "id_built_up_area", "id_asset_description", "id_min_no_of_bedrooms", 
        "id_min_no_of_bathrooms"];

export const auctionAssetKeysForUpload = ["AssetType", "BiddingType", "MinAuctionPrice", "Address", "Colony", "City", "State", 
        "Country", "ApprovalType", "AssetSize", "BuiltUpArea", "AssetDescription", "AssetBedrooms", "AssetBathrooms"];


// Validate & Upload Customer Data

export const customerUIIdsForUpload = ["id_name", "id_phone_number", "id_email", "id_user_type", "id_country", "id_state", 
        "id_city", "id_address", "id_password", "id_password_reentry"];

export const customerObjectKeysForUpload = ["Name", "PhoneNumber", "EmailAddress", "UserType", "Country", "State", 
        "City", "Address", "Password", "PasswordReentry"];

export const customerObjectKeysForPasswordReset = ["EmailAddress"];


// Contact US Data

export const notificationEmailAddress = "smartbid.notification@gmail.com";

export const mobileNumberContactUS = "+91-7306004129";

export const feedbackObjectKeysForUpload = ["CustomerName", "EmailAddress", "Subject", "Message"];

