// function Footer() {
//   return (
//     <footer style={{ background: "#eee", padding: "10px", marginTop: "20px" }}>
//       <p>© 2025 My Website</p>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#212121ff",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
        padding: "24px 16px",
        color: "white"
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "24px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://i.pinimg.com/1200x/cf/ce/1b/cfce1be6e58a78cf9462d7f3b6645e77.jpg"
                alt="Logo"
                style={{ height: "64px", marginRight: "12px" }}
              />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Resources */}
            <div>
              <h2
                style={{
                  marginBottom: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#0051ffff",
                }}
              >
                Resources
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px" }}>
                  <Link
                    to="/"
                    style={{
                      color: "#6b7280",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    style={{
                      color: "#6b7280",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h2
                style={{
                  marginBottom: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#0051ffff",
                }}
              >
                Follow us
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px" }}>
                  <a
                    href="https://github.com/hiteshchoudhary"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#6b7280",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link
                    to="/"
                    style={{
                      color: "#6b7280",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2
                style={{
                  marginBottom: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#0051ffff",
                }}
              >
                Legal
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px" }}>
                  <Link
                    to="#"
                    style={{
                      color: "#6b7280",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    style={{
                      color: "#6b7280",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "#6b7280",
              textAlign: "center",
            }}
          >
            © 2023{" "}
            <Link
              to="https://youtube.com/"
              style={{ color: "#6b7280", textDecoration: "none" }}
            >
              Aditya Kumar
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
