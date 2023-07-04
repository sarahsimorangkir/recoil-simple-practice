import { useRecoilValue } from 'recoil'
import { filteredpets } from './selectors'
import DogIcon from './assets/dog.svg'
import CatIcon from './assets/cat.svg'

export default function Pets() {
  const pets = useRecoilValue(filteredpets)

  const getIcon = (petType) => {
    switch (petType) {
      case 'dog':
        return DogIcon
      case 'cat':
        return CatIcon
      default:
        return
    }
  }

  return (
    <div>
      <h1>My Pets:</h1>
      {pets.map((pet) => (
        <div key={pet.id} style={styles.pet}>
          {pet.name} is {pet.type}
          <img
            src={getIcon(pet.type)}
            style={styles.icon}
            alt={pet.type}
          />
        </div>
      ))}
    </div>
  )
}

const styles = {
  pet: {
    display: 'flex',
    alignItems: 'center',
    margin: '12px 0',
    fontSize: '20px',
  },
  icon: {
    height: '40px',
    marginLeft: '12px',
  },
}