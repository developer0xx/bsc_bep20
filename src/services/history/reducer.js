import actionTypes from './actionType'

const initialState = {
    eth_history: {},
    busd_history: {},
    tusd_history: {},
    dai_history: {},
    usdc_history: {},
    usdt_history: {},
    eth_balance: {},
    busd_balance: {},
    tusd_balance: {},
    dai_balance: {},
    usdc_balance: {},
    usdt_balance: {},
    dai_approve:{},
    dai_swap:{},
    usdt_approve:{},
    usdt_swap:{},
    usdc_approve:{},
    usdc_swap:{},
    tusd_approve:{},
    tusd_swap:{},
    busd_approve:{},
    busd_swap:{},

    usdt_stake:{},
    usdt_stake_balance:{},
    usdt_stake_reward:{},
    usdt_total_count:{},
    usdt_unstake:{},
    usdt_claim:{},
    usdt_exit:{},
    usdt_total_reward:{},
    usdt_total_staked_balance:{},
    usdt_total_reward_in_memory:{},
    usdt_interest:{},

    busd_stake:{},
    busd_stake_balance:{},
    busd_stake_reward:{},
    busd_total_count:{},
    busd_unstake:{},
    busd_claim:{},
    busd_exit:{},
    busd_total_reward:{},
    busd_total_staked_balance:{},
    busd_total_reward_in_memory:{},
    busd_interest:{},


    dai_stake:{},
    dai_stake_balance:{},
    dai_stake_reward:{},
    dai_total_count:{},
    dai_unstake:{},
    dai_claim:{},
    dai_exit:{},
    dai_total_reward:{},
    dai_total_staked_balance:{},
    dai_total_reward_in_memory:{},
    dai_interest:{},

    usdc_stake:{},
    usdc_stake_balance:{},
    usdc_stake_reward:{},
    usdc_total_count:{},
    usdc_unstake:{},
    usdc_claim:{},
    usdc_exit:{},
    usdc_total_reward:{},
    usdc_total_staked_balance:{},
    usdc_total_reward_in_memory:{},
    usdc_interest:{},


    gfx_history: {},
    gfx_balance: {},
    gfx_approve:{},
    gfx_swap:{},
    gfx_stake:{},
    gfx_stake_balance:{},
    gfx_stake_reward:{},
    gfx_total_count:{},
    gfx_unstake:{},
    gfx_claim:{},
    gfx_exit:{},
    gfx_total_reward:{},
    gfx_total_staked_balance:{},
    gfx_total_reward_in_memory:{},
    gfx_interest:{},


    gld_history: {},
    gld_balance: {},
    gld_approve:{},
    gld_swap:{},
    gld_stake:{},
    gld_stake_balance:{},
    gld_stake_reward:{},
    gld_total_count:{},
    gld_unstake:{},
    gld_claim:{},
    gld_exit:{},
    gld_total_reward:{},
    gld_total_staked_balance:{},
    gld_total_reward_in_memory:{},
    gld_interest:{},


    egld_history: {},
    egld_balance: {},
    egld_approve:{},
    egld_swap:{},
    egld_stake:{},
    egld_stake_balance:{},
    egld_stake_reward:{},
    egld_total_count:{},
    egld_unstake:{},
    egld_claim:{},
    egld_exit:{},
    egld_total_reward:{},
    egld_total_staked_balance:{},
    egld_total_reward_in_memory:{},
    egld_interest:{},
}

