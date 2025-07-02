import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'temaPersonalizado',
    themes: {
      temaPersonalizado: {
        dark: false,
        colors: {
          primary: '#4CAF50', 
          secondary: '#FFEB3B',
        },
      },
    },
  },
})
