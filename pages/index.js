import { Featured } from "../components/Featured";
import PizzaList from "@/components/PizzaList";

export default function Home() {
  const pizza1 = "/img/pizza1.jpg";
  return (
    <>
      <Featured />
      <PizzaList />
    </>
  );
}
