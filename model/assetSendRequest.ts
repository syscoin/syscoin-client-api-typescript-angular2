/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AssetAmount } from './assetAmount';


export interface AssetSendRequest { 
    /**
     * Asset guid.
     */
    asset: string;
    /**
     * Alias to transfer from.
     */
    aliasfrom: string;
    /**
     * A json object with aliases and amounts { \"aliasto\":amount   alias to amounts mapping, can be multiple mappings OR if using inputranges \"aliasto\":\"aliasname\" alias to range mappings, can be multiple ranges and multiple mappings \"ranges\": \"start\":index \"end\":index }
     */
    amounts: Array<AssetAmount>;
    /**
     * Message to include in this asset allocation transfer.
     */
    memo?: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    witness?: string;
}
