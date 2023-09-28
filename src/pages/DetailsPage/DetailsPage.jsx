import './DetailsPage.scss';
import { useNavigate, useLocation } from "react-router-dom";

export const DetailsPage = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const isDressCode = location.pathname === '/details/dress_code';
  const isGifts = location.pathname === '/details/gifts';
  const isActivity = location.pathname === '/details/activity';

  return (
    <div className='DetailsPage'>
      <button 
        className='DetailsPage__BackButton'
        onClick={() => navigation('/invitation')}
      >
        🔙
      </button>

      <div className='DetailsPage__Container'>
        <div className={isDressCode ? 'DetailsPage__Circle active' : 'DetailsPage__Circle'}>
          <button 
            className='DetailsPage__Circle--button'
            onClick={() => navigation('/details/dress_code')}
          >
            👗
          </button>
        </div>

        <div className={isGifts ? 'DetailsPage__Circle active' : 'DetailsPage__Circle'}>
          <button 
            className='DetailsPage__Circle--button'
            onClick={() => navigation('/details/gifts')}
          >
            🎁
          </button>
        </div>

        <div className={isActivity ? 'DetailsPage__Circle active' : 'DetailsPage__Circle'}>
          <button 
            className='DetailsPage__Circle--button'
            onClick={() => navigation('/details/activity')}
          >
            🎲
          </button>
        </div>
      </div>

      {(!isDressCode && !isGifts && !isActivity)
        && (
          <div className='DetailsPage__Instruction'>
            <div className='DetailsPage__Instruction__Circle'>
              📌
            </div>

            <div className='DetailsPage__Instruction__Container'>
              <p>Тицяй на кружечки для більш детальної інформації з кожного пункта🙃</p>
            </div>
          </div>
        )
      }
    </div>
  )
}