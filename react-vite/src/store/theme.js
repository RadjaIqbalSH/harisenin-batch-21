import { create } from 'zustand'

export const useTheme = create((set) => {
    return {
        // data
        theme: false,
        // setter
        changeTheme: () => set((state) => ({ theme: !state.theme})),
    }
})
