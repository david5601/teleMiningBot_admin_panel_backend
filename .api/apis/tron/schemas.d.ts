declare const AccountCreateaccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner_address is an activated account，converted to a hex String.If the owner_address has enough bandwidth obtained by freezing TRX, then creating an account will only consume bandwidth , otherwise, 0.1 TRX will be burned to pay for bandwidth, and at the same time, 1 TRX will be required to be created.";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly account_address: {
                readonly type: "string";
                readonly description: "account_address is the address of the new account, converted to a hex string, this address needs to be calculated in advance";
                readonly default: "TFgY1uN8buRxAtV2r6Zy5sG3ACko6pJT1y";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional,whether the address is in base58 format";
                readonly default: true;
            };
            readonly permission_id: {
                readonly type: "integer";
                readonly description: "Optional,for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AccountGetaccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "address should be converted to a hex string";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional,whether the address is in base58 format";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AccountResourcesFreezebalance: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly frozen_balance: {
                readonly type: "integer";
                readonly description: "TRX stake amount, the unit is sun";
                readonly default: 10000000;
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly frozen_duration: {
                readonly type: "integer";
                readonly description: "Lock-up duration for this stake, now the value can only be 3 days. It is not allowed to unstake within 3 days after the stake. You can unstake TRX after the 3 lock-up days";
                readonly default: 3;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly resource: {
                readonly type: "string";
                readonly description: "TRX stake type, 'BANDWIDTH' or 'ENERGY'";
                readonly default: "ENERGY";
            };
            readonly receiver_address: {
                readonly type: "string";
                readonly description: "Optional,the address that will receive the resource, default hexString";
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional. Defaults to false. Whether addresses are in base58check format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AccountResourcesUnfreezebalance: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly resource: {
                readonly type: "string";
                readonly description: "Stake TRX for 'BANDWIDTH' or 'ENERGY'";
                readonly default: "BANDWIDTH";
            };
            readonly receiver_address: {
                readonly type: "string";
                readonly description: "Optional,the address that will lose the resource, default hexString";
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Accountpermissionupdate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "owner address";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly actives: {
                readonly type: "string";
                readonly description: "active permission";
                readonly default: "[{ \t\"type\": 2, \t\"permission_name\": \"active0\", \t\"threshold\": 2, \t\"operations\": \"7fff1fc0037e0000000000000000000000000000000000000000000000000000\", \t\"keys\": [{ \t\t\"address\": \"TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g\", \t\t\"weight\": 1 \t}, { \t\t\"address\": \"TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1\", \t\t\"weight\": 1 \t}] }]";
                readonly format: "json";
            };
            readonly owner: {
                readonly type: "string";
                readonly description: "owner permission";
                readonly default: "{ \t\"type\": 0, \t\"permission_name\": \"owner\", \t\"threshold\":1, \t\"keys\": [{ \t\t\"address\": \"TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g\", \t\t\"weight\": 1 \t}] }";
                readonly format: "json";
            };
            readonly witness: {
                readonly type: "string";
                readonly description: "witness permission";
                readonly format: "json";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Broadcasthex: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["transaction"];
        readonly properties: {
            readonly transaction: {
                readonly type: "string";
                readonly description: "Transaction hex after sign";
                readonly default: "0A8A010A0202DB2208C89D4811359A28004098A4E0A6B52D5A730802126F0A32747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E5472616E736665724173736574436F6E747261637412390A07313030303030311215415A523B449890854C8FC460AB602DF9F31FE4293F1A15416B0580DA195542DDABE288FEC436C7D5AF769D24206412418BF3F2E492ED443607910EA9EF0A7EF79728DAAAAC0EE2BA6CB87DA38366DF9AC4ADE54B2912C1DEB0EE6666B86A07A6C7DF68F1F9DA171EEE6A370B3CA9CBBB00";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Broadcasttransaction: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["RAW_BODY"];
        readonly properties: {
            readonly RAW_BODY: {
                readonly type: "object";
                readonly properties: {
                    readonly txID: {
                        readonly type: "string";
                    };
                    readonly visible: {
                        readonly type: "boolean";
                    };
                    readonly raw_data: {
                        readonly type: "string";
                        readonly default: "{\"contract\":[{\"parameter\":{\"value\":{\"amount\":1000,\"owner_address\":\"41608f8da72479edc7dd921e4c30bb7e7cddbe722e\",\"to_address\":\"41e9d79cc47518930bc322d9bf7cddd260a0260a8d\"},\"type_url\":\"type.googleapis.com/protocol.TransferContract\"},\"type\":\"TransferContract\"}],\"ref_block_bytes\":\"5e4b\",\"ref_block_hash\":\"47c9dc89341b300d\",\"expiration\":1591089627000,\"timestamp\":1591089567635}";
                        readonly format: "json";
                    };
                    readonly raw_data_hex: {
                        readonly type: "string";
                        readonly default: "0a025e4b220847c9dc89341b300d40f8fed3a2a72e5a66080112620a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412310a1541608f8da72479edc7dd921e4c30bb7e7cddbe722e121541e9d79cc47518930bc322d9bf7cddd260a0260a8d18e8077093afd0a2a72e";
                    };
                    readonly signature: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Cancelallunfreezev2: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Clearabi: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address of the smart contract. If visible=true, use base58check format, otherwise use hex format.";
                readonly default: "TSNEe5Tf4rnc9zPMNXfaTF5fZfHDDH8oyW";
            };
            readonly contract_address: {
                readonly type: "string";
                readonly description: "Smart contract address. If visible=true, use base58check format, otherwise use hex format.";
                readonly default: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional. Defaults to false. Whether addresses are in base58check format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Createaddress: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["value"];
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "value is the password, converted from ascii to hex. i.e. the pass phrase.";
                readonly default: "7465737470617373776f7264";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly base58checkAddress: {
                    readonly type: "string";
                    readonly examples: readonly ["T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"];
                };
                readonly value: {
                    readonly type: "string";
                    readonly examples: readonly ["T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Createassetissue: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "Token name, default hexString";
                readonly default: "0x6173736574497373756531353330383934333132313538";
            };
            readonly abbr: {
                readonly type: "string";
                readonly default: "0x6162627231353330383934333132313538";
            };
            readonly total_supply: {
                readonly type: "integer";
                readonly description: "Token total supply";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly trx_num: {
                readonly type: "integer";
                readonly description: "Define the price by the ratio of trx_num/num(The unit of 'trx_num' is SUN)";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly num: {
                readonly type: "integer";
                readonly description: "Define the price by the ratio of trx_num/num";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly start_time: {
                readonly type: "integer";
                readonly description: "ICO start time";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly end_time: {
                readonly type: "integer";
                readonly description: "ICO end time";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Token description, default hexString";
                readonly default: "0x4578616d706c654465736372697074696f6e";
            };
            readonly url: {
                readonly type: "string";
                readonly description: "Token official website url, default hexString";
                readonly default: "0x7777772e6578616d706c652e636f6d";
            };
            readonly free_asset_net_limit: {
                readonly type: "integer";
                readonly description: "Token free asset net limit";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly public_free_asset_net_limit: {
                readonly type: "integer";
                readonly description: "Token public free asset net limit";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly frozen_supply: {
                readonly type: "string";
                readonly description: "Token frozen supply";
                readonly default: "{\"frozen_amount\":1,\"frozen_days\":2}";
                readonly format: "json";
            };
            readonly precision: {
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
};
declare const Createshieldedcontractparameters: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["shielded_TRC20_contract_address"];
        readonly properties: {
            readonly ovk: {
                readonly type: "string";
            };
            readonly from_amount: {
                readonly type: "string";
            };
            readonly to_amount: {
                readonly type: "string";
            };
            readonly transparent_to_address: {
                readonly type: "string";
            };
            readonly shielded_TRC20_contract_address: {
                readonly type: "string";
            };
            readonly shielded_receives: {
                readonly type: "object";
                readonly properties: {};
            };
            readonly shielded_spends: {
                readonly type: "object";
                readonly properties: {};
            };
            readonly ask: {
                readonly type: "string";
            };
            readonly nsk: {
                readonly type: "string";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Createspendauthsig: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["ask", "tx_hash", "alpha"];
        readonly properties: {
            readonly ask: {
                readonly type: "string";
            };
            readonly tx_hash: {
                readonly type: "string";
            };
            readonly alpha: {
                readonly type: "string";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "string";
                    readonly examples: readonly ["1947036add76206b9f9b03ffd9d9526c5547db955387798f15c5e7c911f41eadc23eee214e64be792a404b77c64335a675c3489ca63d0d471de484c3a606d002"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Createtransaction: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner_address is the transfer address, converted to a hex string";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly to_address: {
                readonly type: "string";
                readonly description: "To_address is the transfer address, converted to a hex string";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "Amount is the transfer amount,the unit is sun";
                readonly default: 1000;
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional.Whehter the address is in base58 format.";
                readonly default: true;
            };
            readonly extra_data: {
                readonly type: "string";
                readonly description: "Optional,  totes on the transaction, HEX format";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Createwitness: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly url: {
                readonly type: "string";
                readonly description: "Website url, default hexString";
                readonly default: "007570646174654e616d6531353330363038383733343633";
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Delegateresource1: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly receiver_address: {
                readonly type: "string";
                readonly description: "Resource receiver address";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly balance: {
                readonly type: "integer";
                readonly description: "Amount of TRX staked for resources to be delegated, unit is sun";
                readonly default: 1000000;
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly resource: {
                readonly type: "string";
                readonly description: "Resource type: 'BANDWIDTH' or 'ENERGY'";
                readonly default: "BANDWIDTH";
            };
            readonly lock: {
                readonly type: "boolean";
                readonly description: "Whether it is locked (default is false), if it is set to true, the delegated resources cannot be undelegated within the lock period specified by `lock_period`. When the lock time is not over, if the owner delegates the same type of resources using the lock to the same address, the lock time will be set to the value specified by `lock_period`. If it is false, that means there is no lock-up period for this resource delegation, and the resource for the target address can be canceled at any time. The default value of this field is false";
                readonly default: false;
            };
            readonly lock_period: {
                readonly type: "integer";
                readonly description: "Lock time,The unit is block interval(3 seconds),  indicates the time of how many blocks which the delegation will be locked. Only when lock is true, this field is valid. If the delegate lock period is 1 day, the lock_period is: 28800. The minimum value of lock_period is the remaining lock period of this type of resource that was delegated last time, and the maximum value is 864000 (30 days). If lock is true and lock_period is not set or set to 0, lock_period will be set to the default value 86400 (3 days) automatically";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Easytransfer: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["passPhrase", "toAddress", "amount"];
        readonly properties: {
            readonly passPhrase: {
                readonly type: "string";
                readonly description: "Password converted from ascii to hex";
            };
            readonly toAddress: {
                readonly type: "string";
                readonly description: "Recipient address converted into a hex string";
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "Amount of TRX to transfer expressed in SUN.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Easytransferasset: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly passPhrase: {
                readonly type: "string";
                readonly description: "Password, default hexString";
            };
            readonly toAddress: {
                readonly type: "string";
                readonly description: "To address, default hexString";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly assetId: {
                readonly type: "string";
                readonly description: "Token id";
                readonly default: "1000001";
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "Transfer token amount,the unit is the smallest unit.";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Easytransferassetbyprivate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly privateKey: {
                readonly type: "string";
                readonly description: "Private key, default hexString";
                readonly default: "D95611A9AF2A2A45359106222ED1AFED48853D9A44DEFF8DC7913F5CBA727366";
            };
            readonly toAddress: {
                readonly type: "string";
                readonly description: "To address, default hexString";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly assetId: {
                readonly type: "string";
                readonly description: "Token id";
                readonly default: "1000001";
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "Token transfer amount";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Easytransferbyprivate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["privateKey", "toAddress", "amount"];
        readonly properties: {
            readonly privateKey: {
                readonly type: "string";
                readonly description: "passPhrase is the private key in hex string format";
            };
            readonly toAddress: {
                readonly type: "string";
                readonly description: "toAddress is the recipient address, converted into a hex string;";
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "amount is the amount of TRX to transfer in SUN.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Estimateenergy: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address that triggers the contract. If visible=true, use base58check format, otherwise use hex format. For constant call you can use the all-zero address.";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly contract_address: {
                readonly type: "string";
                readonly description: "Smart contract address. If visible=true, use base58check format, otherwise use hex format.";
                readonly default: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
            };
            readonly function_selector: {
                readonly type: "string";
                readonly description: "Function call, must not be left blank.";
                readonly default: "balanceOf(address)";
            };
            readonly parameter: {
                readonly type: "string";
                readonly description: "Parameter encoding needs to be in accordance with the ABI rules, the rules are more complicated, users can use the ethers library to encode,For details, please refer to the document-Guide-Smart Contract-Best Practice-Parameter Encoding and Decoding.";
                readonly default: "000000000000000000000000a614f803b6fd780986a42c78ec9c7f77e6ded13c";
            };
            readonly data: {
                readonly type: "string";
                readonly description: "The bytecode of the contract or the data for interacting with smart contracts, including the contract function and parameters. You can choose to use this field, or you can choose to use function_selector and parameter for contract interaction. When both of data and function_selector exist, function_selector is preferred";
            };
            readonly call_value: {
                readonly type: "integer";
                readonly description: "Amount of TRX transferred with this transaction, measured in SUN (1 TRX = 1,000,000 SUN).";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly call_token_value: {
                readonly type: "integer";
                readonly description: "Amount of TRC10 token transferred with this transaction";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly token_id: {
                readonly type: "integer";
                readonly description: "TRC10 token id";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional.Whehter the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "object";
                    readonly properties: {
                        readonly result: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly constant_result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["000000000000000000000000000000000000000000000000000009a1832a6361"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Exchangecreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly first_token_id: {
                readonly type: "string";
                readonly description: "The first token's id, default hexString";
                readonly default: "31303030343837";
            };
            readonly first_token_balance: {
                readonly type: "integer";
                readonly description: "The first token's balance";
                readonly default: 100;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly second_token_id: {
                readonly type: "string";
                readonly description: "The second token's id, default hexString";
                readonly default: "31303030303031";
            };
            readonly second_token_balance: {
                readonly type: "integer";
                readonly description: "The second token's balance";
                readonly default: 100;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly permission_id: {
                readonly type: "integer";
                readonly description: "Optional,for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional,whether the address is in base58 format";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Exchangeinject: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Transaction to the creator's address in hexString format";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly exchange_id: {
                readonly type: "integer";
                readonly description: "Transaction Pair ID";
                readonly default: 12;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly token_id: {
                readonly type: "string";
                readonly description: "Token ID; usually is the token name, which needs to be in hexString format.";
                readonly default: "31303030343837";
            };
            readonly quant: {
                readonly type: "integer";
                readonly description: "Number of capital injection tokens.";
                readonly default: 100;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly permission_id: {
                readonly type: "integer";
                readonly description: "Optional,for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional,whether the address is in base58 format";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Exchangetransaction: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Trader's wallet address, in hex string format. This wallet contains the tokens you wish to sell, in order to gain the other token.";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly exchange_id: {
                readonly type: "integer";
                readonly description: "Transaction Pair ID";
                readonly default: 12;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly token_id: {
                readonly type: "string";
                readonly description: "ID of the sold token, in hexString format. For example, if you wanted to trade TRX for another token, then the TRX id of \"5f\" goes in this parameter.";
                readonly default: "31303030343837";
            };
            readonly quant: {
                readonly type: "integer";
                readonly description: "Quantity of the token being sold. If TRX being sold, need to express in units of SUN.";
                readonly default: 100;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly expected: {
                readonly type: "integer";
                readonly description: "Expected quantity of the token being purchased.";
                readonly default: 10;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly permission_id: {
                readonly type: "integer";
                readonly description: "Optional,for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional,whether the address is in base58 format";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Exchangewithdraw: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Address of the transaction to the creator, in hexString format";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly exchange_id: {
                readonly type: "integer";
                readonly description: "Transaction Pair ID";
                readonly default: 12;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly token_id: {
                readonly type: "string";
                readonly description: "Token ID in hexString format; Usually is the token name.";
                readonly default: "31303030343837";
            };
            readonly quant: {
                readonly type: "integer";
                readonly description: "Number of tokens divested.";
                readonly default: 100;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly permission_id: {
                readonly type: "string";
                readonly description: "Optional,for multi-signature use";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional,whether the address is in base58 format";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Freezebalancev21: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["owner_address", "frozen_balance", "resource"];
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly frozen_balance: {
                readonly type: "integer";
                readonly description: "TRX stake amount, the unit is sun";
                readonly default: 10000000;
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly resource: {
                readonly type: "string";
                readonly description: "TRX stake type, 'BANDWIDTH' or 'ENERGY'";
                readonly default: "ENERGY";
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional. Default is false. Whether addresses are in base58check format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Generateaddress: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly privateKey: {
                    readonly type: "string";
                    readonly examples: readonly ["9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"];
                };
                readonly address: {
                    readonly type: "string";
                    readonly examples: readonly ["TDp4x8kCJ6aHz8wnqZgkaVQAm2ajH1og3L"];
                };
                readonly hexAddress: {
                    readonly type: "string";
                    readonly examples: readonly ["412a260a110bc7b03f19c40a0bd04ff2c5dcb57594"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getaccountbalance: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly account_identifier: {
                readonly type: "string";
                readonly default: "{         \"address\": \"TLLM21wteSPs4hKjbxgmH1L6poyMjeTbHm\"     }";
                readonly format: "json";
            };
            readonly block_identifier: {
                readonly type: "string";
                readonly default: "{         \"hash\": \"0000000000010c4a732d1e215e87466271e425c86945783c3d3f122bfa5affd9\",         \"number\": 68682     }";
                readonly format: "json";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly balance: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [64086449348265040];
                };
                readonly block_identifier: {
                    readonly type: "object";
                    readonly properties: {
                        readonly hash: {
                            readonly type: "string";
                            readonly examples: readonly ["0000000000010c4a732d1e215e87466271e425c86945783c3d3f122bfa5affd9"];
                        };
                        readonly number: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [68682];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getaccountnet: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "Account address, converted to a hex string.";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional,whether the address is in base58 format";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getaccountresource: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "Address";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional,whether the address is in base58 format";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getakfromask: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["value"];
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly default: "23d11537676610c287ffcd1bc33d650df37fc90d13bb65356fbc9045cfb91705";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "string";
                    readonly examples: readonly ["72b041a8006a02a995c24f5b8531a62008c8c54a1979622dc4ea6f54a506732d"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getassetissuebyaccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "Address is the Token Issuer account address";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional. Defaults to false. Whether addresses are in base58check format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
};
declare const Getassetissuebyid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "integer";
                readonly description: "The ID of the TRC10 token.";
                readonly default: 1000001;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
};
declare const GetassetissuebynameCopy: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "TRC 10 token name, default hexString";
                readonly default: "62747474657374";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
};
declare const GetassetissuelistbynameCopy: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "Name of the TRC 10 token, default hexString";
                readonly default: "62747474657374";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
};
declare const Getavailableunfreezecount1: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getbandwidthprices: {
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getblock1: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id_or_num: {
                readonly type: "string";
                readonly description: "id_or_num can be the block height or the block hash. No value entered means to query the latest block.";
                readonly default: "1000000";
            };
            readonly detail: {
                readonly type: "boolean";
                readonly description: "true means query the entire block information include the header and body. false means only query the block header information.";
                readonly default: false;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getblockbalance: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly hash: {
                readonly type: "string";
                readonly default: "0000000001f5b9ca67c722d9263879696c92e8e383d4f0b31c15a91b8a249029";
            };
            readonly number: {
                readonly type: "integer";
                readonly default: 32881098;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly block_identifier: {
                    readonly type: "object";
                    readonly properties: {
                        readonly hash: {
                            readonly type: "string";
                            readonly examples: readonly ["000000000000dc2a3731e28a75b49ac1379bcc425afc95f6ab3916689fbb0189"];
                        };
                        readonly number: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [56362];
                        };
                    };
                };
                readonly timestamp: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1530060672000];
                };
                readonly transaction_balance_trace: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly transaction_identifier: {
                                readonly type: "string";
                                readonly examples: readonly ["e6cabb1833cd1f795eed39d8dd7689eaa70e5bb217611766c74c7aa9feea80df"];
                            };
                            readonly operation: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly operation_identifier: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["TPttBLmFuykRi83y9HxDoEWxTQw6CCcQ4p"];
                                        };
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [-100000];
                                        };
                                    };
                                };
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["TransferContract"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["SUCCESS"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getblockbyid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "Block ID";
                readonly default: "00000000000f424013e51b18e0782a32fa079ddafdb2f4c343468cf8896dc887";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly blockID: {
                    readonly type: "string";
                    readonly examples: readonly ["00000000000000c82a54a3bbdc956e1ddebc903f29b8daf28505b56f55a3f87d"];
                };
                readonly block_header: {
                    readonly type: "object";
                    readonly properties: {
                        readonly raw_data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly number: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [200];
                                };
                                readonly txTrieRoot: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0000000000000000000000000000000000000000000000000000000000000000"];
                                };
                                readonly witness_address: {
                                    readonly type: "string";
                                    readonly examples: readonly ["411661f25387370c9cd3a9a5d97e60ca90f4844e7e"];
                                };
                                readonly parentHash: {
                                    readonly type: "string";
                                    readonly examples: readonly ["00000000000000c7c8f27726916dfddca3c1c3481eb01da8a08938263674cea4"];
                                };
                                readonly timestamp: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [1529892138000];
                                };
                            };
                        };
                        readonly witness_signature: {
                            readonly type: "string";
                            readonly examples: readonly ["691e9116963b54ef7eb07692266319b029217e4d4ae8e8cb97e341617460f3822eff149c690aac6f2e0ad27d0af4fa8824d113d7a71c091245f778438ca4bde801"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getblockbylimitnext: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly startNum: {
                readonly type: "integer";
                readonly description: "Starting block height, including this block.";
                readonly default: 1;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly endNum: {
                readonly type: "integer";
                readonly description: "Ending block height, excluding that block.";
                readonly default: 5;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getburntrx: {
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getcandelegatedmaxsize: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly type: {
                readonly type: "integer";
                readonly description: "resource type, 0 is bandwidth, 1 is energy";
                readonly default: 0;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getcanwithdrawunfreezeamount1: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly timestamp: {
                readonly type: "integer";
                readonly description: "query cutoff timestamp, in milliseconds.";
                readonly default: 1667977444000;
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getcontractinfo: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "Contract address, converted to a hex string.";
                readonly default: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, is address in visible format(base58check) or hex?";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getdelegatedresource: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["fromAddress", "toAddress"];
        readonly properties: {
            readonly fromAddress: {
                readonly type: "string";
                readonly description: "Energy from address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly toAddress: {
                readonly type: "string";
                readonly description: "Energy delegation information";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getdelegatedresourceaccountindex: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "Address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getdelegatedresourceaccountindexv21: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "account address, default hexString";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getdelegatedresourcev2: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly fromAddress: {
                readonly type: "string";
                readonly description: "resource from address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly toAddress: {
                readonly type: "string";
                readonly description: "resource to address";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getdiversifier: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly d: {
                    readonly type: "string";
                    readonly examples: readonly ["dd6b441bd5dcb9c25ec41f"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getexpandedspendingkey: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "HEX of Spending Key";
                readonly default: "09124de6a534661ef1cfad0335832445a3b83c08e885881a68a52cf4dc735e68";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ask: {
                    readonly type: "string";
                    readonly examples: readonly ["23d11537676610c287ffcd1bc33d650df37fc90d13bb65356fbc9045cfb91705"];
                };
                readonly nsk: {
                    readonly type: "string";
                    readonly examples: readonly ["da6542f57f6f730cb31b401b9ca8660589d8a765405c6d6f48fd392ac5360b0a"];
                };
                readonly ovk: {
                    readonly type: "string";
                    readonly examples: readonly ["e73f5383fdeacbb282db951afba01e607916c8106b316c55544fac84b2efbdc4"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getincomingviewingkey: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["ak", "nk"];
        readonly properties: {
            readonly ak: {
                readonly type: "string";
                readonly default: "72b041a8006a02a995c24f5b8531a62008c8c54a1979622dc4ea6f54a506732d";
            };
            readonly nk: {
                readonly type: "string";
                readonly default: "da6542f57f6f730cb31b401b9ca8660589d8a765405c6d6f48fd392ac5360b0a";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ivk: {
                    readonly type: "string";
                    readonly examples: readonly ["6896b46a8355ae75896900ac617293d98e1b48fd885ed484a7cbddd566762705"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getnewshieldedaddress: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly sk: {
                    readonly type: "string";
                    readonly examples: readonly ["0bfc211444fa877ba546ffb3a64e8b7aa58dd7bdd23a7b22166e9da923add0e6"];
                };
                readonly ask: {
                    readonly type: "string";
                    readonly examples: readonly ["264c351e5a154555b1ec7822f9bfc0faa5ced9d75b17ed1552699a20b18f7c07"];
                };
                readonly nsk: {
                    readonly type: "string";
                    readonly examples: readonly ["ebd5bf67f68de464c8a109b389ff4d07912ebe11e8b3d034cf505b35c8d5a907"];
                };
                readonly ovk: {
                    readonly type: "string";
                    readonly examples: readonly ["a8fa18b039e2cd8aeb04c8cf299b2bbc43cb5ab4dd67eec8884e3563223e5908"];
                };
                readonly ak: {
                    readonly type: "string";
                    readonly examples: readonly ["0648c0b20fa5eab112d466f75b174d1c142bf35318d2f50d63c6b3b343c8c397"];
                };
                readonly nk: {
                    readonly type: "string";
                    readonly examples: readonly ["a45852bb5b9e933266d5fab6062baa456b149329f8081817ef868923f87b2f9d"];
                };
                readonly ivk: {
                    readonly type: "string";
                    readonly examples: readonly ["9c3eacfe786e67c6f3b567cfcf129dcfdc21347ce6f192cc3ca1e994df570c05"];
                };
                readonly d: {
                    readonly type: "string";
                    readonly examples: readonly ["987adf3b4d8da446327d17"];
                };
                readonly pkD: {
                    readonly type: "string";
                    readonly examples: readonly ["09f3c4576c4f836b3472a6a5738606866607a6ffcd1c7299e31ec40455b1cd35"];
                };
                readonly payment_address: {
                    readonly type: "string";
                    readonly examples: readonly ["ztron1npad7w6d3kjyvvnazuyl83zhd38cx6e5w2n22uuxq6rxvpaxllx3cu5euv0vgpz4k8xn2rsga28"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getnextmaintenancetime: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly num: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1591099200000];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getnkfromnsk: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["value"];
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly default: "da6542f57f6f730cb31b401b9ca8660589d8a765405c6d6f48fd392ac5360b0a";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "string";
                    readonly examples: readonly ["2d817ea2e005e174d9291d0bd0605e11cb79e3f5855780521bc300d0636a58df"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getpaginatedassetissuelist: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly offset: {
                readonly type: "integer";
                readonly description: "The index of the start token";
                readonly default: 0;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly limit: {
                readonly type: "integer";
                readonly description: "The amount of tokens per page";
                readonly default: 20;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
};
declare const Getpendingsize: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly pendingSize: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [126];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getproposalbyid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "integer";
                readonly default: 1;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getspendingkey: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "string";
                    readonly examples: readonly ["09124de6a534661ef1cfad0335832445a3b83c08e885881a68a52cf4dc735e68"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Gettransactionfrompending: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly default: "f34f1c799700a9d83b67fdcadd7be697010a8dbbcd520de4ac46a648e3e7ae3d";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ret: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly contractRet: {
                                readonly type: "string";
                                readonly examples: readonly ["SUCCESS"];
                            };
                        };
                    };
                };
                readonly signature: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["693ad22a762a6228423f77cdb36440a3b93d7b1cbec7aa3822454e6146fb2af5075e541f298fcc8d68e51f3d0ae34e7b713e4f1582e70b0eba1b1436c848b15a1b"];
                    };
                };
                readonly txID: {
                    readonly type: "string";
                    readonly examples: readonly ["f34f1c799700a9d83b67fdcadd7be697010a8dbbcd520de4ac46a648e3e7ae3d"];
                };
                readonly raw_data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contract: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly amount: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [234000000];
                                                    };
                                                    readonly owner_address: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["4192c47b086eae54ed142d75ce4806df751bac7551"];
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["411113df41d4f3b8b46acc40c266bee87eca42c73d"];
                                                    };
                                                };
                                            };
                                            readonly type_url: {
                                                readonly type: "string";
                                                readonly examples: readonly ["type.googleapis.com/protocol.TransferContract"];
                                            };
                                        };
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["TransferContract"];
                                    };
                                };
                            };
                        };
                        readonly ref_block_bytes: {
                            readonly type: "string";
                            readonly examples: readonly ["6d64"];
                        };
                        readonly ref_block_hash: {
                            readonly type: "string";
                            readonly examples: readonly ["f35991f9b546f69f"];
                        };
                        readonly expiration: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1616394384000];
                        };
                        readonly timestamp: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1616394325960];
                        };
                    };
                };
                readonly raw_data_hex: {
                    readonly type: "string";
                    readonly examples: readonly ["0a026d642208f35991f9b546f69f4080e5f3c4852f5a68080112640a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412330a154192c47b086eae54ed142d75ce4806df751bac75511215411113df41d4f3b8b46acc40c266bee87eca42c73d18809dca6f70c89ff0c4852f"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Gettransactioninfobyblocknum: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly num: {
                readonly type: "integer";
                readonly description: "Block height";
                readonly default: 1000000;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Gettransactioninfobyid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "Transaction hash, i.e. transaction id.";
                readonly default: "7c2d4206c03a883dd9066d620335dc1be272a8dc733cfa3f6d10308faa37facc";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["d0807adb3c5412aa150787b944c96ee898c997debdc27e2f6a643c771edb5933"];
                };
                readonly fee: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [2790];
                };
                readonly blockNumber: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [5467102];
                };
                readonly blockTimeStamp: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1546455621000];
                };
                readonly contractResult: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                };
                readonly receipt: {
                    readonly type: "object";
                    readonly properties: {
                        readonly net_fee: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [2790];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Gettransactionlistfrompending: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly txId: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["48ce8d57e83cc6c28737b785af4d0732c70fa73c2900ed4291b376364872775a"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Gettransactionsign: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["transaction", "privateKey"];
        readonly properties: {
            readonly transaction: {
                readonly type: "object";
                readonly description: "Transaction is a contract created by http api";
                readonly properties: {
                    readonly txID: {
                        readonly type: "string";
                    };
                    readonly visible: {
                        readonly type: "boolean";
                    };
                    readonly raw_data: {
                        readonly type: "string";
                        readonly default: "{\"contract\":[{\"parameter\":{\"value\":{\"amount\":1000,\"owner_address\":\"41608f8da72479edc7dd921e4c30bb7e7cddbe722e\",\"to_address\":\"41e9d79cc47518930bc322d9bf7cddd260a0260a8d\"},\"type_url\":\"type.googleapis.com/protocol.TransferContract\"},\"type\":\"TransferContract\"}],\"ref_block_bytes\":\"5e4b\",\"ref_block_hash\":\"47c9dc89341b300d\",\"expiration\":1591089627000,\"timestamp\":1591089567635}";
                        readonly format: "json";
                    };
                    readonly raw_data_hex: {
                        readonly type: "string";
                        readonly default: "0a025e4b220847c9dc89341b300d40f8fed3a2a72e5a66080112620a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412310a1541608f8da72479edc7dd921e4c30bb7e7cddbe722e121541e9d79cc47518930bc322d9bf7cddd260a0260a8d18e8077093afd0a2a72e";
                    };
                    readonly signature: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly privateKey: {
                readonly type: "string";
                readonly description: "privateKey is the user private key";
                readonly default: "your private key";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Gettriggerinputforshieldedtrc20Contract: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Getzenpaymentaddress: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["ivk", "d"];
        readonly properties: {
            readonly ivk: {
                readonly type: "string";
            };
            readonly d: {
                readonly type: "string";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly pkD: {
                    readonly type: "string";
                    readonly examples: readonly ["297198e7d4a024a3b5ef9b68ed15e7463fbf03e6aa590aa551d7bd0c1cfa828d"];
                };
                readonly payment_address: {
                    readonly type: "string";
                    readonly examples: readonly ["ztron1m445gx74mjuuyhkyru5hrx886jszfga4a7dk3mg4uarrl0cru649jz4928tm6rqul2pg645hqv5"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const HttpGetapprovedlist: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["signature", "raw_data"];
        readonly properties: {
            readonly signature: {
                readonly type: "array";
                readonly description: "The signature list of transaction";
                readonly default: readonly ["e0bd4a60f1b3c89d4da3894d400e7e32385f6dd690aee17fdac4e016cdb294c5128b66f62f3947a7182c015547496eba95510c113bda2a361d811b829343c36501", "596ead6439d0f381e67f30b1ed6b3687f2bd53ce5140cdb126cfe4183235804741eeaf79b4e91f251fd7042380a9485d4d29d67f112d5387bc7457b355cd3c4200"];
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly raw_data: {
                readonly type: "string";
                readonly description: "The transaction raw data";
                readonly default: "{         \"contract\": [             {                 \"parameter\": {                     \"value\": {                         \"amount\": 1000000,                         \"owner_address\": \"41A7D8A35B260395C14AA456297662092BA3B76FC0\",                         \"to_address\": \"415A523B449890854C8FC460AB602DF9F31FE4293F\"                     },                     \"type_url\": \"type.googleapis.com/protocol.TransferContract\"                 },                 \"type\": \"TransferContract\"             }         ],         \"ref_block_bytes\": \"163d\",         \"ref_block_hash\": \"77ef4ace148b05ba\",         \"expiration\": 1555664823000,         \"timestamp\": 1555664763418     }";
                readonly format: "json";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Whether the account address format is base58check";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Isshieldedtrc20Contractnotespent: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["note", "ak", "nk", "position", "shielded_TRC20_contract_address"];
        readonly properties: {
            readonly note: {
                readonly type: "object";
                readonly properties: {};
            };
            readonly ak: {
                readonly type: "string";
            };
            readonly nk: {
                readonly type: "string";
            };
            readonly position: {
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly shielded_TRC20_contract_address: {
                readonly type: "string";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly is_spent: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Participateassetissue: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly to_address: {
                readonly type: "string";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly owner_address: {
                readonly type: "string";
                readonly description: "The participant address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "The number of trx participating in token issuance";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly asset_name: {
                readonly type: "string";
                readonly description: "Token id, default hexString";
                readonly default: "1000001031303030303031";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Proposalapprove: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Approver address";
                readonly default: "TUeTYVYJFfmBj3hVyopAZB97yc432Aay4N";
            };
            readonly proposal_id: {
                readonly type: "integer";
                readonly description: "Proposal ID";
                readonly default: 89;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly is_add_approval: {
                readonly type: "boolean";
                readonly description: "Approved";
                readonly default: true;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional.Whehter the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Proposalcreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Address of the transaction creator";
                readonly default: "TCuM8e98jmPwT1RU2jW7dekUC5HpXbGzFG";
            };
            readonly parameters: {
                readonly type: "string";
                readonly description: "Proposal parameters";
                readonly default: "[{\"key\": 0,\"value\": 100000},{\"key\": 1,\"value\": 2}]";
                readonly format: "json";
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional.Whehter the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Proposaldelete: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Address of proposal owner.";
                readonly default: "TCuM8e98jmPwT1RU2jW7dekUC5HpXbGzFG";
            };
            readonly proposal_id: {
                readonly type: "integer";
                readonly description: "Proposal ID";
                readonly default: 89;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional.Whehter the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Scanshieldedtrc20Notesbyivk: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["start_block_index", "end_block_index", "shielded_TRC20_contract_address", "ivk", "ak", "nk"];
        readonly properties: {
            readonly start_block_index: {
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly end_block_index: {
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly shielded_TRC20_contract_address: {
                readonly type: "string";
            };
            readonly ivk: {
                readonly type: "string";
            };
            readonly ak: {
                readonly type: "string";
            };
            readonly nk: {
                readonly type: "string";
            };
            readonly visible: {
                readonly type: "boolean";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Scanshieldedtrc20Notesbyovk: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["start_block_index", "end_block_index", "shielded_TRC20_contract_address", "ovk"];
        readonly properties: {
            readonly start_block_index: {
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly end_block_index: {
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly shielded_TRC20_contract_address: {
                readonly type: "string";
            };
            readonly ovk: {
                readonly type: "string";
            };
            readonly visible: {
                readonly type: "boolean";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Transferasset: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly to_address: {
                readonly type: "string";
                readonly description: "receiving address, default hexString";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly asset_name: {
                readonly type: "string";
                readonly description: "Token id, default hexString";
                readonly default: "31303030303031";
            };
            readonly amount: {
                readonly type: "integer";
                readonly default: any;
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
            readonly extra_data: {
                readonly type: "string";
                readonly description: "Optional,  totes on the transaction, HEX format";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Triggerconstantcontract: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address that triggers the contract. If visible=true, use base58check format, otherwise use hex format. For constant call you can use the all-zero address.";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly contract_address: {
                readonly type: "string";
                readonly description: "Smart contract address. If visible=true, use base58check format, otherwise use hex format.";
                readonly default: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
            };
            readonly function_selector: {
                readonly type: "string";
                readonly description: "Function call, must not be left blank.";
                readonly default: "balanceOf(address)";
            };
            readonly parameter: {
                readonly type: "string";
                readonly description: "Parameter encoding needs to be in accordance with the ABI rules, the rules are more complicated, users can use the ethers library to encode,For details, please refer to the document-Guide-Smart Contract-Best Practice-Parameter Encoding and Decoding.";
                readonly default: "000000000000000000000000a614f803b6fd780986a42c78ec9c7f77e6ded13c";
            };
            readonly data: {
                readonly type: "string";
                readonly description: "The bytecode of the contract or the data for interacting with smart contracts, including the contract function and parameters. You can choose to use this field, or you can choose to use function_selector and parameter for contract interaction. When both of data and  function_selector exist, function_selector is preferred";
            };
            readonly call_value: {
                readonly type: "integer";
                readonly description: "Amount of TRX transferred to the contract with this transaction, the unit is sun. This field may be used when estimating energy consumption.";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly call_token_value: {
                readonly type: "integer";
                readonly description: "Amount of TRC10 token transferred with this transaction";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly token_id: {
                readonly type: "integer";
                readonly description: "TRC10 token id";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional.Whehter the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "object";
                    readonly properties: {
                        readonly result: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly constant_result: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["000000000000000000000000000000000000000000000000000009a1832a6361"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Triggersmartcontract: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["owner_address", "contract_address", "fee_limit"];
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Address that triggers the contract, converted to a hex string.";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly contract_address: {
                readonly type: "string";
                readonly description: "Contract address, converted to a hex string";
                readonly default: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
            };
            readonly function_selector: {
                readonly type: "string";
                readonly description: "Function call, must not be left blank";
                readonly default: "transfer(address,uint256)";
            };
            readonly parameter: {
                readonly type: "string";
                readonly description: "Parameter encoding needs to be in accordance with the ABI rules, the rules are more complicated, users can use the ethers library to encode,For details, please refer to the document-Guide-Smart Contract-Best Practice-Parameter Encoding and Decoding.";
                readonly default: "00000000000000000000004115208EF33A926919ED270E2FA61367B2DA3753DA0000000000000000000000000000000000000000000000000000000000000032";
            };
            readonly data: {
                readonly type: "string";
                readonly description: "The data for interacting with smart contracts, including the contract function and parameters. You can choose to use this field, or you can choose to use function_selector and parameter for contract interaction. When both of data and function_selector exist, function_selector is preferred";
            };
            readonly fee_limit: {
                readonly type: "integer";
                readonly description: "Maximum TRX consumption, measured in SUN (1 TRX = 1,000,000 SUN).";
                readonly default: 1000000000;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly call_value: {
                readonly type: "integer";
                readonly description: "Amount of TRX transferred with this transaction, measured in SUN (1 TRX = 1,000,000 SUN).";
                readonly default: 0;
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly call_token_value: {
                readonly type: "integer";
                readonly description: "Amount of TRC10 token transferred with this transaction";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly token_id: {
                readonly type: "integer";
                readonly description: "TRC10 token id";
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional. Whehter the address is in base58check format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Undelegateresource1: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly receiver_address: {
                readonly type: "string";
                readonly description: "Resource receiver address";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly balance: {
                readonly type: "integer";
                readonly description: "Amount of TRX staked for resources to be delegated, unit is sun";
                readonly default: 1000000;
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly resource: {
                readonly type: "string";
                readonly description: "Resource type: 'BANDWIDTH' or 'ENERGY'";
                readonly default: "BANDWIDTH";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Unfreezeasset: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Unfreezebalancev21: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly unfreeze_balance: {
                readonly type: "integer";
                readonly description: "The amount of TRX to unstake, in sun";
                readonly default: 1000000;
                readonly format: "int64";
                readonly minimum: -9223372036854776000;
                readonly maximum: 9223372036854776000;
            };
            readonly resource: {
                readonly type: "string";
                readonly description: "Resource type: 'BANDWIDTH' or 'ENERGY'";
                readonly default: "BANDWIDTH";
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Updateaccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner_address is the account address to be modified, converted to a hex string";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly account_name: {
                readonly type: "string";
                readonly description: "Account_name is the name of the account, converted to a hex string";
                readonly default: "0x7570646174654e616d6531353330383933343635353139";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional,whether the address is in base58 format";
                readonly default: true;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional,for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Updatewitness: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly update_url: {
                readonly type: "string";
                readonly description: "Website url, default hexString";
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Validateaddress: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["address"];
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "Address should be in base58checksum, hexString, or base64 format.";
                readonly default: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly result: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Votewitnessaccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly votes: {
                readonly type: "array";
                readonly description: "'vote_address' stands for the address of the witness you want to vote, default hexString, 'vote_count' stands for the number of votes you want to vote";
                readonly items: {
                    readonly properties: {
                        readonly vote_address: {
                            readonly type: "string";
                            readonly default: "41e552f6487585c2b58bc2c9bb4492bc1f17132cd0";
                        };
                        readonly vote_count: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletDeploycontract: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly abi: {
                readonly type: "string";
                readonly description: "Smart Contract's Application Binary Interface";
                readonly default: "\"[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"key\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"set\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"key\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"get\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}]\"";
                readonly format: "json";
            };
            readonly bytecode: {
                readonly type: "string";
                readonly description: "The compiled contract's identifier, used to interact with the Virtual Machine.";
                readonly default: "608060405234801561001057600080fd5b5060de8061001f6000396000f30060806040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631ab06ee58114604d5780639507d39a146067575b600080fd5b348015605857600080fd5b506065600435602435608e565b005b348015607257600080fd5b50607c60043560a0565b60408051918252519081900360200190f35b60009182526020829052604090912055565b600090815260208190526040902054905600a165627a7a72305820fdfe832221d60dd582b4526afa20518b98c2e1cb0054653053a844cf265b25040029";
            };
            readonly fee_limit: {
                readonly type: "integer";
                readonly description: "Maximum TRX consumption, measured in SUN (1 TRX = 1,000,000 SUN).";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly parameter: {
                readonly type: "string";
                readonly description: "Parameter passed to the constructor of the contract. Call the virtual machine format of the parameter [1, 2], use the js tool provided by remix, convert the parameter array [1, 2] called by the contract caller into the parameter format required by the virtual machine.";
            };
            readonly origin_energy_limit: {
                readonly type: "integer";
                readonly description: "The max energy which will be consumed by the owner in the process of execution or creation of the contract, is an integer which should be greater than 0.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Contract owner address, converted to a hex string";
                readonly default: "TJmmqjb1DK9TTZbQXzRQ2AuA94z4gKAPFh";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "Contract name";
                readonly default: "SomeContract";
            };
            readonly call_value: {
                readonly type: "integer";
                readonly description: "Amount of TRX transferred with this transaction, measured in SUN (1TRX = 1,000,000 SUN)";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly consume_user_resource_percent: {
                readonly type: "integer";
                readonly description: "The same as User Pay Ratio. The percentage of resources specified for users who use this contract. This field accepts integers between [0, 100]. If it is 0, it means the user does not consume resources until the developer resources are exhausted. However, it is strongly recommended to set the value between 1 and 99 (inclusive). This is prevent the contract developer from potential malicious infinite loop time out attacks.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional. Whehter the address is in base58 format.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional. Whehter the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGetblockbylatestnum: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly num: {
                readonly type: "integer";
                readonly description: "The number of blocks to query";
                readonly default: 5;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGetblockbynum: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly num: {
                readonly type: "integer";
                readonly description: "num is the block height";
                readonly default: 200;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly blockID: {
                    readonly type: "string";
                    readonly examples: readonly ["00000000000000c82a54a3bbdc956e1ddebc903f29b8daf28505b56f55a3f87d"];
                };
                readonly block_header: {
                    readonly type: "object";
                    readonly properties: {
                        readonly raw_data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly number: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [200];
                                };
                                readonly txTrieRoot: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0000000000000000000000000000000000000000000000000000000000000000"];
                                };
                                readonly witness_address: {
                                    readonly type: "string";
                                    readonly examples: readonly ["411661f25387370c9cd3a9a5d97e60ca90f4844e7e"];
                                };
                                readonly parentHash: {
                                    readonly type: "string";
                                    readonly examples: readonly ["00000000000000c7c8f27726916dfddca3c1c3481eb01da8a08938263674cea4"];
                                };
                                readonly timestamp: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [1529892138000];
                                };
                            };
                        };
                        readonly witness_signature: {
                            readonly type: "string";
                            readonly examples: readonly ["691e9116963b54ef7eb07692266319b029217e4d4ae8e8cb97e341617460f3822eff149c690aac6f2e0ad27d0af4fa8824d113d7a71c091245f778438ca4bde801"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGetbrokerage: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "Super representative's account address";
                readonly default: "TGj1Ej1qRzL9feLTLhjwgxXF4Ct6GTWg2U";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGetchainparameters: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGetcontract: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "Contract address, converted to a hex string.";
                readonly default: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, is address in visible format(base58check) or hex?";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGetexchangebyid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "integer";
                readonly description: "Transaction Pair ID";
                readonly default: 1;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGetnodeinfo: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGetnowblock: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly blockID: {
                    readonly type: "string";
                    readonly examples: readonly ["00000000000080f82038aa301eda07eb27906589dd849d1c9ba5d84af94cf038"];
                };
                readonly block_header: {
                    readonly type: "object";
                    readonly properties: {
                        readonly raw_data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly number: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [33016];
                                };
                                readonly txTrieRoot: {
                                    readonly type: "string";
                                    readonly examples: readonly ["0000000000000000000000000000000000000000000000000000000000000000"];
                                };
                                readonly witness_address: {
                                    readonly type: "string";
                                    readonly examples: readonly ["41928c9af0651632157ef27a2cf17ca72c575a4d21"];
                                };
                                readonly parentHash: {
                                    readonly type: "string";
                                    readonly examples: readonly ["00000000000080f7b502cb572e67f3ad8e75558c0cd64f54cc7c0697f08000a0"];
                                };
                                readonly version: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [3];
                                };
                                readonly timestamp: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [1536713433000];
                                };
                            };
                        };
                        readonly witness_signature: {
                            readonly type: "string";
                            readonly examples: readonly ["917101db1a7f9252fa3fef139acc07153876b0a4a46e57a235f9b1578bb6da2f12d1a4bc09350e3c5b609353876ffdd581bd903ce31304e42066e363853cf77d00"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGetreward: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "User's address";
                readonly default: "TGj1Ej1qRzL9feLTLhjwgxXF4Ct6GTWg2U";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletGettransactionbyid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "Transaction ID";
                readonly default: "7c2d4206c03a883dd9066d620335dc1be272a8dc733cfa3f6d10308faa37facc";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ret: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly contractRet: {
                                readonly type: "string";
                                readonly examples: readonly ["SUCCESS"];
                            };
                        };
                    };
                };
                readonly signature: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["ffbf691a89d95f6ad8175611c7d334c8159b95ff9c1e83872e7670103b185e85faf0a394b23d99581385d38038ab5c4684759c864a5621009f6e95da0a5feab501"];
                    };
                };
                readonly txID: {
                    readonly type: "string";
                    readonly examples: readonly ["d0807adb3c5412aa150787b944c96ee898c997debdc27e2f6a643c771edb5933"];
                };
                readonly raw_data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contract: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly parameter: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly amount: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [16];
                                                    };
                                                    readonly asset_name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["54726f6e696373"];
                                                    };
                                                    readonly owner_address: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["414a5fe0179f2dd9c900194e63d661863cd0ade7b0"];
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["41718de6b323652d1257437ace160c4f4198aae4e1"];
                                                    };
                                                };
                                            };
                                            readonly type_url: {
                                                readonly type: "string";
                                                readonly examples: readonly ["type.googleapis.com/protocol.TransferAssetContract"];
                                            };
                                        };
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["TransferAssetContract"];
                                    };
                                };
                            };
                        };
                        readonly ref_block_bytes: {
                            readonly type: "string";
                            readonly examples: readonly ["6bdd"];
                        };
                        readonly ref_block_hash: {
                            readonly type: "string";
                            readonly examples: readonly ["1616edaf3a57fe19"];
                        };
                        readonly expiration: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1546455678000];
                        };
                        readonly timestamp: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1546455620175];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletListexchanges: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly visible: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletListnodes: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletListproposals: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletUpdateasset: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "The issuers address of the token, default hexString";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly description: {
                readonly type: "string";
                readonly description: "The description of token, default hexString";
            };
            readonly url: {
                readonly type: "string";
                readonly description: "The token's website url, default hexString";
            };
            readonly new_limit: {
                readonly type: "integer";
                readonly description: "Each token holder's free bandwidth";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly new_public_limit: {
                readonly type: "integer";
                readonly description: "The total free bandwidth of the token";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletUpdatebrokerage: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Super representative's account address";
                readonly default: "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1";
            };
            readonly brokerage: {
                readonly type: "integer";
                readonly description: "The brokerage ratio of the super representative, for example: 20 means 20%, 100 means 100%";
                readonly default: 20;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletUpdateenergylimit: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Transaction creator address, in hex string format.";
                readonly default: "TSNEe5Tf4rnc9zPMNXfaTF5fZfHDDH8oyW";
            };
            readonly contract_address: {
                readonly type: "string";
                readonly description: "The address of the contract to be modified, in hex string format.";
                readonly default: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
            };
            readonly origin_energy_limit: {
                readonly type: "integer";
                readonly description: "The maximum energy the creator sets. The greatest amount of energy the creator consumes during contract execution or creation process.";
                readonly default: 100000000;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional.Whehter the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WalletUpdatesetting: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["owner_address", "contract_address", "consume_user_resource_percent"];
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Transaction creator address, in hex string format.";
                readonly default: "TSNEe5Tf4rnc9zPMNXfaTF5fZfHDDH8oyW";
            };
            readonly contract_address: {
                readonly type: "string";
                readonly description: "The address of the contract to be modified, in hex string format.";
                readonly default: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
            };
            readonly consume_user_resource_percent: {
                readonly type: "integer";
                readonly description: "Consume user's resource percentage. It should be an integer between [0, 100]. if 0, means it does not consume user's resource until the developer's resource has been used up";
                readonly default: 10;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional.Whehter the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Withdrawbalance: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Super representative or user address";
                readonly default: "TGj1Ej1qRzL9feLTLhjwgxXF4Ct6GTWg2U";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Withdrawexpireunfreeze: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly owner_address: {
                readonly type: "string";
                readonly description: "Owner address, default hexString";
                readonly default: "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g";
            };
            readonly visible: {
                readonly type: "boolean";
                readonly description: "Optional, Whether the address is in base58 format.";
                readonly default: true;
            };
            readonly Permission_id: {
                readonly type: "integer";
                readonly description: "Optional, for multi-signature use";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { AccountCreateaccount, AccountGetaccount, AccountResourcesFreezebalance, AccountResourcesUnfreezebalance, Accountpermissionupdate, Broadcasthex, Broadcasttransaction, Cancelallunfreezev2, Clearabi, Createaddress, Createassetissue, Createshieldedcontractparameters, Createspendauthsig, Createtransaction, Createwitness, Delegateresource1, Easytransfer, Easytransferasset, Easytransferassetbyprivate, Easytransferbyprivate, Estimateenergy, Exchangecreate, Exchangeinject, Exchangetransaction, Exchangewithdraw, Freezebalancev21, Generateaddress, Getaccountbalance, Getaccountnet, Getaccountresource, Getakfromask, Getassetissuebyaccount, Getassetissuebyid, GetassetissuebynameCopy, GetassetissuelistbynameCopy, Getavailableunfreezecount1, Getbandwidthprices, Getblock1, Getblockbalance, Getblockbyid, Getblockbylimitnext, Getburntrx, Getcandelegatedmaxsize, Getcanwithdrawunfreezeamount1, Getcontractinfo, Getdelegatedresource, Getdelegatedresourceaccountindex, Getdelegatedresourceaccountindexv21, Getdelegatedresourcev2, Getdiversifier, Getexpandedspendingkey, Getincomingviewingkey, Getnewshieldedaddress, Getnextmaintenancetime, Getnkfromnsk, Getpaginatedassetissuelist, Getpendingsize, Getproposalbyid, Getspendingkey, Gettransactionfrompending, Gettransactioninfobyblocknum, Gettransactioninfobyid, Gettransactionlistfrompending, Gettransactionsign, Gettriggerinputforshieldedtrc20Contract, Getzenpaymentaddress, HttpGetapprovedlist, Isshieldedtrc20Contractnotespent, Participateassetissue, Proposalapprove, Proposalcreate, Proposaldelete, Scanshieldedtrc20Notesbyivk, Scanshieldedtrc20Notesbyovk, Transferasset, Triggerconstantcontract, Triggersmartcontract, Undelegateresource1, Unfreezeasset, Unfreezebalancev21, Updateaccount, Updatewitness, Validateaddress, Votewitnessaccount, WalletDeploycontract, WalletGetblockbylatestnum, WalletGetblockbynum, WalletGetbrokerage, WalletGetchainparameters, WalletGetcontract, WalletGetexchangebyid, WalletGetnodeinfo, WalletGetnowblock, WalletGetreward, WalletGettransactionbyid, WalletListexchanges, WalletListnodes, WalletListproposals, WalletUpdateasset, WalletUpdatebrokerage, WalletUpdateenergylimit, WalletUpdatesetting, Withdrawbalance, Withdrawexpireunfreeze };
