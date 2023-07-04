import { useSetRecoilState } from 'recoil'
import { petFilterState} from './atoms'

export default function PickPet() {
  const setPetFilter = useSetRecoilState(petFilterState)

  return (
    <div>
      <button onClick={() => setPetFilter('all')} style={styles.button}>
        All
      </button>
      <button onClick={() => setPetFilter('dog')} style={styles.button}>
        Dogs
      </button>
      <button onClick={() => setPetFilter('cat')} style={styles.button}>
        Cats
      </button>
    </div>
  )
}

const styles = {
  button: {
    padding: '8px 12px',
    margin: '0 8px',
    fontSize: '16px',
  },
}