import Result from "../components/result/Result";
import ButtonList from "../components/buttons/ButtonList";
import classes from "./CalcPage.module.css";

export default function CalcPage() {
  return (
    <div className={classes.calc}>
      <Result />
      <ButtonList />
    </div>
  );
}
