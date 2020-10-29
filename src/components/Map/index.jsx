import React from "react";
import PropTypes from "prop-types";
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";

const caseTypeColor = {
  cases: {
    hex: "#CC1034",
    multiplier: 300,
  },
  recovered: {
    hex: "#008000",
    multiplier: 300,
  },
  deaths: {
    hex: "#000000",
    multiplier: 1000,
  },
};

Map.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  countries: PropTypes.array,
};

function formatNumber(number) {
  let str = JSON.stringify(number);
  return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export default function Map(props) {
  const { center, zoom, countries, caseType } = props;

  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          atribution={`Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>`}
        />
        {countries.length &&
          countries.map((country) => {
            return (
              <Circle
                key={country.country}
                fillOpacity={0.4}
                color={caseTypeColor[caseType].hex}
                center={{
                  lat: country.countryInfo.lat,
                  lng: country.countryInfo.long,
                }}
                radius={
                  Math.sqrt(country[caseType]) *
                  caseTypeColor[caseType].multiplier
                }
              >
                <Popup>
                  <div className="map__infor-container">
                    <div className="map__infor-flag">
                      <img src={country.countryInfo.flag} alt="country-flag" />
                    </div>
                    <div className="map__infor-name">{country.country}</div>
                    <div className="map__infor-cases">
                      <ul style={{ padding: 0 }}>
                        <li>
                          <b>Cases:</b>
                          <span style={{ color: caseTypeColor.cases.hex }}>
                            {formatNumber(country.cases)}
                          </span>
                        </li>
                        <li>
                          <b>Recovered:</b>
                          <span style={{ color: caseTypeColor.recovered.hex }}>
                            {formatNumber(country.recovered)}
                          </span>
                        </li>
                        <li>
                          <b>Deaths:</b>
                          <span style={{ color: caseTypeColor.deaths.hex }}>
                            {formatNumber(country.deaths)}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Popup>
              </Circle>
            );
          })}
      </LeafletMap>
    </div>
  );
}
