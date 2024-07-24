"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'tron/unknown (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Query the latest block information
     *
     * @summary GetNowBlock
     */
    SDK.prototype.walletGetnowblock = function () {
        return this.core.fetch('/wallet/getnowblock', 'post');
    };
    /**
     * Create a TRX transfer transaction. If to_address does not exist, then create the account
     * on the blockchain.
     *
     * @summary CreateTransaction
     * @throws FetchError<400, types.CreatetransactionResponse400> 400
     */
    SDK.prototype.createtransaction = function (body) {
        return this.core.fetch('/wallet/createtransaction', 'post', body);
    };
    /**
     * Returns the Block Object corresponding to the 'Block Height' specified (number of blocks
     * preceding it).
     *
     * @summary GetBlockByNum
     */
    SDK.prototype.walletGetblockbynum = function (body) {
        return this.core.fetch('/wallet/getblockbynum', 'post', body);
    };
    /**
     * This interface has been deprecated.
     *
     * @summary EasyTransfer
     * @throws FetchError<400, types.EasytransferResponse400> 400
     */
    SDK.prototype.easytransfer = function (body) {
        return this.core.fetch('/wallet/easytransfer', 'post', body);
    };
    /**
     * Modify account name
     *
     * @summary UpdateAccount
     * @throws FetchError<400, types.UpdateaccountResponse400> 400
     */
    SDK.prototype.updateaccount = function (body) {
        return this.core.fetch('/wallet/updateaccount', 'post', body);
    };
    /**
     * Generate a random private key and address. This API has been deprecated, please generate
     * address offline.
     *
     * @summary GenerateAddress
     * @throws FetchError<400, types.GenerateaddressResponse400> 400
     */
    SDK.prototype.generateaddress = function () {
        return this.core.fetch('/wallet/generateaddress', 'get');
    };
    /**
     * Creates an address from the specified password string (not the private key).This
     * interface has been deprecated, please generate address offline.
     *
     * @summary CreateAddress
     * @throws FetchError<400, types.CreateaddressResponse400> 400
     */
    SDK.prototype.createaddress = function (body) {
        return this.core.fetch('/wallet/createaddress', 'post', body);
    };
    /**
     * List all Super Representatives.
     *
     * @summary ListWitnesses
     */
    SDK.prototype.listwitnesses = function () {
        return this.core.fetch('/wallet/listwitnesses', 'get');
    };
    /**
     * Update basic TRC10 token information.
     *
     * @summary UpdateAsset
     * @throws FetchError<400, types.WalletUpdateassetResponse400> 400
     */
    SDK.prototype.walletUpdateasset = function (body) {
        return this.core.fetch('/wallet/updateasset', 'post', body);
    };
    /**
     * Query the TRC10 token information issued by an account.
     *
     * @summary GetAssetIssueByAccount
     */
    SDK.prototype.getassetissuebyaccount = function (body) {
        return this.core.fetch('/wallet/getassetissuebyaccount', 'post', body);
    };
    /**
     * Query bandwidth information.
     *
     * @summary GetAccountNet
     */
    SDK.prototype.getaccountnet = function (body) {
        return this.core.fetch('/wallet/getaccountnet', 'post', body);
    };
    /**
     * Query the list of nodes connected to the API node
     *
     * @summary ListNodes
     * @throws FetchError<400, types.WalletListnodesResponse400> 400
     */
    SDK.prototype.walletListnodes = function () {
        return this.core.fetch('/wallet/listnodes', 'get');
    };
    /**
     * Query block by ID(block hash).
     *
     * @summary GetBlockById
     */
    SDK.prototype.getblockbyid = function (body) {
        return this.core.fetch('/wallet/getblockbyid', 'post', body);
    };
    /**
     * Query a token by token id. Returns the token object, which contains the token name.
     *
     * @summary GetAssetIssueById
     */
    SDK.prototype.getassetissuebyid = function (body) {
        return this.core.fetch('/wallet/getassetissuebyid', 'post', body);
    };
    /**
     * Query transaction information by transaction id.
     *
     * @summary GetTransactionById
     */
    SDK.prototype.walletGettransactionbyid = function (body) {
        return this.core.fetch('/wallet/gettransactionbyid', 'post', body);
    };
    /**
     * Query the list of all the TRC10 tokens.
     *
     * @summary GetAssetIssueList
     */
    SDK.prototype.getassetissuelist = function () {
        return this.core.fetch('/wallet/getassetissuelist', 'get');
    };
    /**
     * Returns the list of Block Objects included in the 'Block Height' range specified.
     *
     * @summary GetBlockByLimitNext
     * @throws FetchError<400, types.GetblockbylimitnextResponse400> 400
     */
    SDK.prototype.getblockbylimitnext = function (body) {
        return this.core.fetch('/wallet/getblockbylimitnext', 'post', body);
    };
    /**
     * Returns a list of block objects.
     *
     * @summary GetBlockByLatestNum
     * @throws FetchError<400, types.WalletGetblockbylatestnumResponse400> 400
     */
    SDK.prototype.walletGetblockbylatestnum = function (body) {
        return this.core.fetch('/wallet/getblockbylatestnum', 'post', body);
    };
    /**
     * Returns the timestamp of the next voting time in milliseconds.
     *
     * @summary GetNextMaintenanceTime
     * @throws FetchError<400, types.GetnextmaintenancetimeResponse400> 400
     */
    SDK.prototype.getnextmaintenancetime = function () {
        return this.core.fetch('/wallet/getnextmaintenancetime', 'get');
    };
    /**
     * Injects capital into the transaction. The purpose of injecting capital into the trading
     * pair is to prevent price fluctuation from affecting the transaction.
     *
     * @summary ExchangeInject
     * @throws FetchError<400, types.ExchangeinjectResponse400> 400
     */
    SDK.prototype.exchangeinject = function (body) {
        return this.core.fetch('/wallet/exchangeinject', 'post', body);
    };
    /**
     * Validates address, returns either true or false.
     *
     * @summary ValidateAddress
     * @throws FetchError<400, types.ValidateaddressResponse400> 400
     */
    SDK.prototype.validateaddress = function (body) {
        return this.core.fetch('/wallet/validateaddress', 'post', body);
    };
    /**
     * Query the list of all the tokens by pagination.Returns a list of Tokens that succeed the
     * Token located at offset.
     *
     * @summary GetPaginatedAssetIssueList
     */
    SDK.prototype.getpaginatedassetissuelist = function (body) {
        return this.core.fetch('/wallet/getpaginatedassetissuelist', 'post', body);
    };
    /**
     * Withdraws the transaction pair.
     *
     * @summary ExchangeWithdraw
     * @throws FetchError<400, types.ExchangewithdrawResponse400> 400
     */
    SDK.prototype.exchangewithdraw = function (body) {
        return this.core.fetch('/wallet/exchangewithdraw', 'post', body);
    };
    /**
     * Query exchange pair based on id
     *
     * @summary GetExchangeById
     * @throws FetchError<400, types.WalletGetexchangebyidResponse400> 400
     */
    SDK.prototype.walletGetexchangebyid = function (body) {
        return this.core.fetch('/wallet/getexchangebyid', 'post', body);
    };
    /**
     * Participate the transaction of exchange pair
     *
     * @summary ExchangeTransaction
     * @throws FetchError<400, types.ExchangetransactionResponse400> 400
     */
    SDK.prototype.exchangetransaction = function (body) {
        return this.core.fetch('/wallet/exchangetransaction', 'post', body);
    };
    /**
     * List all exchange pairs.
     *
     * @summary ListExchanges
     * @throws FetchError<400, types.WalletListexchangesResponse400> 400
     */
    SDK.prototype.walletListexchanges = function (metadata) {
        return this.core.fetch('/wallet/listexchanges', 'get', metadata);
    };
    /**
     * Creates a proposal transaction.
     *
     * @summary ProposalCreate
     * @throws FetchError<400, types.ProposalcreateResponse400> 400
     */
    SDK.prototype.proposalcreate = function (body) {
        return this.core.fetch('/wallet/proposalcreate', 'post', body);
    };
    /**
     * Queries proposal based on ID and returns proposal details.
     *
     * @summary GetProposalById
     * @throws FetchError<400, types.GetproposalbyidResponse400> 400
     */
    SDK.prototype.getproposalbyid = function (body) {
        return this.core.fetch('/wallet/getproposalbyid', 'post', body);
    };
    /**
     * List all proposals.
     *
     * @summary ListProposals
     * @throws FetchError<400, types.WalletListproposalsResponse400> 400
     */
    SDK.prototype.walletListproposals = function () {
        return this.core.fetch('/wallet/listproposals', 'get');
    };
    /**
     * Approves proposed transaction.
     *
     * @summary ProposalApprove
     * @throws FetchError<400, types.ProposalapproveResponse400> 400
     */
    SDK.prototype.proposalapprove = function (body) {
        return this.core.fetch('/wallet/proposalapprove', 'post', body);
    };
    /**
     * Deletes Proposal Transaction.
     *
     * @summary ProposalDelete
     * @throws FetchError<400, types.ProposaldeleteResponse400> 400
     */
    SDK.prototype.proposaldelete = function (body) {
        return this.core.fetch('/wallet/proposaldelete', 'post', body);
    };
    /**
     * Query information about an account, including TRX balance, TRC-10 balances, stake
     * information and vote information and permissions etc.
     *
     * @summary GetAccount
     * @throws FetchError<400, types.AccountGetaccountResponse400> 400
     */
    SDK.prototype.accountGetaccount = function (body) {
        return this.core.fetch('/wallet/getaccount', 'post', body);
    };
    /**
     * Sign the transaction, it is recommended to sign transactions offline.
     *
     * @summary GetTransactionSign
     * @throws FetchError<400, types.GettransactionsignResponse400> 400
     */
    SDK.prototype.gettransactionsign = function (body) {
        return this.core.fetch('/wallet/gettransactionsign', 'post', body);
    };
    /**
     * Broadcast the signed transaction
     *
     * @summary BroadcastTransaction
     */
    SDK.prototype.broadcasttransaction = function (body) {
        return this.core.fetch('/wallet/broadcasttransaction', 'post', body);
    };
    /**
     * Apply to become a witness.
     *
     * @summary CreateWitness
     * @throws FetchError<400, types.CreatewitnessResponse400> 400
     */
    SDK.prototype.createwitness = function (body) {
        return this.core.fetch('/wallet/createwitness', 'post', body);
    };
    /**
     * Vote for witnesses
     *
     * @summary VoteWitnessAccount
     * @throws FetchError<400, types.VotewitnessaccountResponse400> 400
     */
    SDK.prototype.votewitnessaccount = function (body) {
        return this.core.fetch('/wallet/votewitnessaccount', 'post', body);
    };
    /**
     * Activate an account. Uses an already activated account to activate a new account. Users
     * have to generate an account locally with wallet-cli or others SDKs like TronWeb, and
     * then use this API to activate the account generated, or just simply transfer TRX to it.
     *
     * @summary CreateAccount
     * @throws FetchError<400, types.AccountCreateaccountResponse400> 400
     */
    SDK.prototype.accountCreateaccount = function (body) {
        return this.core.fetch('/wallet/createaccount', 'post', body);
    };
    /**
     * Transfer TRC10 token.
     *
     * @summary TransferAsset
     * @throws FetchError<400, types.TransferassetResponse400> 400
     */
    SDK.prototype.transferasset = function (body) {
        return this.core.fetch('/wallet/transferasset', 'post', body);
    };
    /**
     * Participate in an asset issue.
     *
     * @summary ParticipateAssetIssue
     * @throws FetchError<400, types.ParticipateassetissueResponse400> 400
     */
    SDK.prototype.participateassetissue = function (body) {
        return this.core.fetch('/wallet/participateassetissue', 'post', body);
    };
    /**
     * Issue a TRC10 token.
     *
     * @summary CreateAssetIssue
     */
    SDK.prototype.createassetissue = function (body) {
        return this.core.fetch('/wallet/createassetissue', 'post', body);
    };
    /**
     * This interface has been deprecated, please use
     * [FreezeBalanceV2](/reference/freezebalancev2-1) to stake TRX to obtain resources.
     *
     * @summary FreezeBalance
     * @throws FetchError<400, types.AccountResourcesFreezebalanceResponse400> 400
     */
    SDK.prototype.accountResourcesFreezebalance = function (body) {
        return this.core.fetch('/wallet/freezebalance', 'post', body);
    };
    /**
     * Unstake the TRX staked during Stake1.0, release the obtained bandwidth or energy and TP.
     * This operation will cause automatically cancel all votes.
     *
     * @summary UnfreezeBalance
     * @throws FetchError<400, types.AccountResourcesUnfreezebalanceResponse400> 400
     */
    SDK.prototype.accountResourcesUnfreezebalance = function (body) {
        return this.core.fetch('/wallet/unfreezebalance', 'post', body);
    };
    /**
     * Unstake a token that has passed the minimum freeze duration.
     *
     * @summary UnfreezeAsset
     * @throws FetchError<400, types.UnfreezeassetResponse400> 400
     */
    SDK.prototype.unfreezeasset = function (body) {
        return this.core.fetch('/wallet/unfreezeasset', 'post', body);
    };
    /**
     * Deploys a contract. Returns TransactionExtention, which contains an unsigned
     * transaction.
     *
     * @summary DeployContract
     * @throws FetchError<400, types.WalletDeploycontractResponse400> 400
     */
    SDK.prototype.walletDeploycontract = function (body) {
        return this.core.fetch('/wallet/deploycontract', 'post', body);
    };
    /**
     * Super Representative or user withdraw rewards, usable every 24 hours.
     * Super representatives can withdraw the balance from the account allowance into the
     * account balance,
     * Users can claim the voting reward from the SRs and deposit into his account balance.
     *
     * @summary WithdrawBalance
     * @throws FetchError<400, types.WithdrawbalanceResponse400> 400
     */
    SDK.prototype.withdrawbalance = function (body) {
        return this.core.fetch('/wallet/withdrawbalance', 'post', body);
    };
    /**
     * This interface has been deprecated.
     *
     * @summary EasyTransferByPrivate
     * @throws FetchError<400, types.EasytransferbyprivateResponse400> 400
     */
    SDK.prototype.easytransferbyprivate = function (body) {
        return this.core.fetch('/wallet/easytransferbyprivate', 'post', body);
    };
    /**
     * Queries a contract's information from the blockchain, including the bytecode of the
     * contract, ABI, configuration parameters, etc.
     *
     * @summary GetContract
     * @throws FetchError<400, types.WalletGetcontractResponse400> 400
     */
    SDK.prototype.walletGetcontract = function (body) {
        return this.core.fetch('/wallet/getcontract', 'post', body);
    };
    /**
     * Returns TransactionExtention, which contains the unsigned Transaction
     *
     * @summary TriggerSmartContract
     * @throws FetchError<400, types.TriggersmartcontractResponse400> 400
     */
    SDK.prototype.triggersmartcontract = function (body) {
        return this.core.fetch('/wallet/triggersmartcontract', 'post', body);
    };
    /**
     * Creates a trading pair.
     *
     * @summary ExchangeCreate
     * @throws FetchError<400, types.ExchangecreateResponse400> 400
     */
    SDK.prototype.exchangecreate = function (body) {
        return this.core.fetch('/wallet/exchangecreate', 'post', body);
    };
    /**
     * Query Node Information. Returns information about current state of node.
     *
     * @summary GetNodeInfo
     * @throws FetchError<400, types.WalletGetnodeinfoResponse400> 400
     */
    SDK.prototype.walletGetnodeinfo = function () {
        return this.core.fetch('/wallet/getnodeinfo', 'get');
    };
    /**
     * Update the consume_user_resource_percent parameter of a smart contract
     *
     * @summary UpdateSetting
     * @throws FetchError<400, types.WalletUpdatesettingResponse400> 400
     */
    SDK.prototype.walletUpdatesetting = function (body) {
        return this.core.fetch('/wallet/updatesetting', 'post', body);
    };
    /**
     * Update the origin_energy_limit parameter of a smart contract
     *
     * @summary UpdateEnergyLimit
     * @throws FetchError<400, types.WalletUpdateenergylimitResponse400> 400
     */
    SDK.prototype.walletUpdateenergylimit = function (body) {
        return this.core.fetch('/wallet/updateenergylimit', 'post', body);
    };
    /**
     * This interface has been deprecated.
     *
     * @summary EasyTransferAsset
     * @throws FetchError<400, types.EasytransferassetResponse400> 400
     */
    SDK.prototype.easytransferasset = function (body) {
        return this.core.fetch('/wallet/easytransferasset', 'post', body);
    };
    /**
     * Query the resource delegation by an account during stake1.0 phase. i.e. list all
     * addresses that have delegated resources to an account.
     *
     * @summary GetDelegatedResourceAccountIndex
     * @throws FetchError<400, types.GetdelegatedresourceaccountindexResponse400> 400
     */
    SDK.prototype.getdelegatedresourceaccountindex = function (body) {
        return this.core.fetch('/wallet/getdelegatedresourceaccountindex', 'post', body);
    };
    /**
     * This interface has been deprecated.
     *
     * @summary EasyTransferAssetByPrivate
     * @throws FetchError<400, types.EasytransferassetbyprivateResponse400> 400
     */
    SDK.prototype.easytransferassetbyprivate = function (body) {
        return this.core.fetch('/wallet/easytransferassetbyprivate', 'post', body);
    };
    /**
     * Returns all resources delegations during stake1.0 phase from an account to another
     * account. The fromAddress can be retrieved from the GetDelegatedResourceAccountIndex API.
     *
     * @summary GetDelegatedResource
     * @throws FetchError<400, types.GetdelegatedresourceResponse400> 400
     */
    SDK.prototype.getdelegatedresource = function (body) {
        return this.core.fetch('/wallet/getdelegatedresource', 'post', body);
    };
    /**
     * Query the transaction fee, block height by transaction id
     *
     * @summary GetTransactionInfoById
     */
    SDK.prototype.gettransactioninfobyid = function (body) {
        return this.core.fetch('/wallet/gettransactioninfobyid', 'post', body);
    };
    /**
     * Edit the URL of the witness's official website.
     *
     * @summary UpdateWitness
     */
    SDK.prototype.updatewitness = function (body) {
        return this.core.fetch('/wallet/updatewitness', 'post', body);
    };
    /**
     * To clear the ABI info of a smart contract.
     *
     * @summary ClearAbi
     * @throws FetchError<400, types.ClearabiResponse400> 400
     */
    SDK.prototype.clearabi = function (body) {
        return this.core.fetch('/wallet/clearabi', 'post', body);
    };
    /**
     * Invoke the readonly function (modified by the `view` or `pure` modifier) of a contract
     * for contract data query; or Invoke the non-readonly function of a  contract for
     * predicting whether the transaction can be successfully executed and estimating the
     * energy consumption; or estimate the energy consumption of contract deployment
     *
     * @summary TriggerConstantContract
     * @throws FetchError<400, types.TriggerconstantcontractResponse400> 400
     */
    SDK.prototype.triggerconstantcontract = function (body) {
        return this.core.fetch('/wallet/triggerconstantcontract', 'post', body);
    };
    /**
     * Update the witness's brokerage setting.
     *
     * @summary UpdateBrokerage
     * @throws FetchError<400, types.WalletUpdatebrokerageResponse400> 400
     */
    SDK.prototype.walletUpdatebrokerage = function (body) {
        return this.core.fetch('/wallet/updateBrokerage', 'post', body);
    };
    /**
     * Get SR brokerage ratio
     *
     * @summary GetBrokerage
     * @throws FetchError<400, types.WalletGetbrokerageResponse400> 400
     */
    SDK.prototype.walletGetbrokerage = function (body) {
        return this.core.fetch('/wallet/getBrokerage', 'post', body);
    };
    /**
     * Get the rewards that a witness or a user has not yet withdrawn.
     *
     * @summary GetReward
     * @throws FetchError<400, types.WalletGetrewardResponse400> 400
     */
    SDK.prototype.walletGetreward = function (body) {
        return this.core.fetch('/wallet/getReward', 'post', body);
    };
    /**
     * Query the resource information of an account(bandwidth,energy,etc)
     *
     * @summary GetAccountResource
     * @throws FetchError<400, types.GetaccountresourceResponse400> 400
     */
    SDK.prototype.getaccountresource = function (body) {
        return this.core.fetch('/wallet/getaccountresource', 'post', body);
    };
    /**
     * All parameters that the blockchain committee can set
     *
     * @summary GetChainParameters
     * @throws FetchError<400, types.WalletGetchainparametersResponse400> 400
     */
    SDK.prototype.walletGetchainparameters = function () {
        return this.core.fetch('/wallet/getchainparameters', 'get');
    };
    /**
     * Broadcast the protobuf encoded transaction hex string after sign
     *
     * @summary BroadcastHex
     * @throws FetchError<400, types.BroadcasthexResponse400> 400
     */
    SDK.prototype.broadcasthex = function (body) {
        return this.core.fetch('/wallet/broadcasthex', 'post', body);
    };
    /**
     * GetTransactionInfoByBlockNum
     *
     * @throws FetchError<400, types.GettransactioninfobyblocknumResponse400> 400
     */
    SDK.prototype.gettransactioninfobyblocknum = function (body) {
        return this.core.fetch('/wallet/gettransactioninfobyblocknum', 'post', body);
    };
    /**
     * Update the account's permission.
     *
     * @summary AccountPermissionUpdate
     * @throws FetchError<400, types.AccountpermissionupdateResponse400> 400
     */
    SDK.prototype.accountpermissionupdate = function (body) {
        return this.core.fetch('/wallet/accountpermissionupdate', 'post', body);
    };
    /**
     * Note:To ensure security, Trongrid has disabled this interface service, please use the
     * service provided by the local node.
     *
     * @summary GetSpendingKey
     * @throws FetchError<400, types.GetspendingkeyResponse400> 400
     */
    SDK.prototype.getspendingkey = function () {
        return this.core.fetch('/wallet/getspendingkey', 'get');
    };
    /**
     * Note:To ensure security, Trongrid has disabled this interface service, please use the
     * service provided by the local node.
     *
     * @summary GetExpandedSpendingKey
     * @throws FetchError<400, types.GetexpandedspendingkeyResponse400> 400
     */
    SDK.prototype.getexpandedspendingkey = function (body) {
        return this.core.fetch('/wallet/getexpandedspendingkey', 'post', body);
    };
    /**
     * GetZenPaymentAddress
     *
     * @throws FetchError<400, types.GetzenpaymentaddressResponse400> 400
     */
    SDK.prototype.getzenpaymentaddress = function (body) {
        return this.core.fetch('/wallet/getzenpaymentaddress', 'post', body);
    };
    /**
     * Note:To ensure security, Trongrid has disabled this interface service, please use the
     * service provided by the local node.
     *
     * @summary GetAkFromAsk
     * @throws FetchError<400, types.GetakfromaskResponse400> 400
     */
    SDK.prototype.getakfromask = function (body) {
        return this.core.fetch('/wallet/getakfromask', 'post', body);
    };
    /**
     * GetNkFromNsk
     *
     * @throws FetchError<400, types.GetnkfromnskResponse400> 400
     */
    SDK.prototype.getnkfromnsk = function (body) {
        return this.core.fetch('/wallet/getnkfromnsk', 'post', body);
    };
    /**
     * Note:To ensure security, Trongrid has disabled this interface service, please use the
     * service provided by the local node.
     *
     * @summary GetNewShieldedAddress
     * @throws FetchError<400, types.GetnewshieldedaddressResponse400> 400
     */
    SDK.prototype.getnewshieldedaddress = function () {
        return this.core.fetch('/wallet/getnewshieldedaddress', 'get');
    };
    /**
     * Note:To ensure security, Trongrid has disabled this interface service, please use the
     * service provided by the local node.
     *
     * @summary CreateShieldedContractParameters
     * @throws FetchError<400, types.CreateshieldedcontractparametersResponse400> 400
     */
    SDK.prototype.createshieldedcontractparameters = function (body) {
        return this.core.fetch('/wallet/createshieldedcontractparameters', 'post', body);
    };
    /**
     * GetDiversifier
     *
     * @throws FetchError<400, types.GetdiversifierResponse400> 400
     */
    SDK.prototype.getdiversifier = function () {
        return this.core.fetch('/wallet/getdiversifier', 'get');
    };
    /**
     * GetIncomingViewingKey
     *
     * @throws FetchError<400, types.GetincomingviewingkeyResponse400> 400
     */
    SDK.prototype.getincomingviewingkey = function (body) {
        return this.core.fetch('/wallet/getincomingviewingkey', 'post', body);
    };
    /**
     * Note:To ensure security, Trongrid has disabled this interface service, please use the
     * service provided by the local node.
     *
     * @summary CreateSpendAuthSig
     * @throws FetchError<400, types.CreatespendauthsigResponse400> 400
     */
    SDK.prototype.createspendauthsig = function (body) {
        return this.core.fetch('/wallet/createspendauthsig', 'post', body);
    };
    /**
     * GetTriggerInputForShieldedTrc20Contract
     *
     * @throws FetchError<400, types.Gettriggerinputforshieldedtrc20ContractResponse400> 400
     */
    SDK.prototype.gettriggerinputforshieldedtrc20contract = function () {
        return this.core.fetch('/wallet/gettriggerinputforshieldedtrc20contract', 'post');
    };
    /**
     * IsShieldedTrc20ContractNoteSpent
     *
     * @throws FetchError<400, types.Isshieldedtrc20ContractnotespentResponse400> 400
     */
    SDK.prototype.isshieldedtrc20contractnotespent = function (body) {
        return this.core.fetch('/wallet/isshieldedtrc20contractnotespent', 'post', body);
    };
    /**
     * Scan outgoing notes(spent).
     *
     * @summary ScanShieldedTrc20NotesByOvk
     * @throws FetchError<400, types.Scanshieldedtrc20NotesbyovkResponse400> 400
     */
    SDK.prototype.scanshieldedtrc20notesbyovk = function (body) {
        return this.core.fetch('/wallet/scanshieldedtrc20notesbyovk', 'post', body);
    };
    /**
     * Scan outgoing notes.
     *
     * @summary ScanShieldedTrc20NotesByIvk
     * @throws FetchError<400, types.Scanshieldedtrc20NotesbyivkResponse400> 400
     */
    SDK.prototype.scanshieldedtrc20notesbyivk = function (body) {
        return this.core.fetch('/wallet/scanshieldedtrc20notesbyivk', 'post', body);
    };
    /**
     * Get transaction details from the pending pool
     *
     * @summary GetTransactionFromPending
     * @throws FetchError<400, types.GettransactionfrompendingResponse400> 400
     */
    SDK.prototype.gettransactionfrompending = function (body) {
        return this.core.fetch('/wallet/gettransactionfrompending', 'post', body);
    };
    /**
     * Get transaction list information from pending pool
     *
     * @summary GetTransactionListFromPending
     * @throws FetchError<400, types.GettransactionlistfrompendingResponse400> 400
     */
    SDK.prototype.gettransactionlistfrompending = function () {
        return this.core.fetch('/wallet/gettransactionlistfrompending', 'get');
    };
    /**
     * Get the size of the pending pool queue
     *
     * @summary GetPendingSize
     * @throws FetchError<400, types.GetpendingsizeResponse400> 400
     */
    SDK.prototype.getpendingsize = function () {
        return this.core.fetch('/wallet/getpendingsize', 'get');
    };
    /**
     * Get all balance change operations in a block.(Note: At present, the interface data can
     * only be queried through the following official nodes 13.228.119.63 &
     * 18.139.193.235&18.141.79.38 &18.139.248.26)
     *
     * @summary GetBlockBalance
     * @throws FetchError<400, types.GetblockbalanceResponse400> 400
     */
    SDK.prototype.getblockbalance = function (body) {
        return this.core.fetch('/wallet/getblockbalance', 'post', body);
    };
    /**
     * Get the account balance in a specific block.(Note: At present, the interface data can
     * only be queried through the following official nodes 13.228.119.63 & 18.139.193.235 &
     * 18.141.79.38 & 18.139.248.26)
     *
     * @summary GetAccountBalance
     * @throws FetchError<400, types.GetaccountbalanceResponse400> 400
     */
    SDK.prototype.getaccountbalance = function (body) {
        return this.core.fetch('/wallet/getaccountbalance', 'post', body);
    };
    /**
     * Queries a contract's information from the blockchain. The difference from the
     * `wallet/getcontract` interface is that this interface returns not only the `bytecode`
     * but also the `runtime bytecode` of the contract. Compared with `bytecode`, `runtime
     * bytecode` does not contain constructor and constructor parameter information.
     *
     * @summary GetContractInfo
     * @throws FetchError<400, types.GetcontractinfoResponse400> 400
     */
    SDK.prototype.getcontractinfo = function (body) {
        return this.core.fetch('/wallet/getcontractinfo', 'post', body);
    };
    /**
     * Query historical energy unit price
     *
     * @summary GetEnergyPrices
     */
    SDK.prototype.getenergyprices = function () {
        return this.core.fetch('/wallet/getenergyprices', 'get');
    };
    /**
     * Query historical bandwidth unit price
     *
     * @summary GetBandwidthPrices
     */
    SDK.prototype.getbandwidthprices = function () {
        return this.core.fetch('/wallet/getbandwidthprices', 'get');
    };
    /**
     * Query block header information or entire block information according to block height or
     * block hash
     *
     * @summary GetBlock
     */
    SDK.prototype.getblock1 = function (body) {
        return this.core.fetch('/wallet/getblock', 'post', body);
    };
    /**
     * Estimate the energy required for the successful execution of smart contract transactions
     * or deploying a contract
     *
     * @summary EstimateEnergy
     * @throws FetchError<400, types.EstimateenergyResponse400> 400
     */
    SDK.prototype.estimateenergy = function (body) {
        return this.core.fetch('/wallet/estimateenergy', 'post', body);
    };
    /**
     * Query the amount of TRX burned due to on-chain transaction fees since [No. 54 Committee
     * Proposal ](https://tronscan.org/#/proposal/54) took effect
     *
     * @summary GetBurnTRX
     */
    SDK.prototype.getburntrx = function () {
        return this.core.fetch('/wallet/getburntrx', 'get');
    };
    /**
     * In Stake2.0, stake an amount of TRX to obtain bandwidth or energy, and obtain equivalent
     * TRON Power(TP) according to the staked amount
     *
     * @summary FreezeBalanceV2
     * @throws FetchError<400, types.Freezebalancev21Response400> 400
     */
    SDK.prototype.freezebalancev21 = function (body) {
        return this.core.fetch('/wallet/freezebalancev2', 'post', body);
    };
    /**
     * Unstake some TRX staked in Stake2.0, release the corresponding amount of bandwidth or
     * energy, and voting rights (TP)
     *
     * @summary UnfreezeBalanceV2
     * @throws FetchError<400, types.Unfreezebalancev21Response400> 400
     */
    SDK.prototype.unfreezebalancev21 = function (body) {
        return this.core.fetch('/wallet/unfreezebalancev2', 'post', body);
    };
    /**
     * Delegate bandwidth or energy resources to other accounts in Stake2.0.
     *
     * @summary DelegateResource
     * @throws FetchError<400, types.Delegateresource1Response400> 400
     */
    SDK.prototype.delegateresource1 = function (body) {
        return this.core.fetch('/wallet/delegateresource', 'post', body);
    };
    /**
     * Withdraw unfrozen balance in Stake2.0,  the user can call this API to get back their
     * funds after executing /wallet/unfreezebalancev2 transaction and waiting N days, N is a
     * network parameter
     *
     * @summary WithdrawExpireUnfreeze
     * @throws FetchError<400, types.WithdrawexpireunfreezeResponse400> 400
     */
    SDK.prototype.withdrawexpireunfreeze = function (body) {
        return this.core.fetch('/wallet/withdrawexpireunfreeze', 'post', body);
    };
    /**
     * Cancel the delegation of bandwidth or energy resources to other accounts in Stake2.0
     *
     * @summary UnDelegateResource
     * @throws FetchError<400, types.Undelegateresource1Response400> 400
     */
    SDK.prototype.undelegateresource1 = function (body) {
        return this.core.fetch('/wallet/undelegateresource', 'post', body);
    };
    /**
     * Remaining times of executing unstake operation in Stake2.0
     *
     * @summary GetAvailableUnfreezeCount
     * @throws FetchError<400, types.Getavailableunfreezecount1Response400> 400
     */
    SDK.prototype.getavailableunfreezecount1 = function (body) {
        return this.core.fetch('/wallet/getavailableunfreezecount', 'post', body);
    };
    /**
     * Query the withdrawable balance at the specified timestamp In Stake2.0
     *
     * @summary GetCanWithdrawUnfreezeAmount
     * @throws FetchError<400, types.Getcanwithdrawunfreezeamount1Response400> 400
     */
    SDK.prototype.getcanwithdrawunfreezeamount1 = function (body) {
        return this.core.fetch('/wallet/getcanwithdrawunfreezeamount', 'post', body);
    };
    /**
     * In Stake2.0, query the amount of delegatable resources share of the specified resource
     * type for an address, unit is sun.
     *
     * @summary GetCanDelegatedMaxSize
     * @throws FetchError<400, types.GetcandelegatedmaxsizeResponse400> 400
     */
    SDK.prototype.getcandelegatedmaxsize = function (body) {
        return this.core.fetch('/wallet/getcandelegatedmaxsize', 'post', body);
    };
    /**
     * In Stake2.0, query the detail of resource share delegated from fromAddress to toAddress
     *
     * @summary GetDelegatedResourceV2
     * @throws FetchError<400, types.Getdelegatedresourcev2Response400> 400
     */
    SDK.prototype.getdelegatedresourcev2 = function (body) {
        return this.core.fetch('/wallet/getdelegatedresourcev2', 'post', body);
    };
    /**
     * In Stake2.0, query the resource delegation index by an account. Two lists will return,
     * one is the list of addresses the account has delegated its resources(toAddress), and the
     * other is the list of addresses that have delegated resources to the
     * account(fromAddress).
     *
     * @summary GetDelegatedResourceAccountIndexV2
     * @throws FetchError<400, types.Getdelegatedresourceaccountindexv21Response400> 400
     */
    SDK.prototype.getdelegatedresourceaccountindexv21 = function (body) {
        return this.core.fetch('/wallet/getdelegatedresourceaccountindexv2', 'post', body);
    };
    /**
     * Query a token by name, returns token info.
     *
     * @summary GetAssetIssueByName
     */
    SDK.prototype.getassetissuebynameCopy = function (body) {
        return this.core.fetch('/wallet/getassetissuebyname', 'post', body);
    };
    /**
     * Query the list of all the TRC10 tokens by a name.
     *
     * @summary GetAssetIssueListByName
     */
    SDK.prototype.getassetissuelistbynameCopy = function (body) {
        return this.core.fetch('/wallet/getassetissuelistbyname', 'post', body);
    };
    /**
     * Cancel unstakings, all unstaked funds still in the waiting period will be re-staked, all
     * unstaked funds that exceeded the 14-day waiting period will be automatically withdrawn
     * to the owner’s account
     *
     * @summary CancelAllUnfreezeV2
     * @throws FetchError<400, types.Cancelallunfreezev2Response400> 400
     */
    SDK.prototype.cancelallunfreezev2 = function (body) {
        return this.core.fetch('/wallet/cancelallunfreezev2', 'post', body);
    };
    /**
     * Query the account address list which signed the transaction.
     *
     * @summary GetApprovedList
     */
    SDK.prototype.httpGetapprovedlist = function (body) {
        return this.core.fetch('/wallet/getapprovedlist', 'post', body);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
