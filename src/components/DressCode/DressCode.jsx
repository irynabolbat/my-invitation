import "./DressCode.scss";
import emmy from "../../img/emmy.jpg";
import marty from "../../img/marty.jpg";

export const DressCode = () => {
  return (
    <div className="DressCode">
      <div className="DressCode__Circle">👗</div>

      <div className="DressCode__Container">
        <h1 className="DressCode__Title">Дресс-код</h1>

        <p>Жодного дресс-коду😎</p>
        <p>Але піжамку з собою обов'язково треба взяти👘</p>

        <ul className="DressCode__Pets">
          <li className="DressCode__PetsItem">
            <img src={emmy} alt="Emmy" className="DressCode__Pet" />
          </li>

          <li className="DressCode__PetsItem">
            <img src={marty} alt="Marty" className="DressCode__Pet" />
          </li>
        </ul>
      </div>
    </div>
  );
};
