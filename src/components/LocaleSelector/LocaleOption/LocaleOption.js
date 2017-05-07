import React from 'react'
import { connect } from 'react-redux'
import { Thumbnail } from 'react-bootstrap'
import { updateIntl } from 'react-intl-redux'

import './LocaleOption.css'

let LocaleOption = ({ locale, selected, selectLocale }) => (
  <Thumbnail
    onClick={ selectLocale }
    className={ 'locale-option' + ( selected ? ' selected-option' : '' ) }
    src={ locale.flag }
    alt={ locale.language }
  >
    { locale.language }
  </Thumbnail>
)

const mapStateToProps = ({ intl }, { locale }) => (
  {
    selected: (intl.locale === locale.locale)
  }
)

const mapDispatchToProps = (dispatch, { locale }) => (
  {
    selectLocale: () => ( dispatch(updateIntl({
      locale: locale.locale,
      messages: locale.messages
    })))
  }
)

LocaleOption = connect(mapStateToProps, mapDispatchToProps)(LocaleOption)

export default LocaleOption
