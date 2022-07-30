import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand bLamim" href="/">Ontik assessment</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
      {/*   <a class="nav-link" href="/editform">View</a> */}
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/submission">Submission</a>
      </li>         
    </ul>
    
  </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;