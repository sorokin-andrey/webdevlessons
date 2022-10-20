import Result from "../components/result/Result";
import ButtonList from "../components/buttons/ButtonList";

import classes from "./CalcPage.module.css";

export default function CalcPage() {
  const [result, setResult] = useState(0);

  return (
    <div className={classes.calc}>
      <Result />
      <ButtonList />
    </div>
  );
}
