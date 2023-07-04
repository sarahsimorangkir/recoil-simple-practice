import { RecoilRoot } from "recoil";
import Pets from "./Pets";
import PickPet from "./PickPet";

export default function App() {
  return (
    <RecoilRoot>
      <div style={styles.container}>
        <PickPet />
        <Pets />
      </div>
    </RecoilRoot>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    alignItems: 'center',
    flexDirection: 'column',
  },
};
