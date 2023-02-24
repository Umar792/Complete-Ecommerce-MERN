import React, { Fragment, useState } from "react";
import "./Shipping.css";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";
import CheckoutSteps from "./CheckoutSteps";
import { UseCardContext } from "../../ContextApi/ProductContext/CardContext";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const Shipping = () => {
    const {shippinginfo,ShppingInfocall} = UseCardContext();
    const navigate = useNavigate()
    const [adress, setAddress] = useState(shippinginfo.adress ? shippinginfo.adress :"");
    const [city, setCity] = useState(shippinginfo.city ? shippinginfo.city :"");
    const [state, setState] = useState(shippinginfo.state ? shippinginfo.state :"");
    const [country, setCountry] = useState(shippinginfo.country ? shippinginfo.country :"");
    const [pinCode, setPinCode] = useState(shippinginfo.pinCode ? shippinginfo.pinCode :"");
    const [phoneNo, setPhoneNo] = useState(shippinginfo.phoneNo ? shippinginfo.phoneNo :"");
    const [name, setName] = useState(shippinginfo.name ? shippinginfo.name :"");

    const shippingInfoSubmit = (e)=>{
        e.preventDefault();

        if(phoneNo.length < 10 || phoneNo.length > 10){
          return toast.error("Phone number should be 10 digits")
        }

        ShppingInfocall({adress,city,state,country,pinCode,phoneNo,name});
        toast.success("Shipping info  send successfuly")
        navigate("/login/shipping/conform/shipping")

    }
  return (
    <Fragment>
     <CheckoutSteps activeStep={0}/>
      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Shipping Details</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingInfoSubmit}
          >
            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Address"
                required
                value={adress}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <DriveFileRenameOutlineIcon />
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <PinDropIcon />
              <input
                type="number"
                placeholder="Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>

            <div>
              <PublicIcon />

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div>
                <TransferWithinAStationIcon />

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
