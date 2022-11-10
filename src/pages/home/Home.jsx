import './Home.scss';
import  { NavLink  } from 'react-router-dom';
//import MainSection from '../../components/mainSection/MainSection';

function Home() {
  return (
    <div className="home home-padding">      
        <div className='main-section'>
          <div className='paragraph-wrapper'>
              <p className='title heading5'>So, you want to travel to <span className='heading1'>space</span></p>
              <p className='description body-text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className='cta-wrapper'>
          <NavLink to="/destination" >
            <div className='cta heading4'>Explore</div>
          </NavLink>
          </div>
      </div>
    </div>
  );
}

export default Home;
