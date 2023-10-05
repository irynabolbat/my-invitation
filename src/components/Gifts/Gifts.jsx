import './Gifts.scss';
import orchid from '../../img/no-orchid.png'

export const Gifts = () => {
  return (
    <div className='Gifts'>
      <div className='Gifts__Circle'>
        🎁
      </div>

      <div className='Gifts__Container'>
        <h1 className='Gifts__Title'>Подарунки</h1>

        <div className='Gifts__Container__Details'>
          <img 
            src={orchid} 
            alt='orchid' 
            className='Gifts__Orchid'
          />

          <p>Благаю, не даруйте мені орхідеї та інші рослини🙏🏼</p>
        </div>

        <p>До інших подарунків питань немає😅</p>
      </div>
    </div>
  )
}
