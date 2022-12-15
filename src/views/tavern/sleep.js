// import GameAbi from "../../abi/Game.json";
// import { gameAddress } from "../../abi/contractdata";
// import Web3 from 'web3'


/**
获取战斗奖励接口
 */
// export const getrewards = async () => {
//     var web3 = (web3 = new Web3(window.web3.currentProvider));
//     const fromAddress = await web3.eth.getAccounts();
//     const getrewards = new web3.eth.Contract(GameAbi, gameAddress)
//     await getrewards.methods.rewards(fromAddress[0]).call().then(console.log);
// }

/**
 * 英雄休息接口
 */
// export const sleep = async (tokenId,houseId) => {
//     if (window.ethereum) {
//         console.log(tokenId,houseId);
//         var web3 = (web3 = new Web3(window.web3.currentProvider));
//         const fromAddress = await web3.eth.getAccounts();
//         const battlecontract = new web3.eth.Contract(GameAbi, gameAddress)
//         await battlecontract.methods.sleep(tokenId,houseId).send({ from: fromAddress[0]})
//     }
// }