import GameAbi from "../../abi/Game.json";
//import HeroNFTAbi from "../../abi/HeroNFT.json";
import { 
    //HeroNFTAddress,
    gameAddress } from "../../abi/contractdata";
import Web3 from 'web3'
//import store from '../../store'

/**
获取奖励接口
 */
export const getrewards = async () => {
    var web3 = (web3 = new Web3(window.web3.currentProvider));
    const fromAddress = await web3.eth.getAccounts();
    const getrewards = new web3.eth.Contract(GameAbi, gameAddress)
    const rewards = await getrewards.methods.rewards(fromAddress[0]).call()
    return rewards
}

/**
获取玩家英雄
 */

// export const gethero = async () => {
//     let gethero = []
//     if (window.ethereum) {
//         //console.log('英雄id');
//         var web3 = (web3 = new Web3(window.web3.currentProvider));
//         const fromAddress = await web3.eth.getAccounts();
//         const getherobalance = new web3.eth.Contract(HeroNFTAbi, HeroNFTAddress)
//         let herobalance = await getherobalance.methods.balanceOf(fromAddress[0]).call();
//         console.log(herobalance)
//         for (let i = 0; i < herobalance; i++) {
//             let heroId = await getherobalance.methods.tokenOfOwnerByIndex(fromAddress[0], i).call()
//             gethero.push(heroId)
//         }
//     }
//     return gethero
// }


export const gethero = async () => {
        let gethero = []
        if (window.ethereum) {
            //console.log('英雄id');
            var web3 = (web3 = new Web3(window.web3.currentProvider));
            const fromAddress = await web3.eth.getAccounts();
            const getherobalance = new web3.eth.Contract(GameAbi, gameAddress)
             gethero = await getherobalance.methods.getHeroNftsByOwner(fromAddress[0]).call();
            console.log(gethero)
            // for (let i = 0; i < herobalance; i++) {
            //     let heroId = await getherobalance.methods.tokenOfOwnerByIndex(fromAddress[0], i).call()
            //     gethero.push(heroId)
            // }
        }
        return gethero
    }
// /**
// 获取玩家英雄耐力
//  */

// export const HeroEndurance = async (tokenId) => {
//     let idEndurance = []
//     if (window.ethereum) {
//         var web3 = (web3 = new Web3(window.web3.currentProvider));
//         const getHeroEndurance = new web3.eth.Contract(GameAbi, gameAddress)
//         for (let i = 0; i < tokenId.length; i++) {
//             let Id = ''
//             Id += tokenId[i]
//             console.log('获取玩家英雄耐力');
//             let HeroEndurance = await getHeroEndurance.methods.heroNftEndurance(Id).call()
//             // console.log(HeroEndurance.time);
//             idEndurance.push(HeroEndurance)
//         }
//     }
//     return idEndurance
// }


// /**
// 获取玩家英雄等级
//  */

// export const heroNftLevel = async (tokenId) => {
//     let idLevel = []
//     if (window.ethereum) {
//         var web3 = (web3 = new Web3(window.web3.currentProvider));
//         const getheroNftLevel = new web3.eth.Contract(GameAbi, gameAddress)
//         for (let i = 0; i < tokenId.length; i++) {
//             let Id = ''
//             Id += tokenId[i]
//             console.log('获取玩家英雄等级');
//             let HeroLevel = await getheroNftLevel.methods.heroNftLevel(Id).call()
//             idLevel.push(HeroLevel)
//         }
//     }
//     return idLevel
// }

// /**
// 获取玩家英雄经验
//  */

// export const heroNftProficiency = async (tokenId) => {
//     let idProficiency = []
//     if (window.ethereum) {
//         var web3 = (web3 = new Web3(window.web3.currentProvider));
//         const getheroNftProficiency = new web3.eth.Contract(GameAbi, gameAddress)
//         for (let i = 0; i < tokenId.length; i++) {
//             let Id = ''
//             Id += tokenId[i]
//             console.log('获取玩家英雄经验');
//             let HeroProficiency = await getheroNftProficiency.methods.heroNftProficiency(Id).call()
//             idProficiency.push(HeroProficiency)
//         }
//     }
//     return idProficiency
// }


// /**
// 获取玩家英雄职业
//  */

// export const heroType = async (tokenId) => {
//     let idClass = []
//     if (window.ethereum) {
//         var web3 = (web3 = new Web3(window.web3.currentProvider));
//         const getheroType = new web3.eth.Contract(HeroNFTAbi, HeroNFTAddress)
//         for (let i = 0; i < tokenId.length; i++) {
//             let Id = ''
//             Id += tokenId[i]
//             console.log('获取玩家英雄职业');
//             let heroType = await getheroType.methods.heroType(Id).call()
//             idClass.push(heroType)
//         }
//     }
//     return idClass
// }



/**
获取玩家英雄信息
 */


export const getHeroInfoin = async (tokenId) => {
    let HeroInfo = []
        var web3 = (web3 = new Web3(window.web3.currentProvider));
        const letHeroInfo = new web3.eth.Contract(GameAbi, gameAddress)
        for (let i = 0; i < tokenId.length; i++) {
            let Id = ''
            Id += tokenId[i]
            let getHeroInfo = await letHeroInfo.methods.getHeroInfo(Id).call()
            console.log('获取玩家英雄信息'+ getHeroInfo);
            HeroInfo.push(JSON.parse(JSON.stringify(getHeroInfo)))
        }
    return HeroInfo
}
