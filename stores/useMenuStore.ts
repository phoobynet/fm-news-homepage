import create from 'zustand'

export interface UseMenuStore {
  menuOpen: boolean
  toggleMenu: (open?: boolean) => void
}

export const useMenuStore = create<UseMenuStore>((set, get) => {
  return {
    menuOpen: false,
    toggleMenu(open?: boolean) {
      if (open !== undefined) {
        set({
          menuOpen: open,
        })
      } else {
        set({
          menuOpen: !get().menuOpen,
        })
      }
    },
  }
})
