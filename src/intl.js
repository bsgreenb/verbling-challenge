import enLocaleData from 'react-intl/locale-data/en'
import esLocaleData from 'react-intl/locale-data/es'
import { addLocaleData } from 'react-intl'
addLocaleData([...enLocaleData, ...esLocaleData])

import locales from './locales/'

const DEFAULT_LOCALE = 'es'

export const getIntl = (locale = DEFAULT_LOCALE) => (
  {
    intl: {
      locale: locale,
      defaultLocale: DEFAULT_LOCALE,
      messages: locales[locale]['messages']
    }
  }
)
