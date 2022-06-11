import React, { FC, useContext, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import BackgroundText from "../../Components/BackgroundText";
import CTAButton from "../../Components/CTAButton";
import emailjs from "@emailjs/browser";
import MouseScroll2 from "../../Components/MouseScrollUp/MouseScroll2";
import "./Kontakt.scss";
import MouseScroll from "../../Components/MouseScrollDown/MouseScroll";
import { contextTypes, UserContext } from "../../App";
import MouseComponent from "../../Components/MouseComponent/MouseComponent";

interface Props {
  unmounting: boolean;
}

const Kontakt: FC<Props> = ({ unmounting }) => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  let animations = "";

  if (unmounting) {
    animations = "animation-fade";
  }

  let fadeTopOrBottom = "animation-down";
  const data = useContext(UserContext) as contextTypes;
  if (data.firstLoad) {
  } else if (data.previousPage !== 0) {
    fadeTopOrBottom = "animation-up";
  }

  const checkIfValid = () => {
    if (!name) return false;
    if (!email) return false;
    if (!subject) return false;
    if (!message) return false;
    return true;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(form.current);
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
      <div
        className={`${animations} h-100 d-flex flex-column justify-content-center position-relative`}
      >
        <div className="container px-5 text-font text-color">
          <div className="row">
            <div className="col-md-5 col-sm-6 col-lg-5">
              <form action="" ref={form} onSubmit={sendEmail}>
                <div className="d-flex flex-column gap-1">
                  <div className="d-flex gap-1">
                    <input
                      name="from_name"
                      className={`w-100 p-2 rounded ${fadeTopOrBottom} ${
                        fadeTopOrBottom === "animation-up" ? "" : "delay-300"
                      }`}
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                    <input
                      className={`w-100 p-2 rounded  ${fadeTopOrBottom} ${
                        fadeTopOrBottom === "animation-up" ? "" : "delay-300"
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
                        fadeTopOrBottom === "animation-up"
                          ? "delay-100"
                          : "delay-200"
                      }`}
                      name="subject"
                      type="text"
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <textarea
                      className={`w-100 p-2 rounded  ${fadeTopOrBottom} ${
                        fadeTopOrBottom === "animation-up"
                          ? "delay-200"
                          : "delay-100"
                      }`}
                      name="message"
                      id=""
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      rows={8}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="d-none d-md-block col-md-1 col-lg-2"></div>
            <div className="col-md-5 col-sm-6 h-100 mb-2">
              <MapContainer
                className={`w-100 h-100 ${fadeTopOrBottom} ${
                  fadeTopOrBottom === "animation-up" ? "delay-200" : "delay-100"
                }`}
                center={[49.8697625, 16.928348]}
                zoom={13}
              >
                fwf
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[49.8697625, 16.928348]}>
                  <Popup className="text-color text-font">
                    Přijdte na oběd :D
                  </Popup>
                </Marker>
                <div
                  className="position-absolute text-font text-dark p-2 fs-8 rounded text-center white-shadow"
                  style={{
                    backgroundColor: "white",
                    bottom: 0,
                    left: 0,
                    zIndex: 1000,
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <span
                    className="lead"
                    style={{ color: "rgba(0, 0, 0, 0.87)" }}
                  >
                    Josef Hobler
                  </span>
                  <br />
                  <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    Czech Republic,
                  </span>
                  <br />
                  <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    Lomená 193
                  </span>
                  <br />
                  <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    Olomoucký kraj, Leština
                  </span>
                  <br />
                  <br />
                  <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    pepous.hoblik@gmail.com
                  </span>
                </div>
              </MapContainer>
            </div>
            <div
              className={` ${fadeTopOrBottom} ${
                fadeTopOrBottom === "animation-up" ? "delay-300" : ""
              }`}
            >
              <CTAButton onClick={sendEmail} rounded={true} text="Odeslat" />
            </div>
          </div>
        </div>
        <MouseComponent top={true} />
        <MouseComponent top={false} />
      </div>
    </>
  );
};

export default Kontakt;
