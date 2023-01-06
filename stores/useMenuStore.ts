import create from 'zustand'

export interface UseMenuStore {
  menuOpen: boolean
  toggleMenu: () => void
  setMenuOpen: (open: boolean) => void
}

export const useMenuStore = create<UseMenuStore>((set, get) => {
  return {
    menuOpen: false,
    toggleMenu() {
      set({
        menuOpen: !get().menuOpen,
      })
    },
    setMenuOpen(menuOpen) {
      set({
        menuOpen,
      })
    },
  }
})
