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
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { Account } from '../model/account';
import { AddMultisigAddressRequest } from '../model/addMultisigAddressRequest';
import { EncryptWalletRequest } from '../model/encryptWalletRequest';
import { GetBlockResponse } from '../model/getBlockResponse';
import { GetBlockchainInfoResponse } from '../model/getBlockchainInfoResponse';
import { GetNewAddressRequest } from '../model/getNewAddressRequest';
import { ImportAddressRequest } from '../model/importAddressRequest';
import { ImportPrivKeyRequest } from '../model/importPrivKeyRequest';
import { ImportPubKeyRequest } from '../model/importPubKeyRequest';
import { ImportWalletRequest } from '../model/importWalletRequest';
import { Info } from '../model/info';
import { ListSinceBlockResponse } from '../model/listSinceBlockResponse';
import { MiningInfo } from '../model/miningInfo';
import { MoveRequest } from '../model/moveRequest';
import { NetworkInfo } from '../model/networkInfo';
import { PeerInfoResponse } from '../model/peerInfoResponse';
import { SendFromRequest } from '../model/sendFromRequest';
import { SendManyRequest } from '../model/sendManyRequest';
import { SendToAddressRequest } from '../model/sendToAddressRequest';
import { SignMessageRequest } from '../model/signMessageRequest';
import { Transaction } from '../model/transaction';
import { TransactionListEntry } from '../model/transactionListEntry';
import { ValidateAddressResponse } from '../model/validateAddressResponse';
import { WalletInfo } from '../model/walletInfo';
import { WalletPassphraseChangeRequest } from '../model/walletPassphraseChangeRequest';
import { WalletPassphraseRequest } from '../model/walletPassphraseRequest';
import { Configuration } from '../configuration';
import { AddressGrouping } from "../model/addressGrouping";
export declare class GeneralService {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj;
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
     * @param request
     */
    addmultisigaddress(request: AddMultisigAddressRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    dumpprivkey(address: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    dumpwallet(filename: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
     * @param request
     */
    encryptwallet(request: EncryptWalletRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    getaccount(syscoinaddress: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    getaccountaddress(account: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     * DEPRECATED. Returns the list of addresses for the given account.
     * @param account
     */
    getaddressesbyaccount(account: string, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    getbalance(account?: string, minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<number>;
    /**
     * ﻿If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
     * @param hash
     * @param verbose
     */
    getblock(hash: string, verbose?: boolean, extraHttpRequestParams?: any): Observable<GetBlockResponse>;
    /**
     * Returns an object containing various state info regarding block chain processing.
     */
    getblockchaininfo(extraHttpRequestParams?: any): Observable<GetBlockchainInfoResponse>;
    /**
     * Returns the number of blocks in the longest block chain.
     */
    getblockcount(extraHttpRequestParams?: any): Observable<number>;
    /**
     * Returns an object containing various state info.
     */
    getinfo(extraHttpRequestParams?: any): Observable<Info>;
    /**
     * Returns a json object containing mining-related information.
     */
    getmininginfo(extraHttpRequestParams?: any): Observable<MiningInfo>;
    /**
     * Returns a json object containing network-related information.
     */
    getnetworkinfo(extraHttpRequestParams?: any): Observable<NetworkInfo>;
    /**
     * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
     * @param request
     */
    getnewaddress(request?: GetNewAddressRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Returns data about each connected network node as a json array of objects.
     */
    getpeerinfo(extraHttpRequestParams?: any): Observable<PeerInfoResponse>;
    /**
     * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     */
    getreceivedbyaccount(account: string, minconf?: number, extraHttpRequestParams?: any): Observable<number>;
    /**
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     */
    getreceivedbyaddress(syscoinaddress: string, minconf?: number, extraHttpRequestParams?: any): Observable<number>;
    /**
     * Get detailed information about in-wallet transaction <txid>
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    gettransaction(txid: string, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Transaction>;
    /**
     * Returns the server's total unconfirmed balance
     */
    getunconfirmedbalance(extraHttpRequestParams?: any): Observable<number>;
    /**
     * Returns a new Syscoin (starts with 1) address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
     * @param account DEPRECATED. The account name for the address to be linked to. If not provided, the default account \&quot;\&quot; is used. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
     */
    getv2address(account?: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Returns wallet balance for all accounts. Does not include watch only accounts.
     */
    getwalletbalance(extraHttpRequestParams?: any): Observable<number>;
    /**
     * Returns an object containing various wallet state info.
     */
    getwalletinfo(extraHttpRequestParams?: any): Observable<WalletInfo>;
    /**
     * Returns a new ZCash address for receiving payments in ZCash transaparent tokens. so payments received with the address will be credited to 'account'.
     * @param address
     */
    getzaddress(address: string, extraHttpRequestParams?: any): Observable<WalletInfo>;
    /**
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importaddress(request: ImportAddressRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request
     */
    importprivkey(request: ImportPrivKeyRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.
     * @param rawtransaction
     * @param txoutproof
     */
    importprunedfunds(rawtransaction: string, txoutproof: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importpubkey(request: ImportPubKeyRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request
     */
    importwallet(request: ImportWalletRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    listaccounts(minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<any>;
    /**
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    listaddressgroupings(extraHttpRequestParams?: any): Observable<Array<Array<AddressGrouping>>>;
    /**
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaccount(minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Array<Account>>;
    /**
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaddress(minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Array<Account>>;
    /**
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations
     */
    listsinceblock(blockhash?: string, includeWatchonly?: boolean, targetConfirmations?: number, extraHttpRequestParams?: any): Observable<Array<ListSinceBlockResponse>>;
    /**
     * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    listtransactions(account?: string, count?: number, from?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Array<TransactionListEntry>>;
    /**
     * DEPRECATED. Move a specified amount from one account in your wallet to another.
     * @param request
     */
    move(request: MoveRequest, extraHttpRequestParams?: any): Observable<boolean>;
    /**
     * Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will effect wallet balances.
     * @param txid
     */
    removeprunedfunds(txid: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendfrom(request: SendFromRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendmany(request: SendManyRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendtoaddress(request: SendToAddressRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    signmessage(request: SignMessageRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN)
     * @param alias
     * @param hexstring
     */
    syscoindecoderawtransaction(alias: string, hexstring: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Sign inputs for raw transaction (serialized, hex-encoded) and sends them out to the network if signing is complete
     * @param hexstring
     */
    syscoinsignrawtransaction(hexstring: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Return information about the given syscoin address.
     * @param syscoinaddress
     */
    validateaddress(syscoinaddress: string, extraHttpRequestParams?: any): Observable<ValidateAddressResponse>;
    /**
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    verifymessage(syscoinaddress: string, signature: string, message: string, extraHttpRequestParams?: any): Observable<boolean>;
    /**
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    walletlock(extraHttpRequestParams?: any): Observable<string>;
    /**
     * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request
     */
    walletpassphrase(request: WalletPassphraseRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
     * @param request
     */
    walletpassphrasechange(request: WalletPassphraseChangeRequest, extraHttpRequestParams?: any): Observable<string>;
    /**
     *
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If &#39;account&#39; is specified (DEPRECATED), assign address to that account.
     * @param request
     */
    addmultisigaddressWithHttpInfo(request: AddMultisigAddressRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Reveals the private key corresponding to &#39;syscoinaddress&#39;. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    dumpprivkeyWithHttpInfo(address: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    dumpwalletWithHttpInfo(filename: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Encrypts the wallet with &#39;passphrase&#39;. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
     * @param request
     */
    encryptwalletWithHttpInfo(request: EncryptWalletRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    getaccountWithHttpInfo(syscoinaddress: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    getaccountaddressWithHttpInfo(account: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * DEPRECATED. Returns the list of addresses for the given account.
     * @param account
     */
    getaddressesbyaccountWithHttpInfo(account: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * If account is not specified, returns the server&#39;s total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \&quot;\&quot; is not the same as leaving the parameter out. The server total may be different to the balance in the default \&quot;\&quot; account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    getbalanceWithHttpInfo(account?: string, minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * ﻿If verbose is false, returns a string that is serialized, hex-encoded data for block &#39;hash&#39;. If verbose is true, returns an Object with information about block &lt;hash&gt;.
     * @param hash
     * @param verbose
     */
    getblockWithHttpInfo(hash: string, verbose?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns an object containing various state info regarding block chain processing.
     */
    getblockchaininfoWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns the number of blocks in the longest block chain.
     */
    getblockcountWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns an object containing various state info.
     */
    getinfoWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns a json object containing mining-related information.
     */
    getmininginfoWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns a json object containing network-related information.
     */
    getnetworkinfoWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns a new Syscoin address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
     * @param request
     */
    getnewaddressWithHttpInfo(request?: GetNewAddressRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns data about each connected network node as a json array of objects.
     */
    getpeerinfoWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * DEPRECATED. Returns the total amount received by addresses with &lt;account&gt; in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     */
    getreceivedbyaccountWithHttpInfo(account: string, minconf?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     */
    getreceivedbyaddressWithHttpInfo(syscoinaddress: string, minconf?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get detailed information about in-wallet transaction &lt;txid&gt;
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    gettransactionWithHttpInfo(txid: string, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns the server&#39;s total unconfirmed balance
     */
    getunconfirmedbalanceWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns a new Syscoin (starts with 1) address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
     * @param account DEPRECATED. The account name for the address to be linked to. If not provided, the default account \&quot;\&quot; is used. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
     */
    getv2addressWithHttpInfo(account?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns wallet balance for all accounts. Does not include watch only accounts.
     */
    getwalletbalanceWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns an object containing various wallet state info.
     */
    getwalletinfoWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns a new ZCash address for receiving payments in ZCash transaparent tokens. so payments received with the address will be credited to &#39;account&#39;.
     * @param address
     */
    getzaddressWithHttpInfo(address: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importaddressWithHttpInfo(request: ImportAddressRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request
     */
    importprivkeyWithHttpInfo(request: ImportPrivKeyRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.
     * @param rawtransaction
     * @param txoutproof
     */
    importprunedfundsWithHttpInfo(rawtransaction: string, txoutproof: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importpubkeyWithHttpInfo(request: ImportPubKeyRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request
     */
    importwalletWithHttpInfo(request: ImportWalletRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    listaccountsWithHttpInfo(minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    listaddressgroupingsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaccountWithHttpInfo(minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaddressWithHttpInfo(minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations
     */
    listsinceblockWithHttpInfo(blockhash?: string, includeWatchonly?: boolean, targetConfirmations?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns up to &#39;count&#39; most recent transactions skipping the first &#39;from&#39; transactions for account &#39;account&#39;.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    listtransactionsWithHttpInfo(account?: string, count?: number, from?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * DEPRECATED. Move a specified amount from one account in your wallet to another.
     * @param request
     */
    moveWithHttpInfo(request: MoveRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will effect wallet balances.
     * @param txid
     */
    removeprunedfundsWithHttpInfo(txid: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendfromWithHttpInfo(request: SendFromRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendmanyWithHttpInfo(request: SendManyRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendtoaddressWithHttpInfo(request: SendToAddressRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    signmessageWithHttpInfo(request: SignMessageRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN)
     * @param alias
     * @param hexstring
     */
    syscoindecoderawtransactionWithHttpInfo(alias: string, hexstring: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Sign inputs for raw transaction (serialized, hex-encoded) and sends them out to the network if signing is complete
     * @param hexstring
     */
    syscoinsignrawtransactionWithHttpInfo(hexstring: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Return information about the given syscoin address.
     * @param syscoinaddress
     */
    validateaddressWithHttpInfo(syscoinaddress: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    verifymessageWithHttpInfo(syscoinaddress: string, signature: string, message: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    walletlockWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Stores the wallet decryption key in memory for &#39;timeout&#39; seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request
     */
    walletpassphraseWithHttpInfo(request: WalletPassphraseRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Changes the wallet passphrase from &#39;oldpassphrase&#39; to &#39;newpassphrase&#39;.
     * @param request
     */
    walletpassphrasechangeWithHttpInfo(request: WalletPassphraseChangeRequest, extraHttpRequestParams?: any): Observable<Response>;
}
