import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        {/* Safu ya 1: jina + maelezo */}
        <div className="footer_section about">
          <h2 className="footer_logo">KASANGE</h2>
          <p>
            Shule.co.tz is Tanzania's education portal, where students,
            parents, teachers and education stakeholders discover schools,
            check primary, FTNA, CSEE and ACSEE examination results, and find
            study materials and past papers - all in one place, for a brighter
            Tanzania.
          </p>
        </div>

        {/* Safu ya 2: Explore */}
        <div className="footer_section">
          <h4>EXPLORE</h4>
          <ul>
            <li><a href="#">A-Level Combinations</a></li>
            <li><a href="#">School Directory</a></li>
            <li><a href="#">Examination Results</a></li>
            <li><a href="#">Study Materials</a></li>
            <li><a href="#">Past Papers</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        {/* Safu ya 3: Popular Sites */}
        <div className="footer_section">
          <h4>POPULAR SITES</h4>
          <ul>
            <li><a href="#">NECTA</a></li>
            <li><a href="#">Ministry of Education</a></li>
            <li><a href="#">TAMISEMI</a></li>
            <li><a href="#">TCU</a></li>
            <li><a href="#">NACTVET</a></li>
          </ul>
        </div>
      </div>

      {/* Mstari wa chini */}
      <div className="footer_bottom">
        <div className="footer_links">
          <span>© 2026 Kasange Secondary School. All rights reserved.</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <span>Kasange - Your Gateway to Tanzania Schools</span>
      </div>
    </footer>
  );
}

export default Footer;