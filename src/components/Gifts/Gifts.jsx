import "./Gifts.scss";
import orchid from "../../img/no-orchid.png";
import certificatePhoto from "../../img/certificate.png";
import bagPhoto from "../../img/bag.png";

export const Gifts = () => {
  return (
    <div className="Gifts">
      <div className="Gifts__Circle">🎁</div>

      <div className="Gifts__Container">
        <h1 className="Gifts__Title">Подарунки</h1>

        <div className="Gifts__Container__Details">
          <img src={orchid} alt="orchid" className="Gifts__Orchid" />

          <p>Благаю, не даруйте мені орхідеї та інші домашні рослини🙏🏼</p>
        </div>

        <p>До інших подарунків питань немає😅</p>

        <p>Для облегшення вибору, ось кілька ідей:</p>
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
            <a href="https://www.instagram.com/kox.a_bag?igsh=OHRxMHRvbnlvN3pn">
              Сумка (коричнева)
              <img src={bagPhoto} alt="bag" className="Gifts__Bag" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
