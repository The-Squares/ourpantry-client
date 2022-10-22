import React from "react";
// import { BarcodeDetectorPolyfill } from "@undecaf/barcode-detector-polyfill";
import "./Scanner.css";
import { useEffect } from "react";

function Scanner({ finished, swap }) {
  useEffect(() => {
    if (!finished) return;
    let video = document.getElementById("videoElement");
    let localstream;
    try {
      window["BarcodeDetector"].getSupportedFormats();
    } catch {
      window["BarcodeDetector"] =
        // @ts-ignore
        barcodeDetectorPolyfill.BarcodeDetectorPolyfill; // eslint-disable-line
    }
    let BarcodeDetector = window["BarcodeDetector"];

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
          // @ts-ignore
          video.srcObject = stream;
          localstream = stream;
        })
        .catch(function (err0r) {
          alert(err0r);
        });
    }
    const barcodeDetector = new BarcodeDetector({
      formats: ["upc_a"],
    });

    let interval = setInterval(() => {
      barcodeDetector.detect(video).then((t) => {
        if (t.length !== 0) {
          finished(t[0].rawValue);
          clearInterval(interval);
        }
      });
    }, 250);

    return () => {
      clearInterval(interval);
      if (localstream) {
        localstream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [finished]);

  return (
    <div className="Scanner">
      <button onClick={swap}>Back</button>
      <h1>Scan!</h1>
      <video autoPlay={true} id="videoElement" playsInline={true}></video>
    </div>
  );
}

export default Scanner;
