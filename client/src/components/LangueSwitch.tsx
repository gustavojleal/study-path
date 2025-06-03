import { useTranslation } from 'react-i18next'

function LangueSwitch() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('pt')}>Português</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  )
}

export default LangueSwitch;