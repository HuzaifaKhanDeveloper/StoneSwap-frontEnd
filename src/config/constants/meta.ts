import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'StonerSwap',
  description:
    'The most popular AMM on BSC by user count! Earn WEED through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by StonerSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://stonerswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('StonerSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('StonerSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('StonerSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('StonerSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('StonerSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('StonerSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('StonerSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('StonerSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('StonerSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('StonerSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('StonerSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('StonerSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('StonerSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('StonerSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('StonerSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('StonerSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('StonerSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('StonerSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('StonerSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('StonerSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('StonerSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('StonerSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('StonerSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('StonerSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('StonerSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('StonerSwap')}`,
      }
    default:
      return null
  }
}
