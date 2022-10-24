import './Styles/mobile.scss'
import './Styles/desktop.scss'
import Card from '../../components/Card'
import Backgrounds from '../../components/Backgrounds'
import imgBack from './assets/img1.png'
import { appartDispo } from '../../date'
import '../../utils/styleGlobal/index.scss'

export default function Home() {
    return(
        <main>
		      <section className='banner'>
		      	<Backgrounds img = {imgBack} textH2 = {'Chez vous, partout et ailleurs'}/>
		      </section>

          <section>
            <div className='articles'>
              {appartDispo.map((profile, index) => (
              <Card
                key={`${profile.id}-${index}`}
                title={profile.title}
                cover={profile.cover}
                equipments={profile.equipments}
                pictures = {profile.pictures}
                id = {profile.id}
                // pictures={profile.pictures[]}
              />
            ))}
            </div>
          </section>
          
        </main>

    )
}

