import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { useAppSelector } from "../../Hooks/useAppSelector";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import CTAButton from "../../Components/Global/CallToAction/CTAButton";
import Container from "../../Components/Global/Container/Container";

const Kontakt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(null);
  const prevPage = useAppSelector((state) => state.pages.prevPage);

  let animations = prevPage === 3 ? "animation-fadeOut" : "";
  let fadeTopOrBottom = "animation-downEntry";

  if (prevPage !== 0) {
    fadeTopOrBottom = "animation-upEntry";
  }

  const checkIfValid = () => {
    if (!name) return false;
    if (!email) return false;
    if (!subject) return false;
    if (!message) return false;
    return true;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkIfValid()) return;
    emailjs
      .sendForm(
        "service_lk8lvhj",
        "template_jnnrz6j",
        form.current ? form.current : "",
        "I9yfNwOfp3HKRNBII"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload();
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Kontakt" />
      </div>
      <Container animations={animations}>
        <div
          className="container px-5 text-font text-color"
          style={{ height: "65vh", zIndex: 10 }}
        >
          <div ref={form} className="row accessible-page">
            <div className="col-md-5 col-sm-6 col-lg-5">
              <form onSubmit={sendEmail} className="accessible-page">
                <div className="d-flex flex-column gap-1 accessible-page">
                  <div className="d-flex gap-1">
                    <input
                      name="from_name"
                      className={`w-100 p-2 rounded ${fadeTopOrBottom} ${
                        fadeTopOrBottom === "animation-upEntry" ? "" : "delay-3"
                      }`}
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                    <input
                      className={`w-100 p-2 rounded  ${fadeTopOrBottom} ${
                        fadeTopOrBottom === "animation-upEntry" ? "" : "delay-3"
                      }`}
                      name="from_email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      className={`w-100 p-2 rounded  ${fadeTopOrBottom} ${
                        fadeTopOrBottom === "animation-upEntry"
                          ? "delay-1"
                          : "delay-2"
                      }`}
                      name="subject"
                      type="text"
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Subject"
                    />
                  </div>
                  <div className="accessible-page mb-2">
                    <textarea
                      style={{ lineHeight: "20px", height: "100%" }}
                      className={`form-control w-100 p-2 rounded  ${fadeTopOrBottom} ${
                        fadeTopOrBottom === "animation-upEntry"
                          ? "delay-2"
                          : "delay-1"
                      }`}
                      name="message"
                      id=""
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="d-none d-md-block col-md-2 col-lg-2"></div>
            <div className="d-none d-sm-block col-md-5 col-sm-6 mb-2 accessible-page">
              <MapContainer
                className={`accessible-page w-100 ${fadeTopOrBottom} ${
                  fadeTopOrBottom === "animation-upEntry"
                    ? "delay-2"
                    : "delay-1"
                }`}
                center={[49.8697625, 16.928348]}
                zoom={13}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[49.8697625, 16.928348]}>
                  <Popup className="text-color text-font">
                    Přijdte na oběd :D
                  </Popup>
                </Marker>
                <div
                  className="position-absolute text-font text-dark p-2 fs-8 rounded text-center white-shadow adress-animation"
                  style={{
                    backgroundColor: "white",
                    bottom: 0,
                    left: 0,
                    zIndex: 1000,
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <span
                    className="lead delay-5  animation-fadeIn"
                    style={{ color: "rgba(0, 0, 0, 0.87)" }}
                  >
                    Josef Hobler
                  </span>
                  <br />
                  <span
                    className="delay-6  animation-fadeIn"
                    style={{ color: "rgba(0, 0, 0, 0.6)" }}
                  >
                    Czech Republic,
                  </span>
                  <br />

                  <span
                    className="delay-7  animation-fadeIn"
                    style={{ color: "rgba(0, 0, 0, 0.6)" }}
                  >
                    Lomená 193
                  </span>
                  <br />
                  <span
                    className="delay-8  animation-fadeIn"
                    style={{ color: "rgba(0, 0, 0, 0.6)" }}
                  >
                    Olomoucký kraj, Leština
                  </span>
                  <br />
                  <br />
                  <span
                    className="delay-9  animation-fadeIn"
                    style={{ color: "rgba(0, 0, 0, 0.6)" }}
                  >
                    pepous.hoblik@gmail.com
                  </span>
                </div>
              </MapContainer>
            </div>
            <div className="d-flex justify-content-between">
              <div
                className={` ${fadeTopOrBottom} ${
                  fadeTopOrBottom === "animation-upEntry" ? "delay-3" : ""
                }`}
              >
                <CTAButton onClick={sendEmail} rounded={true} text="Odeslat" />
              </div>
              <div
                className="d-block d-sm-none text-end"
                style={{ color: "white", fontSize: "0.7rem" }}
              >
                <span className="lead delay-5 animation-fadeIn">
                  Josef Hobler
                </span>
                <br />
                <span className="delay-6 animation-fadeIn">
                  Czech Republic,
                </span>
                <br />

                <span className="delay-7 animation-fadeIn">Lomená 193</span>
                <br />
                <span className="delay-8 animation-fadeIn">
                  Olomoucký kraj, Leština
                </span>
                <br />
                <br />
                <span className="delay-9  animation-fadeIn">
                  pepous.hoblik@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Kontakt;
