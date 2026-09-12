import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const algorithms = [
  { name: "RSA", type: "Asymmetric", status: "HIGH", value: 92 },
  { name: "ECC", type: "Asymmetric", status: "HIGH", value: 84 },
  { name: "ECDH", type: "Key Exchange", status: "HIGH", value: 88 },
  { name: "AES-256", type: "Symmetric", status: "LOWER", value: 76 },
  { name: "SHA-256", type: "Hash", status: "LOWER", value: 82 },
  { name: "TLS", type: "Protocol", status: "MEDIUM", value: 72 },
  { name: "Certificates", type: "PKI", status: "MEDIUM", value: 68 },
  { name: "ML-KEM", type: "PQC KEM", status: "READY", value: 100 },
  { name: "ML-DSA", type: "PQC Signature", status: "READY", value: 100 },
];

const scanMessages = [
  "Discovering assets...",
  "Analyzing cryptographic patterns...",
  "Mapping dependencies...",
  "Identifying quantum exposure...",
  "Building cryptographic inventory...",
];

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return previous + 1;
      });
    }, 55);

    const messageTimer = setInterval(() => {
      setMessageIndex((previous) => {
        return (previous + 1) % scanMessages.length;
      });
    }, 1100);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div className="loading-screen">

      {/* Background */}
      <div className="loading-grid" />
      <div className="loading-noise" />

      {/* Corner UI */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* Header */}
      <header className="loading-header">

        <div className="loading-brand">
          <div className="brand-symbol">
            <span />
          </div>

          <div>
            <div className="brand-name">
              Q PRAKRITI
            </div>

            <div className="brand-subtitle">
              QUANTUM SECURITY
            </div>
          </div>
        </div>

        <div className="header-status">
          VISIBILITY&nbsp;&nbsp;/&nbsp;&nbsp;
          INTELLIGENCE&nbsp;&nbsp;/&nbsp;&nbsp;
          QUANTUM SAFE
        </div>

      </header>

      {/* Main */}
      <main className="scan-layout">

        {/* LEFT */}
        <section className="scan-info">

          <div className="scan-label">
            <span className="live-dot" />
            CRYPTOGRAPHIC SCAN
          </div>

          <h1>
            ANALYZING YOUR
            <br />
            <span>DIGITAL ESTATE...</span>
          </h1>

          <p className="scan-description">
            Scanning for cryptographic algorithms,
            certificates, keys and dependencies
            across your infrastructure.
          </p>

          <div className="scan-steps">

            <ScanStep
              icon="◎"
              text="DISCOVERING ASSETS"
              active={progress >= 10}
            />

            <ScanStep
              icon="▱"
              text="ANALYZING ALGORITHMS"
              active={progress >= 30}
            />

            <ScanStep
              icon="⌘"
              text="MAPPING DEPENDENCIES"
              active={progress >= 50}
            />

            <ScanStep
              icon="♢"
              text="IDENTIFYING RISKS"
              active={progress >= 70}
            />

          </div>

        </section>

        {/* CENTER RADAR */}
        <section className="radar-container">

          <div className="radar-glow" />

          <div className="radar-ring ring-one" />
          <div className="radar-ring ring-two" />
          <div className="radar-ring ring-three" />
          <div className="radar-ring ring-four" />

          <div className="radar-cross horizontal" />
          <div className="radar-cross vertical" />

          {/* Rotating scan beam */}
          <div className="scan-beam" />

          {/* Orbit nodes */}
          <div className="radar-node node-one" />
          <div className="radar-node node-two" />
          <div className="radar-node node-three" />
          <div className="radar-node node-four" />
          <div className="radar-node node-five" />

          {/* Center */}
          <div className="radar-core">

            <div className="core-inner">
              <span />
            </div>

          </div>

          {/* Connected labels */}
          <RadarLabel
            className="label-certificates"
            text="CERTIFICATES"
          />

          <RadarLabel
            className="label-api"
            text="APIs"
          />

          <RadarLabel
            className="label-applications"
            text="APPLICATIONS"
          />

          <RadarLabel
            className="label-libraries"
            text="LIBRARIES"
          />

          <RadarLabel
            className="label-database"
            text="DATABASES"
          />

          <RadarLabel
            className="label-devices"
            text="DEVICES"
          />

        </section>

        {/* RIGHT INVENTORY */}
        <section className="inventory">

          <div className="inventory-header">
            <span>ALGORITHM INVENTORY</span>

            <strong>
              12 / 12
            </strong>
          </div>

          <div className="inventory-list">

            {algorithms.map((algorithm, index) => (
              <div
                className="algorithm"
                key={algorithm.name}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >

                <div className="algorithm-top">

                  <div>
                    <strong>
                      {algorithm.name}
                    </strong>

                    <small>
                      {algorithm.type}
                    </small>
                  </div>

                  <span
                    className={`algorithm-status ${algorithm.status.toLowerCase()}`}
                  >
                    {algorithm.status}
                  </span>

                </div>

                <div className="algorithm-progress">

                  <div className="algorithm-track">
                    <div
                      className="algorithm-fill"
                      style={{
                        width:
                          progress >= 15
                            ? `${algorithm.value}%`
                            : "0%",
                      }}
                    />
                  </div>

                  <span className="arrow">
                    ›
                  </span>

                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

      {/* Bottom progress */}
      <footer className="scan-footer">

        <div className="progress-header">

          <span>
            SCAN PROGRESS
          </span>

          <strong>
            {progress}%
          </strong>

        </div>

        <div className="main-progress">
          <div
            className="main-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="progress-message">

          <span className="message-icon">
            ◎
          </span>

          <span>
            {scanMessages[messageIndex]}
          </span>

          <i>|</i>

          <span>
            Analyzing cryptographic patterns...
          </span>

          <i>|</i>

          <span>
            {progress >= 85
              ? "Almost there..."
              : "Scanning infrastructure..."}
          </span>

        </div>

        <div className="future-text">
          <span>⌁</span>
          QUANTUM-SAFE FUTURE
          <span>—</span>
        </div>

      </footer>

    </div>
  );
}


/* -----------------------------
   Small Components
----------------------------- */

function ScanStep({ icon, text, active }) {
  return (
    <div className={`scan-step ${active ? "active" : ""}`}>

      <div className="step-icon">
        {icon}
      </div>

      <span>
        {text}
      </span>

    </div>
  );
}


function RadarLabel({ className, text }) {
  return (
    <div className={`radar-label ${className}`}>

      <span className="label-icon">
        ◇
      </span>

      {text}

    </div>
  );
}

export default LoadingScreen;