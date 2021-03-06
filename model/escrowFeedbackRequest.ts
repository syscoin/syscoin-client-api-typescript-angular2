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


export interface EscrowFeedbackRequest { 
    /**
     * Escrow ID
     */
    escrowguid: string;
    /**
     * Your role ('buyer', 'seller', 'reseller', or 'arbiter')
     */
    userfrom: string;
    /**
     * Feedback description
     */
    feedback: string;
    /**
     * Ratings are numbers from 1 to 5
     */
    rating: number;
    /**
     * His role ('buyer', 'seller', 'reseller', or 'arbiter')
     */
    userto: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    witness?: string;
}
