// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Stellar Soroban Contracts ^0.6.0
#![no_std]

use soroban_sdk::{contract, contractimpl, Address, Env, String};
use stellar_access::ownable::{self as ownable, Ownable};
use stellar_macros::only_owner;
use stellar_tokens::fungible::{Base, FungibleToken};

#[contract]
pub struct Openrank;

#[contractimpl]
impl Openrank {
    pub fn __constructor(e: &Env, recipient: Address, owner: Address) {
        Base::set_metadata(
            e,
            8,
            String::from_str(e, "OpenRank"),
            String::from_str(e, "USDG"),
        );
        Base::mint(e, &recipient, 1000000000000);
        ownable::set_owner(e, &owner);
    }

    #[only_owner]
    pub fn mint(e: &Env, account: Address, amount: i128) {
        Base::mint(e, &account, amount);
    }
}

#[contractimpl]
impl FungibleToken for Openrank {
    type ContractType = Base;
}

//
// Utils
//

#[contractimpl]
impl Ownable for Openrank {}
