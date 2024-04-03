import { useEffect, useState } from "react";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { Counter } from "./components/Counter/Counter";
import { TodoList } from "./components/TodoList/TodoList";
import Vote from "./components/Vote/Vote";
import Modal from "./components/modal/Modal";
import Button from "./components/Button/Button";
import CounterState from "./components/State/CounterState";
import Products from "./components/State/Products";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  // універсальний перемикач
  const toggleModal = () => setIsOpen((prev) => !prev);

  // таймінгове повідомлення або реклама, тощо
  // useEffect(() => {
  //   setTimeout(() => {
  //     openModal();
  //   }, 3000);
  // }, []);
  return (
    <>
      {/* <Counter /> */}
      {/* <ColorPicker />
        <ColorPicker /> */}
      {/* <TodoList /> */}
      {/* <Button onClick={openModal}>Open Modal</Button> */}
      {/* {isOpen && (
        <Modal closeModal={closeModal}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur animi, placeat nisi et deserunt ex veniam fugiat eius
            officiis asperiores labore non. A sint sed libero quaerat molestias!
            Quibusdam, dolore.
          </p>
        </Modal>
      )} */}
      <CounterState />
      <Products />
      {/* <Vote /> */}
    </>
  );
};

export default App;
