import { atom } from 'recoil'

export const petsState = atom({
  key: 'petsState',
  default: [
    {
      id: 1,
      name: 'Lopo',
      type: 'dog',
    },
    {
      id: 2,
      name: 'Polo',
      type: 'dog',
    },
    {
      id: 3,
      name: 'noname',
      type: 'cat',
    },
  ],
})

export const petFilterState = atom({
  key: 'petFilterState',
  default: 'all',
})