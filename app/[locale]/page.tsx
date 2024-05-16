import styles from './page.module.css'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <div className={styles.hi}>Coucou toi !</div> moi c'est{' '}
        <div className={styles.name}>Benoit</div>, mais tu me retrouvera sur la
        toile sous le pseudonyme de <div className={styles.nickname}>RQM.</div>
      </div>
      <div className={styles.paragraphs}>
        <div className={styles.one}>
          Je suis un développeur web front-end avec une grande sensibilité pour
          l'UX et le design en général.
        </div>
        <div className={styles.two}>
          Issu d'un parcours attypique, j'ai tout de suite été tres attiré par
          le design et particulièrement le design d'espace.
        </div>
        <div className={styles.three}>
          Ni trouvant pas assez de fantaisie j'ai commencé à étudier les arts du
          spectacles, théatres et cinéma.
        </div>
        <div className={styles.four}>
          C'est la que la musique est entré dans ma vie, j'ai alors étudié la
          sonorisation de spectacles vivants, et notamment de concerts.
        </div>
        <div className={styles.five}>
          Prenant gout au défi technique, je me suis découvert une passion pour
          le développement web, et spécialement le front-end pour ce savant
          mélange entre techniques et artistiques.
        </div>
      </div>
    </main>
  )
}
