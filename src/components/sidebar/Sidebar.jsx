import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT US</span>
            <img className="sidebarImg" src="https://i.pinimg.com/236x/81/5d/37/815d37e6655276d8e985fef2c4ce5472.jpg" alt="" />
        <p className="sidebarPara">
        We are a dedicated group maintaining a vibrant blog site, curating insightful articles to inspire and engage our readers, fostering a community of knowledge seekers.
        </p>
        <div className="sidebrItem">
            <span className="sidebarTitles">CATEGORIES</span>
      <ul className="sidebarList"> 
      <li className="sidebarListItem">Life</li>
      <li className="sidebarListItem">Music</li>
      <li className="sidebarListItem">Anime</li>
      <li className="sidebarListItem">Manga</li>
      <li className="sidebarListItem">Sports</li>
      <li className="sidebarListItem">Games</li>
      </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US </span>
       
       <div className="sidebarSocial">
       <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i  className="sidebarIcon fa-brands fa-linkedin"></i>
        <i  className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i  className="sidebarIcon fa-brands fa-square-twitter"></i>
        </div> 
        </div>
        </div>
    </div>
  )
}