export const historyStore = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_ETH_HISTORY: {
            return {
                ...state,
                eth_history: action.payload
            }
        }

        case actionTypes.GET_BUSD_HISTORY: {
            return {
                ...state,
                busd_history: action.payload
            }
        }
        case actionTypes.GET_TUSD_HISTORY: {
            return {
                ...state,
                tusd_history: action.payload
            }
        }

        case actionTypes.GET_DAI_HISTORY: {
            return {
                ...state,
                dai_history: action.payload
            }
        }
        case actionTypes.GET_USDC_HISTORY: {
            return {
                ...state,
                usdc_history: action.payload
            }
        }

        case actionTypes.GET_USDT_HISTORY: {
            return {
                ...state,
                usdt_history: action.payload
            }
        }

        case actionTypes.GET_BUSD_BALANCE: {
            return {
                ...state,
                busd_balance: action.payload
            }
        }

        case actionTypes.GET_USDT_BALANCE: {
            return {
                ...state,
                usdt_balance: action.payload
            }
        }

        case actionTypes.GET_USDC_BALANCE: {
            return {
                ...state,
                usdc_balance: action.payload
            }
        }

        case actionTypes.GET_TUSD_BALANCE: {
            return {
                ...state,
                tusd_balance: action.payload
            }
        }

        case actionTypes.GET_DAI_BALANCE: {
            return {
                ...state,
                dai_balance: action.payload
            }
        }

        case actionTypes.GET_ETH_BALANCE: {
            return {
                ...state,
                eth_balance: action.payload
            }
        }

        case actionTypes.DAI_APPROVE: {
            return {
                ...state,
                dai_approve: action.payload
            }
        }


        case actionTypes.DAI_SWAP: {
            return {
                ...state,
                dai_swap: action.payload
            }
        }
       
        

        case actionTypes.USDT_APPROVE: {
            return {
                ...state,
                usdt_approve: action.payload
            }
        }
        case actionTypes.USDT_SWAP: {
            return {
                ...state,
                usdt_swap: action.payload
            }
        }

        case actionTypes.USDC_APPROVE: {
            return {
                ...state,
                usdc_approve: action.payload
            }
        }
        case actionTypes.USDC_SWAP: {
            return {
                ...state,
                usdc_swap: action.payload
            }
        }

        case actionTypes.BUSD_APPROVE: {
            return {
                ...state,
                busd_approve: action.payload
            }
        }
        case actionTypes.BUSD_SWAP: {
            return {
                ...state,
                busd_swap: action.payload
            }
        }

        case actionTypes.TUSD_APPROVE: {
            return {
                ...state,
                tusd_approve: action.payload
            }
        }
        case actionTypes.TUSD_SWAP: {
            return {
                ...state,
                tusd_swap: action.payload
            }
        }


        case actionTypes.USDT_STAKE: {
            return {
                ...state,
                usdt_stake: action.payload
            }
        }

        case actionTypes.USDT_STAKE_BALANCE: {
            return {
                ...state,
                usdt_stake_balance: action.payload
            }
        }


        case actionTypes.GET_USDT_REWARD: {
            return {
                ...state,
                usdt_stake_reward: action.payload
            }
        }

        case actionTypes.GET_USDT_TOTAL_COUNT: {
            return {
                ...state,
                usdt_total_count: action.payload
            }
        }
        
        case actionTypes.USDT_UNSTAKE: {
            return {
                ...state,
                usdt_unstake: action.payload
            }
        }
        case actionTypes.USDT_CLAIM: {
            return {
                ...state,
                usdt_claim: action.payload
            }
        }
        case actionTypes.USDT_EXIT: {
            return {
                ...state,
                usdt_exit: action.payload
            }
        }
        case actionTypes.USDT_TOTAL_REWARD : {
            return {
                ...state,
                usdt_total_reward: action.payload
            }
        }
        case actionTypes.USDT_TOTAL_STAKED_BALANCE : {
            return {
                ...state,
                usdt_total_staked_balance: action.payload
            }
        }


        case actionTypes.USDT_TOTAL_REWARD_IN_MEMORY : {
            return {
                ...state,
                usdt_total_reward_in_memory: action.payload
            }
        }

        case actionTypes.USDT_TOTAL_INTEREST : {
            return {
                ...state,
                usdt_interest: action.payload
            }
        }


  //////////////////////BUSD////////////////////////////////////////////////
  case actionTypes.BUSD_STAKE: {
    return {
        ...state,
        busd_stake: action.payload
    }
}

case actionTypes.BUSD_STAKE_BALANCE: {
    return {
        ...state,
        busd_stake_balance: action.payload
    }
}


case actionTypes.GET_BUSD_REWARD: {
    return {
        ...state,
        busd_stake_reward: action.payload
    }
}

case actionTypes.GET_BUSD_TOTAL_COUNT: {
    return {
        ...state,
        busd_total_count: action.payload
    }
}

case actionTypes.BUSD_UNSTAKE: {
    return {
        ...state,
        busd_unstake: action.payload
    }
}
case actionTypes.BUSD_CLAIM: {
    return {
        ...state,
        busd_claim: action.payload
    }
}
case actionTypes.BUSD_EXIT: {
    return {
        ...state,
        busd_exit: action.payload
    }
}
case actionTypes.BUSD_TOTAL_REWARD : {
    return {
        ...state,
        busd_total_reward: action.payload
    }
}
case actionTypes.BUSD_TOTAL_STAKED_BALANCE : {
    return {
        ...state,
        busd_total_staked_balance: action.payload
    }
}


case actionTypes.BUSD_TOTAL_REWARD_IN_MEMORY : {
    return {
        ...state,
        busd_total_reward_in_memory: action.payload
    }
}

  

case actionTypes.BUSD_TOTAL_INTEREST : {
    return {
        ...state,
        busd_interest: action.payload
    }
}





