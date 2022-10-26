import type { BridgeNetwork } from "./types";

// FIX need to control chain naming here
export default [
  {
    id: 1,
    displayName: "Polygon PoS Bridge",
    bridgeDbName: "polygon",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon"],
    destinationChain: "Polygon",
  },
  {
    id: 2,
    displayName: "Arbitrum Bridge",
    bridgeDbName: "arbitrum",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Arbitrum"],
    destinationChain: "Arbitrum",
  },
  {
    id: 3,
    displayName: "Avalanche Bridge",
    bridgeDbName: "avalanche",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Avalanche"],
    destinationChain: "Avalanche",
  },
  {
    id: 4,
    displayName: "Optimism Gateway",
    bridgeDbName: "optimism",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Optimism"],
  },
  {
    id: 5,
    displayName: "Multichain",
    bridgeDbName: "multichain",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "BSC", "Arbitrum", "Optimism"],
    chainMapping: {
      "avalanche":"avax"  // this is needed temporarily, need to fix and remove
    }
  },
  {
    id: 6,
    displayName: "Poly Network",
    bridgeDbName: "polynetwork",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "BSC", "Arbitrum", "Optimism"],
    chainMapping: {
      "avalanche":"avax"
    }
  },
  /*
  {
    id: 7,
    displayName: "Orbit Bridge",
    bridgeDbName: "orbitbridge",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "BSC"],
    chainMapping: {
      "avalanche":"avax"
    }
  },
  */
 /*
  {
    id: 8,
    displayName: "ChainPort",
    bridgeDbName: "chainport",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "BSC"],
    chainMapping: {
      "avalanche":"avax"
    }
  },
  */
  {
    id: 9,
    displayName: "Portal by Wormhole",
    bridgeDbName: "portal",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "BSC"],
    chainMapping: {
      "avalanche":"avax"  // this is needed temporarily, need to fix and remove
    }
  },
  {
    id: 10,
    displayName: "Celer cBridge",
    bridgeDbName: "celer",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "BSC", "Arbitrum", "Optimism"],
    chainMapping: {
      "avalanche":"avax"
    }
  },
  {
    id: 11,
    displayName: "Synapse",
    bridgeDbName: "synapse",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "BSC", "Arbitrum", "Optimism"],
    chainMapping: {
      "avalanche":"avax"
    }
  },
  /*
  {
    id: 12,
    displayName: "Stargate",
    bridgeDbName: "stargate",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "BSC", "Arbitrum", "Optimism"],
    chainMapping: {
      "avalanche":"avax"  // this is needed temporarily, need to fix and remove
    }
  },
  */
  {
    id: 13,
    displayName: "Hop",
    bridgeDbName: "hop",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Arbitrum", "Optimism"],
  },
] as BridgeNetwork[];
