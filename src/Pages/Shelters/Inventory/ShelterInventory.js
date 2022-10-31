import Divider from "Components/General/Divider";
import InventoryCard from "Components/General/InventoryCard";
import NavBar from "Components/General/NavBar";
import PantryCardCentered from "Components/General/PantryCardCentered";
import useBoolean from "Hooks/useBoolean";
import useInventory from "Hooks/useInventory";
import usePopup from "Hooks/usePopup";
import useUserData from "Hooks/useUserData";
import React from "react";
import { Textfit } from "react-textfit";
import handleScan from "Util/handleScan";
import Scanner from "./Scanner";
import "./ShelterInventory.css";
import ShelterPop from "./ShelterPop";

function ShelterInventory() {
  let [menuClass, listClass, updatePop] = usePopup();
  let [scanning, switchScanning] = useBoolean(false);
  let userData = useUserData();
  let inventory = useInventory(userData.id, userData.password);

  if (Object.keys(userData).length === 0) {
    return <></>;
  }
  return (
    <>
      <NavBar></NavBar>
      {scanning ? (
        <Scanner
          finished={(code) =>
            handleScan(
              code,
              switchScanning,
              inventory,
              userData.id,
              userData.password
            )
          }
          swap={switchScanning}
        ></Scanner>
      ) : (
        <div className="ShelterInventory">
          <Divider>
            <Textfit mode="single" style={{ width: "85vw" }}>
              {userData.name}
            </Textfit>
            <p>{userData.address}</p>
          </Divider>
          <div className={`shelterItemList ${listClass}`}>
            <p>CURRENT ITEMS</p>
            <PantryCardCentered
              star={false}
              text="SCAN ITEMS"
              color="var(--green)"
              onClick={switchScanning}
            ></PantryCardCentered>
            <PantryCardCentered
              star={false}
              text="ADD ITEM"
              color="var(--green)"
              onClick={updatePop}
            ></PantryCardCentered>
            {inventory.map((item, i) => (
              <InventoryCard
                name={item.name}
                initalCount={item.quant}
                key={item.name + i}
                shelterid={userData.id}
                password={userData.password}
              ></InventoryCard>
            ))}
          </div>
          <ShelterPop
            menuClass={menuClass}
            closePop={updatePop}
            itemList={inventory}
            shelterId={userData.id}
            password={userData.password}
          ></ShelterPop>
        </div>
      )}
    </>
  );
}

export default ShelterInventory;
