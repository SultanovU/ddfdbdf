import './style.css';

function Header() {
  return(
    <div className="header">
      <h1 className="project_name">estimatesguru</h1>
      <div className="nav_link_div">
      <a href="#" className="nav_link">Home</a>
      <a href="#" className="nav_links">Pricing</a>
      <a href="#" className="nav_links">Templates</a>
      <a href="#" className="nav_links">Blog</a>
      <a href="#" className="nav_links">Cases</a>
      </div>
      <div className="nav_btn_div">
        <button className="nav_btn">sing Up</button>
        <button className="nav_bt">Login</button>
      </div>
    </div>
  )
}
export default Header