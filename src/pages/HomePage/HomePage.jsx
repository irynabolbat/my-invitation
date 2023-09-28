import './HomePage.scss';
import { useNavigate } from "react-router-dom";

export const HomePage = () =>  {
  const navigation = useNavigate();

  return (
    <div className='HomePage'>
      <div className='CircleWrapper'>
        <div className="Circle">
          <button className="Circle__Button" onClick={() => navigation('/invitation')}>
            <h1 className="Circle__Title">Sweet 25</h1>
          </button>
        </div>
      </div>

      <div className='BaloonsDown'></div>
    </div>
  )
}