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



export interface OfferLinkRequest {
    /**
     * An alias you own.
     */
    alias: string;

    /**
     * offer guid that you are linking to
     */
    guid: string;

    /**
     * percentage of profit desired over original offer price, > 0, ie 5 for 5%
     */
    commission: string;

    /**
     * description, 1 KB max. Defaults to original description. Leave as '' to use default.
     */
    description?: string;

}
