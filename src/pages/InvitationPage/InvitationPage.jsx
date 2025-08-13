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
            Запрошення на вечірку "Sweet 27"
          </h1>

            <ul className='InvitationPage__Container__InfoList'>
              <li className='InvitationPage__Container__InfoList--item'>
                  Коли?📆 - 3 жовтня (ПТ)
              </li>
              <li className='InvitationPage__Container__InfoList--item'>
                  О котрій?🕖 - 19:00 - до ранку
              </li>
              <li className='InvitationPage__Container__InfoList--item'>
                  Де? - 🏠
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