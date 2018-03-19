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

import { TransactionDetailEntry } from './transactionDetailEntry';


export interface Transaction {
    /**
     * The transaction amount in SYS
     */
    amount?: string;

    /**
     * The number of confirmations
     */
    confirmations?: number;

    /**
     * The block hash
     */
    blockhash?: string;

    /**
     * The block index
     */
    blockindex?: number;

    /**
     * The time in seconds since epoch (1 Jan 1970 GMT)
     */
    blocktime?: number;

    /**
     * The transaction id.
     */
    txid?: string;

    /**
     * The transaction time in seconds since epoch (1 Jan 1970 GMT)
     */
    time?: number;

    /**
     * The time received in seconds since epoch (1 Jan 1970 GMT)
     */
    timereceived?: number;

    details?: Array<TransactionDetailEntry>;

    /**
     * Raw data for transaction
     */
    hex?: string;

}
