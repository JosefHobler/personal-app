import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { useAppSelector } from "../../Hooks/useAppSelector";
import useWindowSize from "../../Hooks/useWindowSize";

import BackgroundText from "../../Components/Global/BackgroundText/BackgroundText";
import CTAButton from "../../Components/Global/CallToAction/CTAButton";
import Container from "../../Components/Global/Container/Container";
import { useRefresh } from "../../Hooks/useRefresh";

const Kontakt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const prevPage = useAppSelector((state) => state.pages.prevPage);
  const { width: windowWidth } = useWindowSize();
  const contactRef = useRef<HTMLFormElement>(null);
  const refresh = useRefresh();

  let animations = prevPage === 3 ? "animation-fadeOut" : "";
  let fadeTopOrBottom = "animation-downEntry";

  if (prevPage !== 0) {
    fadeTopOrBottom = "animation-upEntry";
  }

  const validateInputs = () => {
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert("neplatná emailová adresa");
      return false;
    }
    if (!name) {
      alert("Neplatné jméno");
      return false;
    }
    if (!message) {
      alert("Neplatná zpráva");
      return false;
    }
    return true;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs()) return;
    emailjs
      .sendForm(
        "service_lk8lvhj",
        "template_jnnrz6j",
        contactRef.current ? contactRef.current : "",
        "I9yfNwOfp3HKRNBII"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
          refresh();
        },
        () => {
          alert("Error");
        }
      );
  };

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Kontakt" />
      </div>
      <Container animations={animations}>
        <div className="accessible-page d-flex justify-content-center align-items-center">
          <div
            className="container px-5 text-font text-color"
            style={{ zIndex: 10, height: "60vh" }}
          >
            <div className="row h-100">
              <div className="col-md-5 col-sm-6 col-lg-5 h-100">
                <form onSubmit={sendEmail} className="h-100" ref={contactRef}>
                  <div className="d-flex flex-column gap-1 h-100">
                    <div className="d-flex gap-1" style={{ height: "7%" }}>
                      <input
                        name="from_name"
                        className={`w-100 p-2 rounded ${fadeTopOrBottom} ${
                          fadeTopOrBottom === "animation-upEntry"
                            ? ""
                            : "delay-3"
                        }`}
                        style={{ height: "100%" }}
                        value={name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jméno"
                      />
                      <input
                        className={`w-100 p-2 rounded  ${fadeTopOrBottom} ${
                          fadeTopOrBottom === "animation-upEntry"
                            ? ""
                            : "delay-3"
                        }`}
                        style={{ height: "100%" }}
                        name="from_email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div style={{ height: "7%" }}>
                      <input
                        className={`w-100 p-2 rounded  ${fadeTopOrBottom} ${
                          fadeTopOrBottom === "animation-upEntry"
                            ? "delay-1"
                            : "delay-2"
                        }`}
                        style={{ height: "100%" }}
                        name="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Předmět"
                      />
                    </div>
                    <div
                      className="mb-2"
                      style={{
                        height: `${windowWidth! < 576 ? "71%" : "86%"}`,
                      }}
                    >
                      <textarea
                        style={{
                          lineHeight: "20px",
                          height: "100%",
                        }}
                        className={`form-control w-100 h-100 p-2 rounded m-0 p-0  ${fadeTopOrBottom} ${
                          fadeTopOrBottom === "animation-upEntry"
                            ? "delay-2"
                            : "delay-1"
                        }`}
                        value={message}
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Zpráva"
                      ></textarea>
                    </div>
                    <div
                      className="d-flex d-sm-none justify-content-between justify-content-md-start"
                      style={{ height: "15%" }}
                    >
                      <div
                        style={{ height: "100%" }}
                        className={` ${fadeTopOrBottom} ${
                          fadeTopOrBottom === "animation-upEntry"
                            ? "delay-3"
                            : ""
                        }`}
                      >
                        <CTAButton
                          onClick={sendEmail}
                          rounded={true}
                          text="Odeslat"
                        />
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
                          Česká republika,
                        </span>
                        <br />

                        <span className="delay-7 animation-fadeIn">
                          Lomená 193
                        </span>
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
                </form>
              </div>
              <div className="d-none d-md-block col-md-2 col-lg-2"></div>
              <div className="d-none d-sm-block col-md-5 col-sm-6 mb-2 h-100">
                <MapContainer
                  className={`h-100 w-100 ${fadeTopOrBottom} ${
                    fadeTopOrBottom === "animation-upEntry"
                      ? "delay-2"
                      : "delay-1"
                  }`}
                  center={[49.8697625, 16.928348]}
                  zoom={9}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[49.8697625, 16.928348]}></Marker>
                  <div
                    className="position-absolute text-font text-dark p-2 fs-8 rounded text-center white-shadow"
                    style={{
                      backgroundColor: "white",
                      bottom: 0,
                      left: 0,
                      zIndex: 1001,
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <span
                      className="lead delay-5  animation-fadeIn heading-font"
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
                      Leština
                    </span>
                    <br />
                    <span
                      className="delay-8  animation-fadeIn"
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    >
                      okres Šumperk
                    </span>
                    <br />
                    <span
                      className="delay-9  animation-fadeIn"
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    >
                      Olomoucký kraj
                    </span>
                    <br />
                    <span
                      className="delay-10  animation-fadeIn"
                      style={{ color: "rgba(0, 0, 0, 0.8)" }}
                    >
                      pepous.hoblik@gmail.com
                    </span>
                  </div>
                </MapContainer>
              </div>
            </div>
            <div
              className={` ${fadeTopOrBottom} ${
                fadeTopOrBottom === "animation-upEntry" ? "delay-3" : ""
              } d-none d-sm-block justify-content-between justify-content-md-start`}
            >
              <CTAButton onClick={sendEmail} rounded={true} text="Odeslat" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Kontakt;
