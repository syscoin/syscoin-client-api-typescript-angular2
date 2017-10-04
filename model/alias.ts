/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { MultiSignatureInfo } from './multiSignatureInfo';


export interface Alias {
    name: string;

    value?: string;

    privatevalue?: string;

    password?: string;

    txid?: string;

    address?: string;

    alias_peg?: string;

    balance?: number;

    ismine?: boolean;

    safesearch?: string;

    acceptcerttransfers?: string;

    safetylevel?: number;

    buyer_rating?: number;

    buyer_ratingcount?: number;

    buyer_rating_display?: string;

    seller_rating?: number;

    seller_ratingcount?: number;

    seller_rating_display?: string;

    arbiter_rating?: number;

    arbiter_ratingcount?: number;

    arbiter_rating_display?: string;

    lastupdate_height?: number;

    expires_in?: number;

    expires_on?: number;

    expired?: boolean;

    pending?: boolean;

    time?: string;

    multisiginfo?: MultiSignatureInfo;

    pubkey?: string;

}
