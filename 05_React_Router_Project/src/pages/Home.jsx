import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
      {/* Section 1 */}
      <aside
        style={{
          position: "relative",
          overflow: "hidden",
          color: "black",
          borderRadius: "12px",
          margin: "0 8px",
          padding: "40px 0 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "40px 24px 80px",
          }}
        >
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
              marginTop: "60px",
            }}
          >
            <h2 style={{ fontSize: "40px", fontWeight: "bold", lineHeight: "1.2", color: "whitesmoke"}}>
              Download Now
              <span
                style={{
                  display: "block",
                  fontSize: "32px",
                  marginTop: "8px",
                  color: "whitesmoke"
                }}
              >
                Lorem Ipsum
              </span>
            </h2>

            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#C2410C", // orange-700
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: "500",
                textDecoration: "none",
                marginTop: "24px",
                cursor: "pointer",
              }}
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                style={{ marginRight: "8px" }}
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download now
            </Link>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "60px",
          }}
        >
          <img
            src="https://i.pinimg.com/1200x/cf/ce/1b/cfce1be6e58a78cf9462d7f3b6645e77.jpg"
            alt="image1"
            style={{ width: "380px", objectFit: "contain" }}
          />
        </div>
      </aside>

      {/* Section 2 */}
      <div
        style={{
          display: "grid",
          placeItems: "center",
          marginTop: "80px",
        }}
      >
        <img
          src="https://i.pinimg.com/1200x/cf/ce/1b/cfce1be6e58a78cf9462d7f3b6645e77.jpg"
          alt="image2"
          style={{ width: "350px", maxWidth: "100%" }}
        />
      </div>

      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "500",
          padding: "40px 0",
        }}
      >
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
