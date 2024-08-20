// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IFlareSwapPoolImmutables.sol';
import './pool/IFlareSwapPoolState.sol';
import './pool/IFlareSwapPoolDerivedState.sol';
import './pool/IFlareSwapPoolActions.sol';
import './pool/IFlareSwapPoolOwnerActions.sol';
import './pool/IFlareSwapPoolEvents.sol';

/// @title The interface for a FlareSwap Pool
/// @notice A Uniswap pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IFlareSwapPool is
    IFlareSwapPoolImmutables,
    IFlareSwapPoolState,
    IFlareSwapPoolDerivedState,
    IFlareSwapPoolActions,
    IFlareSwapPoolOwnerActions,
    IFlareSwapPoolEvents
{

}
