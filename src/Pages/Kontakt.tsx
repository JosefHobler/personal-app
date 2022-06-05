import React, { FC, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import BackgroundText from "../Components/BackgroundText";
import Arrow from "../Images/Feather-arrows-arrow-down.svg";

interface Props {
  unmounting: boolean;
}

const Kontakt: FC<Props> = ({ unmounting }) => {
  const form = useRef(null);

  let animations = "";
  if (unmounting) {
    animations = "animation-fade";
  }

  const sendEmail = () => {};

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Kontakt" />
      </div>
      <div
        className={`${animations} h-100 d-flex flex-column justify-content-center position-relative`}
      >
        <div className="container px-5">
          <div className="row">
            <div className="col-6">
              <form action="" ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-6 mb-2">
                    <input
                      name="name"
                      className="w-100 p-2 rounded"
                      required
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      className="w-100 p-2 rounded"
                      name="email"
                      required
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className="w-100 p-2 mb-2 rounded"
                    name="subject"
                    required
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    className="w-100 p-2 rounded"
                    name="message"
                    id=""
                    required
                    placeholder="Message"
                    rows={8}
                  ></textarea>
                </div>
              </form>
              <button
                className="orange-shadow btn btn-secondary rounded"
                aria-label="add"
              >
                Odeslat
              </button>
            </div>
            <div className="col-6">
              <MapContainer
                className="w-100 h-100"
                center={[49.8697625, 16.928348]}
                zoom={13}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[49.8697625, 16.928348]}>
                  <Popup>Přijdte na oběd :D</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 align-self-center text-center">
          <p>Scroll</p>
          <img style={{ width: "50px" }} src={Arrow} alt="h" />
        </div>
      </div>
    </>
  );
};

export default Kontakt;
