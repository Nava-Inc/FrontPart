import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const reducerCases={
    SET_TOKEN:'SET-TOKEN'
}
export const genres = [
    { title:'Pop',value: 'Pop'},
    { title:'sonati',value: 'sonati'},
    { title:'Rock',value: 'Rock'},
    { title:'R&B',value: 'R&B'}
];
export const links =[
    {name: 'Discover', to: '/', icon: HiOutlineHome },
    {name:'Around You', to: '/around-you', icon: HiOutlinePhotograph },
    {name:'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup},
    {name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag }
];