///////////////Dai////////////////////////////
        case actionTypes.DAI_STAKE: {
            return {
                ...state,
                dai_stake: action.payload
            }
        }

        case actionTypes.DAI_STAKE_BALANCE: {
            return {
                ...state,
                dai_stake_balance: action.payload
            }
        }


        case actionTypes.GET_DAI_REWARD: {
            return {
                ...state,
                dai_stake_reward: action.payload
            }
        }

        case actionTypes.GET_DAI_TOTAL_COUNT: {
            return {
                ...state,
                dai_total_count: action.payload
            }
        }
        
        case actionTypes.DAI_UNSTAKE: {
            return {
                ...state,
                dai_unstake: action.payload
            }
        }
        case actionTypes.DAI_CLAIM: {
            return {
                ...state,
                dai_claim: action.payload
            }
        }
        case actionTypes.DAI_EXIT: {
            return {
                ...state,
                dai_exit: action.payload
            }
        }
        case actionTypes.DAI_TOTAL_REWARD : {
            return {
                ...state,
                dai_total_reward: action.payload
            }
        }
        case actionTypes.DAI_TOTAL_STAKED_BALANCE : {
            return {
                ...state,
                dai_total_staked_balance: action.payload
            }
        }


        case actionTypes.DAI_TOTAL_REWARD_IN_MEMORY : {
            return {
                ...state,
                dai_total_reward_in_memory: action.payload
            }
        }



        case actionTypes.DAI_TOTAL_INTEREST : {
            return {
                ...state,
                dai_interest: action.payload
            }
        }
