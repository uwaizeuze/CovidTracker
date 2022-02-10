import "./App.css";
import Clock from "./components/Clock";
import ComplexHandleForm from "./components/ComplexHandleForm";
import DigitalClock from "./components/DigitalClock";
import DigitalClockNPM from "./components/DigitalClockNPM";
import EventHandle from "./components/EventHandle";
import FormEvent from "./components/FormEvent";
import INcDec from "./components/INcDec";
import MtodoList from "./components/MtodoList";
import TodoList from "./components/TodoList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Accordin from "./components/Accordin";
import BootstrapProject from "./components/BootstrapProject";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import { useState } from "react";
import Covid19 from "./components/Covid19";

function App() {
  // const [AddItem, setAddItem] = useState([]);
  // const AddNote = (note) => {
  //   setAddItem((prevalue) => {
  //     return [...prevalue, note];
  //   });
  //   console.log(note);
  // };
  // const onDelete = (id) => {
  //   setAddItem((oldeData) => {
  //     return oldeData.filter((current, index) => {
  //       return index !== id;
  //     });
  //   });
  // };
  return (
    <>
      {/* <Clock /> */}

      {/* <DigitalClock /> */}
      {/* <EventHandle /> */}
      {/* <FormEvent /> */}
      {/* <ComplexHandleForm /> */}
      {/* <TodoList /> */}

      {/* <INcDec /> */}
      {/* <DigitalClockNPM /> */}
      {/* <MtodoList /> */}
      {/* <Accordin /> */}
      {/* <BootstrapProject /> */}

      {/* <Header />
      <CreateNote passNote={AddNote} />
      <div className="note__box">
        {AddItem.map((item, index) => {
          return (
            <Note
              key={index}
              title={item.title}
              content={item.content}
              id={index}
              deleteitem={onDelete}
            />
          );
        })}
      </div>
      <div className="footer__box">
        <Footer />
      </div> */}

      <Covid19 />
    </>
  );
}

export default App;
