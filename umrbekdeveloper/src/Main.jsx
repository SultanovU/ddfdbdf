import './main.css';
import mainimg from './assets/img/rasm.png';
import cardimg from './assets/img/Vector.svg';
import third_img from './assets/img/Group 42.png';
function Main() {
  return(
    <div className="main">
      <div className="gg">
      <div className="main_first_div">
        <h1>We help sales managers <br /> with no experience sell <br /> more and faster</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</p>
        <button className='btn'>Get Started</button>
      </div>
      <img src={mainimg} alt="error" width='500px'/>
      </div>
        <div className="hh">
        <div className="little_div">
          <h1>For Your Business</h1>
          <p>Вы сможете с легкостью подготовить коммерческое предложение или сделать смету онлайн</p>
          <p className='pp'>учитывающие потребности клинета</p>
        </div>
        </div>
      <div className="card_div">
        <div className="card">
          <img src={cardimg} alt="" />
          <h1>Эффект видно сразу</h1>
          <p>Сервис не нужно долго изучать — <br /> отдел продаж сможет тут же в нём <br /> работать.</p>
        </div>
        <div className="card">
          <img src={cardimg} alt="" />
          <h1>Эффект видно сразу</h1>
          <p>Сервис не нужно долго изучать — <br /> отдел продаж сможет тут же в нём <br /> работать.</p>
        </div>
        <div className="card">
          <img src={cardimg} alt="" />
          <h1>Эффект видно сразу</h1>
          <p>Сервис не нужно долго изучать — <br /> отдел продаж сможет тут же в нём <br /> работать.</p>
        </div>
      </div>
      <div className="card_divv">
        <div className="card">
          <img src={cardimg} alt="" />
          <h1>Эффект видно сразу</h1>
          <p>Сервис не нужно долго изучать — <br /> отдел продаж сможет тут же в нём <br /> работать.</p>
        </div>
        <div className="card">
          <img src={cardimg} alt="" />
          <h1>Эффект видно сразу</h1>
          <p>Сервис не нужно долго изучать — <br /> отдел продаж сможет тут же в нём <br /> работать.</p>
        </div>
        <div className="card">
          <img src={cardimg} alt="" />
          <h1>Эффект видно сразу</h1>
          <p>Сервис не нужно долго изучать — <br /> отдел продаж сможет тут же в нём <br /> работать.</p>
        </div>
      </div>
      <div className="third_div">
        <div className="jk">
        <div className="div_pp">
          <h1>Easy to use, advanced <br /> Estimates editor</h1>
          <p>Our easy to use, advenced editor will help you create <br /> estimates faster, confident and without any errors.</p>
        </div>
          <div className="img_div">
            <img src={third_img} alt="" />
          </div>
        </div>
        <div className="jk">
          <div className="img_div">
            <img src={third_img} alt="" />
          </div>
        <div className="div_pp">
          <h1>Easy to use, advanced <br /> Estimates editor</h1>
          <p>Our easy to use, advenced editor will help you create <br /> estimates faster, confident and without any errors.</p>
        </div>
        </div>
      </div>
      <div className="money">
        <div>
          <h1>9999+</h1>
          <p>Всего смет создано</p>
        </div>
        <div>
          <h1>9999+</h1>
          <p>Всего смет создано</p>
        </div>
        <div>
          <h1>9999+</h1>
          <p>Всего смет создано</p>
        </div>
        <div>
          <h1>9999+</h1>
          <p>Всего смет создано</p>
        </div>
      </div>
      <div className="third_div">
        <div className="jk">
        <div className="div_pp">
          <h1>Easy to use, advanced <br /> Estimates editor</h1>
          <p>Our easy to use, advenced editor will help you create <br /> estimates faster, confident and without any errors.</p>
        </div>
          <div className="img_div">
            <img src={third_img} alt="" />
          </div>
        </div>
        <div className="jk">
          <div className="img_div">
            <img src={third_img} alt="" />
          </div>
        <div className="div_pp">
          <h1>Easy to use, advanced <br /> Estimates editor</h1>
          <p>Our easy to use, advenced editor will help you create <br /> estimates faster, confident and without any errors.</p>
        </div>
        </div>
      </div>
      <div className="uu">
        <h1>Our pricing</h1>
        <div className="nav_btn_div">
        <button className="nav_btn">sing Up</button>
        <button className="nav_bt">Login</button>
      </div>
      </div>
      <div className="dd">
        <div className="card">
          <h1>Starter</h1>
          <h1>Free</h1>
          <button>Get started</button>
          <p>1 Team users </p>
          <p>3 Estimates</p>
          <p>Estimatesguru watermark</p>
        </div>
        <div className="card">
          <h1>Starter</h1>
          <h1>Free</h1>
          <button>Get started</button>
          <p>1 Team users </p>
          <p>3 Estimates</p>
          <p>Estimatesguru watermark</p>
        </div>
        <div className="card">
          <h1>Starter</h1>
          <h1>Free</h1>
          <button>Get started</button>
          <p>1 Team users </p>
          <p>3 Estimates</p>
          <p>Estimatesguru watermark</p>
        </div>
      </div>
    </div>
  )
}
export default Main