const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/evm-utils');

const runApp = async () => {
  await Moralis.start({
    apiKey: "QiA9SU19plaDg8ScMPexyw7QgmPwp7hjJKKpDzdR50ntPAzusMAj71dBb1ub0u5y",
    // ...and any other configuration
  });
  
    const abi = [
    {
        path: "./test.png",
        content: "YOUR_JSON_OR_BASE64",
    },
    ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
  
  console.log(response.toJSON());
}

runApp();