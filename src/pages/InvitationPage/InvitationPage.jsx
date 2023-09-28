import './InvitationPage.scss';
import photo from '../../img/photo.png'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useNavigate } from "react-router-dom";

export const InvitationPage = () =>  {
  const { width, height } = useWindowSize();
  const navigation = useNavigate();

  return (
    <>
      <Confetti
        width={width}
        height={height}
      />

      <div className='InvitationPage'>
        <img src={photo} alt='me' className='InvitationPage__Photo' />

        <div className='InvitationPage__Container'>
          <h1 
            className='InvitationPage__Container__Title'
          >
            Запрошення на вечірку "Sweet 25"
          </h1>

            <ul className='InvitationPage__Container__InfoList'>
              <li className='InvitationPage__Container__InfoList--item'>
                  Коли?📆 - 7 жовтня (СБ)
              </li>
              <li className='InvitationPage__Container__InfoList--item'>
                  О котрій?🕖 - час вечірнього вигулу собак (18:00)
              </li>
              <li className='InvitationPage__Container__InfoList--item'>
                  Де?🏠 - корхіна оселя на 48-му
              </li>
            </ul>
            
            <div className='InvitationPage__Container__Button'>
              <button 
                className='InvitationPage__Container__Button--button'
                onClick={() => navigation('/details')}
              >
                Детальна інфа📌
              </button>
            </div>
          </div>
        </div>
    </>
  )
}