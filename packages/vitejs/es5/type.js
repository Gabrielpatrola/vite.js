"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuiltinTxType;
(function (BuiltinTxType) {
    BuiltinTxType[BuiltinTxType["SBPreg"] = 0] = "SBPreg";
    BuiltinTxType[BuiltinTxType["UpdateReg"] = 1] = "UpdateReg";
    BuiltinTxType[BuiltinTxType["RevokeReg"] = 2] = "RevokeReg";
    BuiltinTxType[BuiltinTxType["RetrieveReward"] = 3] = "RetrieveReward";
    BuiltinTxType[BuiltinTxType["Voting"] = 4] = "Voting";
    BuiltinTxType[BuiltinTxType["RevokeVoting"] = 5] = "RevokeVoting";
    BuiltinTxType[BuiltinTxType["GetQuota"] = 6] = "GetQuota";
    BuiltinTxType[BuiltinTxType["WithdrawalOfQuota"] = 7] = "WithdrawalOfQuota";
    BuiltinTxType[BuiltinTxType["Mintage"] = 8] = "Mintage";
    BuiltinTxType[BuiltinTxType["MintageIssue"] = 9] = "MintageIssue";
    BuiltinTxType[BuiltinTxType["MintageBurn"] = 10] = "MintageBurn";
    BuiltinTxType[BuiltinTxType["MintageTransferOwner"] = 11] = "MintageTransferOwner";
    BuiltinTxType[BuiltinTxType["MintageChangeTokenType"] = 12] = "MintageChangeTokenType";
    BuiltinTxType[BuiltinTxType["MintageCancelPledge"] = 13] = "MintageCancelPledge";
    BuiltinTxType[BuiltinTxType["DexFundUserDeposit"] = 14] = "DexFundUserDeposit";
    BuiltinTxType[BuiltinTxType["DexFundUserWithdraw"] = 15] = "DexFundUserWithdraw";
    BuiltinTxType[BuiltinTxType["DexFundNewOrder"] = 16] = "DexFundNewOrder";
    BuiltinTxType[BuiltinTxType["DexTradeCancelOrder"] = 17] = "DexTradeCancelOrder";
    BuiltinTxType[BuiltinTxType["DexFundNewMarket"] = 18] = "DexFundNewMarket";
    BuiltinTxType[BuiltinTxType["CreateContractReq"] = 19] = "CreateContractReq";
    BuiltinTxType[BuiltinTxType["TxReq"] = 20] = "TxReq";
    BuiltinTxType[BuiltinTxType["RewardReq"] = 21] = "RewardReq";
    BuiltinTxType[BuiltinTxType["TxRes"] = 22] = "TxRes";
    BuiltinTxType[BuiltinTxType["TxResFail"] = 23] = "TxResFail";
})(BuiltinTxType = exports.BuiltinTxType || (exports.BuiltinTxType = {}));
var BlockType;
(function (BlockType) {
    BlockType[BlockType["CreateContractReq"] = 1] = "CreateContractReq";
    BlockType[BlockType["TxReq"] = 2] = "TxReq";
    BlockType[BlockType["RewardReq"] = 3] = "RewardReq";
    BlockType[BlockType["TxRes"] = 4] = "TxRes";
    BlockType[BlockType["TxResFail"] = 5] = "TxResFail";
    BlockType[BlockType["SendRefund"] = 6] = "SendRefund";
    BlockType[BlockType["GenesisReceive"] = 7] = "GenesisReceive";
})(BlockType = exports.BlockType || (exports.BlockType = {}));
var wallet;
(function (wallet) {
    wallet["listEntropyFilesInStandardDir"] = "wallet_listEntropyFilesInStandardDir";
    wallet["listAllEntropyFiles"] = "wallet_listAllEntropyFiles";
    wallet["extractMnemonic"] = "wallet_extractMnemonic";
    wallet["unlock"] = "wallet_unlock";
    wallet["lock"] = "wallet_lock";
    wallet["listEntropyStoreAddresses"] = "wallet_listEntropyStoreAddresses";
    wallet["newMnemonicAndEntropyStore"] = "wallet_newMnemonicAndEntropyStore";
    wallet["deriveByIndex"] = "wallet_deriveByIndex";
    wallet["deriveByFullPath"] = "wallet_deriveByFullPath";
    wallet["recoverEntropyStoreFromMnemonic"] = "wallet_recoverEntropyStoreFromMnemonic";
    wallet["globalCheckAddrUnlocked"] = "wallet_globalCheckAddrUnlocked";
    wallet["isAddrUnlocked"] = "wallet_isAddrUnlocked";
    wallet["isUnlocked"] = "wallet_isUnlocked";
    wallet["findAddr"] = "wallet_findAddr";
    wallet["globalFindAddr"] = "wallet_globalFindAddr";
    wallet["createTxWithPassphrase"] = "wallet_createTxWithPassphrase";
    wallet["addEntropyStore"] = "wallet_addEntropyStore";
})(wallet = exports.wallet || (exports.wallet = {}));
var onroad;
(function (onroad) {
    onroad["getOnroadBlocksByAddress"] = "onroad_getOnroadBlocksByAddress";
    onroad["getOnroadInfoByAddress"] = "onroad_getOnroadInfoByAddress";
    onroad["getOnroadBlocksInBatch"] = "onroad_getOnroadBlocksInBatch";
    onroad["getOnroadInfoInBatch"] = "onroad_getOnroadInfoInBatch";
    onroad["getContractOnRoadTotalNum"] = "onroad_getContractOnRoadTotalNum";
    onroad["getContractOnRoadFrontBlocks"] = "onroad_getContractOnRoadFrontBlocks";
})(onroad = exports.onroad || (exports.onroad = {}));
var tx;
(function (tx) {
    tx["sendRawTx"] = "tx_sendRawTx";
    tx["calcPoWDifficulty"] = "tx_calcPoWDifficulty";
})(tx = exports.tx || (exports.tx = {}));
var ledger;
(function (ledger) {
    ledger["getBlocksByAccAddr"] = "ledger_getBlocksByAccAddr";
    ledger["getAccountByAccAddr"] = "ledger_getAccountByAccAddr";
    ledger["getLatestSnapshotChainHash"] = "ledger_getLatestSnapshotChainHash";
    ledger["getLatestBlock"] = "ledger_getLatestBlock";
    ledger["getBlockByHeight"] = "ledger_getBlockByHeight";
    ledger["getBlockByHash"] = "ledger_getBlockByHash";
    ledger["getBlocksByHash"] = "ledger_getBlocksByHash";
    ledger["getBlocksByHashInToken"] = "ledger_getBlocksByHashInToken";
    ledger["getSnapshotChainHeight"] = "ledger_getSnapshotChainHeight";
    ledger["getSnapshotBlockByHash"] = "ledger_getSnapshotBlockByHash";
    ledger["getSnapshotBlockByHeight"] = "ledger_getSnapshotBlockByHeight";
    ledger["getVmLogList"] = "ledger_getVmLogList";
    ledger["getFittestSnapshotHash"] = "ledger_getFittestSnapshotHash";
})(ledger = exports.ledger || (exports.ledger = {}));
var contract;
(function (contract) {
    contract["getCreateContractToAddress"] = "contract_getCreateContractToAddress";
    contract["getCreateContractData"] = "contract_getCreateContractData";
    contract["getCreateContractParams"] = "contract_getCreateContractParams";
    contract["getCallContractData"] = "contract_getCallContractData";
    contract["getContractInfo"] = "contract_getContractInfo";
    contract["getCallOffChainData"] = "contract_getCallOffChainData";
    contract["callOffChainMethod"] = "contract_callOffChainMethod";
})(contract = exports.contract || (exports.contract = {}));
var pledge;
(function (pledge) {
    pledge["getPledgeData"] = "pledge_getPledgeData";
    pledge["getCancelPledgeData"] = "pledge_getCancelPledgeData";
    pledge["getPledgeQuota"] = "pledge_getPledgeQuota";
    pledge["getPledgeList"] = "pledge_getPledgeList";
    pledge["getAgentPledgeData"] = "pledge_getAgentPledgeData";
    pledge["getAgentCancelPledgeData"] = "pledge_getAgentCancelPledgeData";
})(pledge = exports.pledge || (exports.pledge = {}));
var register;
(function (register) {
    register["getRegisterData"] = "register_getRegisterData";
    register["getCancelRegisterData"] = "register_getCancelRegisterData";
    register["getRewardData"] = "register_getRewardData";
    register["getUpdateRegistrationData"] = "register_getUpdateRegistrationData";
    register["getRegistrationList"] = "register_getRegistrationList";
    register["getAvailableReward"] = "register_getAvailableReward";
    register["getRewardByDay"] = "register_getRewardByDay";
    register["getCandidateList"] = "register_getCandidateList";
})(register = exports.register || (exports.register = {}));
var vote;
(function (vote) {
    vote["getVoteData"] = "vote_getVoteData";
    vote["getCancelVoteData"] = "vote_getCancelVoteData";
    vote["getVoteInfo"] = "vote_getVoteInfo";
})(vote = exports.vote || (exports.vote = {}));
var mintage;
(function (mintage) {
    mintage["getMintData"] = "mintage_getMintData";
    mintage["getIssueData"] = "mintage_getIssueData";
    mintage["getBurnData"] = "mintage_getBurnData";
    mintage["getTransferOwnerData"] = "mintage_getTransferOwnerData";
    mintage["getChangeTokenTypeData"] = "mintage_getChangeTokenTypeData";
    mintage["getTokenInfoList"] = "mintage_getTokenInfoList";
    mintage["getTokenInfoById"] = "mintage_getTokenInfoById";
    mintage["getTokenInfoListByOwner"] = "mintage_getTokenInfoListByOwner";
})(mintage = exports.mintage || (exports.mintage = {}));
var dexfund;
(function (dexfund) {
    dexfund["getAccountFundInfo"] = "dexfund_getAccountFundInfo";
    dexfund["getAccountFundInfoByStatus"] = "dexfund_getAccountFundInfoByStatus";
})(dexfund = exports.dexfund || (exports.dexfund = {}));
var net;
(function (net) {
    net["syncInfo"] = "net_syncInfo";
    net["peers"] = "net_peers";
    net["peersCount"] = "net_peersCount";
})(net = exports.net || (exports.net = {}));
var testapi;
(function (testapi) {
    testapi["getTestToken"] = "testapi_getTestToken";
})(testapi = exports.testapi || (exports.testapi = {}));
var pow;
(function (pow) {
    pow["getPowNonce"] = "pow_getPowNonce";
})(pow = exports.pow || (exports.pow = {}));
var subscribe;
(function (subscribe) {
    subscribe["newSnapshotBlocksFilter"] = "subscribe_newSnapshotBlocksFilter";
    subscribe["newAccountBlocksFilter"] = "subscribe_newAccountBlocksFilter";
    subscribe["newLogsFilter"] = "subscribe_newLogsFilter";
    subscribe["uninstallFilter"] = "subscribe_uninstallFilter";
    subscribe["getFilterChanges"] = "subscribe_getFilterChanges";
    subscribe["newSnapshotBlocks"] = "subscribe_newSnapshotBlocks";
    subscribe["newAccountBlocks"] = "subscribe_newAccountBlocks";
    subscribe["newLogs"] = "subscribe_newLogs";
    subscribe["getLogs"] = "subscribe_getLogs";
})(subscribe = exports.subscribe || (exports.subscribe = {}));
exports._methods = { testapi: testapi, pow: pow, dexfund: dexfund, wallet: wallet, onroad: onroad, tx: tx, ledger: ledger, contract: contract, pledge: pledge, register: register, vote: vote, mintage: mintage, net: net, subscribe: subscribe };
var LangList;
(function (LangList) {
    LangList["english"] = "english";
    LangList["japanese"] = "japanese";
    LangList["chineseSimplified"] = "chinese_simplified";
    LangList["chineseTraditional"] = "chinese_traditional";
    LangList["french"] = "french";
    LangList["italian"] = "italian";
    LangList["korean"] = "korean";
    LangList["spanish"] = "spanish";
})(LangList = exports.LangList || (exports.LangList = {}));