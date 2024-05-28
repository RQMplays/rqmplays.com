import styles from './page.module.css'
import Image from 'next/image'
import ux from '@/public/ux2.jpg'
import espace from '@/public/espace2.jpg'
import spectacle from '@/public/spectacle3.jpg'
import concert from '@/public/concert.jpg'
import developer from '@/public/developer2.jpg'
import connect from '@/public/connect.jpg'
import cloud1 from '@/public/cloud1.png'
import cloud2 from '@/public/cloud2.webp'
import cloud3 from '@/public/cloud3.png'
import mountBg from '@/public/mountBg.webp'
import mountMg from '@/public/mountMg.webp'
import mountFg from '@/public/mountFg.webp'
import moon from '@/public/moon4.png'
import { useTranslations } from 'next-intl'
import { ContactLink } from '@/app/components'

import {
  faLinkedinIn,
  faGithub,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className={styles.main}>
      <div className={styles.firstContainer}>
        {/* <Image className={styles.image} src={mountBg} alt="mountBg" fill /> */}
        {/* <Image className={styles.image} src={mountMg} alt="mountMg" fill /> */}
        {/* <Image className={styles.image} src={mountFg} alt="mountFg" fill /> */}
        <div className={styles.moonWrapper}>
          <Image
            className={styles.moon}
            src={moon}
            alt="moon"
            width={250}
            height={250}
          />
        </div>
        <Image
          className={`${styles.image} ${styles.cloud1}`}
          src={cloud1}
          alt="cloud1"
          fill
        />
        <Image
          className={`${styles.image} ${styles.cloud2}`}
          src={cloud2}
          alt="cloud2"
          fill
        />
        <Image
          className={`${styles.image} ${styles.cloud3}`}
          src={cloud3}
          alt="cloud3"
          fill
        />
        <div className={styles.intro}>
          <div className={styles.hi}>Coucou toi !</div> moi c'est{' '}
          <div className={styles.name}>Benoit</div>, mais tu me retrouvera sur
          la toile sous le pseudonyme de{' '}
          <div className={styles.nickname}>RQM.</div>
        </div>
      </div>
      <div className={styles.container}>
        <Image className={styles.image} src={ux} alt="ux" fill />
        <div className={styles.paragraph}>
          Je suis un développeur web front-end avec une grande sensibilité pour
          l'<div className={styles.secondary}>UX</div> et le{' '}
          <div className={styles.primary}>design</div> en général.
        </div>
      </div>
      <div className={styles.container}>
        <Image className={styles.image} src={espace} alt="espace" fill />
        <div className={styles.paragraph}>
          Issu d'un parcours attypique, j'ai tout de suite été tres attiré par
          le design et particulièrement le design d'
          <div className={styles.secondary}>espace</div>.
        </div>
      </div>
      <div className={styles.container}>
        <Image className={styles.image} src={spectacle} alt="spectacle" fill />
        <div className={styles.paragraph}>
          Ni trouvant pas assez de fantaisie j'ai commencé à étudier les arts du{' '}
          <div className={styles.primary}>spectacle</div>, théatre et cinéma.
        </div>
      </div>
      <div className={styles.container}>
        <Image className={styles.image} src={concert} alt="concert" fill />
        <div className={styles.paragraph}>
          C'est la que la musique est entré dans ma vie, j'ai alors étudié la
          sonorisation de spectacles vivants, et notamment de{' '}
          <div className={styles.secondary}>concerts</div>.
        </div>
      </div>
      <div className={styles.container}>
        <Image className={styles.image} src={developer} alt="developer" fill />
        <div className={styles.paragraph}>
          Prenant gout au défi technique, je me suis découvert une passion pour
          le développement web, et spécialement le{' '}
          <div className={styles.primary}>front-end</div> pour ce savant mélange
          entre techniques et artistiques.
        </div>
      </div>
      <div className={styles.container}>
        <Image className={styles.image} src={connect} alt="connect" fill />
        <div className={styles.outro}>
          <div className={styles.connect}>Restons connecté</div>
          <div className={styles.contact} id="contact">
            <ContactLink
              href="https://www.linkedin.com/in/benoit-rqm-laurent/"
              icon={faLinkedinIn}
            >
              LinkedIn
            </ContactLink>
            <ContactLink href="https://github.com/RQMplays" icon={faGithub}>
              Github
            </ContactLink>
            <ContactLink href="https://twitter.com/RQMplays" icon={faXTwitter}>
              Twitter
            </ContactLink>
            <ContactLink
              href="https://www.instagram.com/rqmplays/"
              icon={faInstagram}
            >
              Instagram
            </ContactLink>
            <ContactLink
              href="mailto:benoit.jacques.felix@gmail.com"
              icon={faPaperPlane}
            >
              Mail
            </ContactLink>
          </div>
        </div>
      </div>
    </main>
  )
}
