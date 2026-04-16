import Backgound from "../components/Background";
import Header from "../components/Header";
import HeaderStep from "../components/HeaderStep";

function TasksPage() {
  return (
    <Backgound>
      <Header />
      <HeaderStep title={"Pendentes"} />
    </Backgound>
  );
}

export default TasksPage;
