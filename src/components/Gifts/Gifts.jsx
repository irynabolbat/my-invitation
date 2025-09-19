import "./Gifts.scss";
import orchid from "../../img/no-orchid.png";
import certificatePhoto from "../../img/certificates.jpg";
import bagPhoto from "../../img/bag.png";
import parfume from "../../img/calvin_klein_euphoria.webp";
import photoshoot from "../../img/photoshoot.jpg";

export const Gifts = () => {
  return (
    <div className="Gifts">
      <div className="Gifts__Circle">🎁</div>

      <div className="Gifts__Container">
        <h1 className="Gifts__Title">Подарунки</h1>

        <div className="Gifts__Container__Details">
          <img src={orchid} alt="orchid" className="Gifts__Orchid" />

          <p>
            Благаю, не даруйте мені орхідеї та інші ДОМАШНІ рослини в
            горшочках🙏🏼
          </p>
        </div>

        <p>До інших подарунків питань немає😅</p>

        <p>Для облегшення вибору, ось кілька ідей (з посиланнями):</p>
        <ul className="Gifts__WishList">
          <li className="Gifts__WishListItem">
            <a href="https://full-force.com.ua/podarunkovyi-sertyfikat/">
              Подарунковий сертифікат Full-force
              <img
                src={certificatePhoto}
                alt="certificate"
                className="Gifts__Certificate"
              />
            </a>
          </li>

          <li className="Gifts__WishListItem">
            <a href="https://www.notino.ua/calvin-klein/euphoria-parfumovana-voda-dlja-zhinok/p-60089/">
              Calvin Klein Euphoria
              <img src={parfume} alt="parfume" className="Gifts__Parfume" />
            </a>
          </li>
        </ul>

        <ul className="Gifts__WishList">
          <li className="Gifts__WishListItem">
            <a href="https://www.instagram.com/kox.a_bag?igsh=OHRxMHRvbnlvN3pn">
              Сумка (коричнева)
              <img src={bagPhoto} alt="bag" className="Gifts__Bag" />
            </a>
          </li>

          <li className="Gifts__WishListItem">
            <a href="https://www.instagram.com/boldovska_inna?igsh=cXIzNmtzcGdubnFy">
              Фотосесія
              <img
                src={photoshoot}
                alt="photoshoot"
                className="Gifts__Photoshoot"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
