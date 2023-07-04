import { selector } from 'recoil'
import { petFilterState, petsState } from './atoms'

export const filteredpets = selector({
  key: 'filteredpetState',
  get: ({ get }) => {
    const filter = get(petFilterState) // 'all', 'dog' atau 'cat'
    const pets = get(petsState) // State awal didefinsikan dalam Atom

    // Menghasilkan state yang diperbarui berdasarkan nilai filter
    if (filter === 'all') return pets
    return pets.filter((pet) => pet.type === filter)
  },
})