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


export interface Alias {
    _id: string;
    encryption_privatekey?: string;
    encryption_publickey?: string;
    publicvalue?: string;
    txid?: string;
    time?: number;
    address?: string;
    accepttransferflags?: number;
    expires_on?: number;
    expired?: boolean;
}
