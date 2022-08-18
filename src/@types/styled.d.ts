/**
 * Este e um arquivo de definicao de tipos do Typescript
 */

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Esta a passar os tipos do defaulttheme ao ThemeType para eles serem acessados pela tipagem do ts
type ThemeType = typeof defaultTheme

// Esta a sobrescrever as tipagens
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