///////////////USDC////////////////////////////
        case actionTypes.USDC_STAKE: {
            return {
                ...state,
                usdc_stake: action.payload
            }
        }

        case actionTypes.USDC_STAKE_BALANCE: {
            return {
                ...state,
                usdc_stake_balance: action.payload
            }
        }


        case actionTypes.GET_USDC_REWARD: {
            return {
                ...state,
                usdc_stake_reward: action.payload
            }
        }

        case actionTypes.GET_USDC_TOTAL_COUNT: {
            return {
                ...state,
                usdc_total_count: action.payload
            }
        }
        
        case actionTypes.USDC_UNSTAKE: {
            return {
                ...state,
                usdc_unstake: action.payload
            }
        }
        case actionTypes.USDC_CLAIM: {
            return {
                ...state,
                usdc_claim: action.payload
            }
        }
        case actionTypes.USDC_EXIT: {
            return {
                ...state,
                usdc_exit: action.payload
            }
        }
        case actionTypes.USDC_TOTAL_REWARD : {
            return {
                ...state,
                usdc_total_reward: action.payload
            }
        }
        case actionTypes.USDC_TOTAL_STAKED_BALANCE : {
            return {
                ...state,
                usdc_total_staked_balance: action.payload
            }
        }

        case actionTypes.USDC_TOTAL_REWARD_IN_MEMORY : {
            return {
                ...state,
                usdc_total_reward_in_memory: action.payload
            }
        }

        case actionTypes.USDC_TOTAL_INTEREST : {
            return {
                ...state,
                usdc_interest: action.payload
            }
        }
        

        /////////////////GFX/////////////////////
        case actionTypes.GET_GFX_HISTORY : {
            return {
                ...state,
                gfx_history: action.payload
            }
        }

        case actionTypes.GET_GFX_BALANCE : {
            return {
                ...state,
                gfx_balance: action.payload
            }
        }

        case actionTypes.GFX_APPROVE : {
            return {
                ...state,
                gfx_approve: action.payload
            }
        }

        case actionTypes.GFX_SWAP : {
            return {
                ...state,
                gfx_swap: action.payload
            }
        }

        case actionTypes.GFX_STAKE: {
            return {
                ...state,
                gfx_stake: action.payload
            }
        }

        case actionTypes.GFX_STAKE_BALANCE: {
            return {
                ...state,
                gfx_stake_balance: action.payload
            }
        }


        case actionTypes.GET_GFX_REWARD: {
            return {
                ...state,
                gfx_stake_reward: action.payload
            }
        }

        case actionTypes.GET_GFX_TOTAL_COUNT: {
            return {
                ...state,
                gfx_total_count: action.payload
            }
        }
        
        case actionTypes.GFX_UNSTAKE: {
            return {
                ...state,
                gfx_unstake: action.payload
            }
        }
        case actionTypes.GFX_CLAIM: {
            return {
                ...state,
                gfx_claim: action.payload
            }
        }
        case actionTypes.GFX_EXIT: {
            return {
                ...state,
                gfx_exit: action.payload
            }
        }
        case actionTypes.GFX_TOTAL_REWARD : {
            return {
                ...state,
                gfx_total_reward: action.payload
            }
        }
        case actionTypes.GFX_TOTAL_STAKED_BALANCE : {
            return {
                ...state,
                gfx_total_staked_balance: action.payload
            }
        }

        case actionTypes.GFX_TOTAL_REWARD_IN_MEMORY : {
            return {
                ...state,
                gfx_total_reward_in_memory: action.payload
            }
        }
        
        case actionTypes.GFX_TOTAL_INTEREST : {
            return {
                ...state,
                gfx_interest: action.payload
            }
        }
        
        /////////////////GLD/////////////////////
        case actionTypes.GET_GLD_HISTORY : {
            return {
                ...state,
                gld_history: action.payload
            }
        }

        case actionTypes.GET_GLD_BALANCE : {
            return {
                ...state,
                gld_balance: action.payload
            }
        }

        case actionTypes.GLD_APPROVE : {
            return {
                ...state,
                gld_approve: action.payload
            }
        }

        case actionTypes.GLD_SWAP : {
            return {
                ...state,
                gld_swap: action.payload
            }
        }

        case actionTypes.GLD_STAKE: {
            return {
                ...state,
                gld_stake: action.payload
            }
        }

        case actionTypes.GLD_STAKE_BALANCE: {
            return {
                ...state,
                gld_stake_balance: action.payload
            }
        }


        case actionTypes.GET_GLD_REWARD: {
            return {
                ...state,
                gld_stake_reward: action.payload
            }
        }

        case actionTypes.GET_GLD_TOTAL_COUNT: {
            return {
                ...state,
                gld_total_count: action.payload
            }
        }
        
        case actionTypes.GLD_UNSTAKE: {
            return {
                ...state,
                gld_unstake: action.payload
            }
        }
        case actionTypes.GLD_CLAIM: {
            return {
                ...state,
                gld_claim: action.payload
            }
        }
        case actionTypes.GLD_EXIT: {
            return {
                ...state,
                gld_exit: action.payload
            }
        }
        case actionTypes.GLD_TOTAL_REWARD : {
            return {
                ...state,
                gld_total_reward: action.payload
            }
        }
        case actionTypes.GLD_TOTAL_STAKED_BALANCE : {
            return {
                ...state,
                gld_total_staked_balance: action.payload
            }
        }
 
        case actionTypes.GLD_TOTAL_REWARD_IN_MEMORY : {
            return {
                ...state,
                gld_total_reward_in_memory: action.payload
            }
        }
        
        case actionTypes.GLD_TOTAL_INTEREST : {
            return {
                ...state,
                gld_interest: action.payload
            }
        }
       /////////////////EGLD/////////////////////
       case actionTypes.GET_EGLD_HISTORY : {
        return {
            ...state,
            egld_history: action.payload
        }
    }

    case actionTypes.GET_EGLD_BALANCE : {
        return {
            ...state,
            egld_balance: action.payload
        }
    }

    case actionTypes.EGLD_APPROVE : {
        return {
            ...state,
            egld_approve: action.payload
        }
    }

    case actionTypes.EGLD_SWAP : {
        return {
            ...state,
            egld_swap: action.payload
        }
    }

    case actionTypes.EGLD_STAKE: {
        return {
            ...state,
            egld_stake: action.payload
        }
    }

    case actionTypes.EGLD_STAKE_BALANCE: {
        return {
            ...state,
            egld_stake_balance: action.payload
        }
    }


    case actionTypes.GET_EGLD_REWARD: {
        return {
            ...state,
            egld_stake_reward: action.payload
        }
    }

    case actionTypes.GET_EGLD_TOTAL_COUNT: {
        return {
            ...state,
            egld_total_count: action.payload
        }
    }
    
    case actionTypes.EGLD_UNSTAKE: {
        return {
            ...state,
            egld_unstake: action.payload
        }
    }
    case actionTypes.EGLD_CLAIM: {
        return {
            ...state,
            egld_claim: action.payload
        }
    }
    case actionTypes.EGLD_EXIT: {
        return {
            ...state,
            egld_exit: action.payload
        }
    }
    case actionTypes.EGLD_TOTAL_REWARD : {
        return {
            ...state,
            egld_total_reward: action.payload
        }
    }
    case actionTypes.EGLD_TOTAL_STAKED_BALANCE : {
        return {
            ...state,
            egld_total_staked_balance: action.payload
        }
    }


    case actionTypes.EGLD_TOTAL_REWARD_IN_MEMORY : {
        return {
            ...state,
            egld_total_reward_in_memory: action.payload
        }
    }



    case actionTypes.EGLD_TOTAL_INTEREST : {
        return {
            ...state,
            egld_interest: action.payload
        }
    }


        default:
            return state;


    }
}
