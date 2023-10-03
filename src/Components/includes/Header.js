import React from "react"; 
import {Link} from 'react-router-dom';

function Header () {
   return (
     <>
        
       <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12"> <Link to="/" className="logo"><img
              src="images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png"
              alt="Digital Lync- Best AWS, DevOps, Python, Digital Marketing Training Institute"
              title="Digital Lync- Best AWS, DevOps, Python, Digital Marketing Training Institute" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span
              className=""></span> <span className=""></span> <span className=""></span></button>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12" itemScope itemType="https://schema.org/SiteNavigationElement">
          <nav className="collapse navbar-collapse collapse text-right" id="navbarSupportedContent">
            <ul className="nav navbar-nav cl-effect-12">
              <li className="menu relative"><Link to="/aws-training-in-hyderabad" itemProp="url"><span
                    itemProp="name">Courses</span> <svg className="expand-tree_pointerDown__3pD5B" height="7"
                    viewBox="0 0 12 7" width="12">
                    <path d="m105 46 5 5 5-5" fill="none" stroke="#96a0aa" strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth="2" transform="translate(-104 -45)"></path>
                  </svg></Link>

                <ul className="submenu">

                  <li className="menu "><Link to="aws-training-in-hyderabad.html" itemProp="url"><span
                        itemProp="name">AWS</span></Link></li>
                  <li className="menu "><Link to="azure-training-in-hyderabad.html" itemProp="url"><span itemProp="name">
                        Azure </span></Link></li>
                  <li className="menu "><Link to="devops-training-in-hyderabad.html" itemProp="url"><span
                        itemProp="name">DevOps </span></Link></li>
                  <li className="menu "><Link to="azure-devops-training-in-hyderabad" itemProp="url"><span
                        itemProp="name"> Azure DevOps </span></Link></li>
                  <li className="menu "><Link to="sales-force-training-in-hyderabad.html" itemProp="url"><span
                        itemProp="name">Salesforce</span></Link></li>
                  <li className="menu "><Link to="java-training-in-hyderabad.html" itemProp="url"><span itemProp="name">Java
                      </span></Link></li>
                  <li className="menu "><Link to="react-training-in-hyderabad.html" itemProp="url"><span
                        itemProp="name">React JS</span></Link></li>
                  <li className="menu "><Link to="full-stack-training-in-hyderabad.html" itemProp="url"><span
                        itemProp="name">Full Stack</span></Link></li>

                  




                  <li>
                    <hr />
                  </li>
                  <li className="menu viewall"><Link to="courses.html" itemProp="url"><span itemProp="name"> View All
                        Courses</span></Link></li>
                </ul>

              </li>
              <li className="menu relative prmenu"><Link to="https://www.digital-lync.com/programs.html" itemProp="url"><span itemProp="name">Programs</span> <svg className="expand-tree_pointerDown__3pD5B" height="7" viewBox="0 0 12 7" width="12"><path d="m105 46 5 5 5-5" fill="none" stroke="#96a0aa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(-104 -45)"></path></svg></Link>
                
                <ul className="submenu">
                  <li className="menu "><Link to="devops-masters-training-in-hyderabad.html" itemProp="url"><span itemProp="name"> DevOps Masters Program</span></Link></li>
                  <li className="menu "><Link to="full-stack-training-in-hyderabad.html" itemProp="url"><span itemProp="name"> Full Stack Masters Program</span></Link></li>
                   
                  <li className="menu "><Link to="sales-force-training-in-hyderabad.html" itemProp="url"><span itemProp="name"> Salesforce Masters Program</span></Link></li>

                  </ul> 
              </li>


              <li className="menu"><Link to="career.html" itemProp="url"><span
                    itemProp="name">Career Support</span></Link></li>


              <li className="get_link"><a data-toggle="modal" data-target="#get_trained" itemProp="url"> <span itemProp="name">Get Skilled</span> </a></li>

            </ul>
          </nav>

        </div>
      </div>
    </div>
  </header>
	 
     </>
   )
 };
 
export default Header;