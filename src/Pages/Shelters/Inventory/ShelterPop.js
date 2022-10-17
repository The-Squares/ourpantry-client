import SmallButton from "Components/General/SmallButton";
import React from "react";
import { useState } from "react";

function ShelterPop({ menuClass, closePop, itemList, shelterId, password }) {
  let [title, setTitle] = useState("");
  let [quantity, setQuantity] = useState(1);
  let [priority, setPriority] = useState(0);

  let addItem = async (item) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "text/plain" },
      body: password,
    };

    let response = await fetch(
      `${process.env.REACT_APP_SERVER_IP}/shelter/${shelterId}/item/${item.name}/add`,
      options
    );
    if (response.status !== 200) throw TypeError;
  };

  let submitPopup = async () => {
    if (!title) return alert("No title!");
    let existingItem = itemList.find((item) => item.name === title);
    if (existingItem) {
      addItem(existingItem);
      closePop();
      window.location.reload();
    }
    let payload = {
      item: {
        name: title,
        quant: quantity,
        priority: priority,
      },
      password: password,
    };
    let response = await fetch(
      `${process.env.REACT_APP_SERVER_IP}/shelter/${shelterId}/item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (response.status !== 200) return;
    closePop();
    window.location.reload();
  };

  return (
    <div className={`shelterAddMenu ${menuClass}`}>
      <div className="shelterUpper">
        <p
          contentEditable={true}
          suppressContentEditableWarning={true}
          // @ts-ignore
          onInput={(t) => setTitle(t.currentTarget.textContent)}
          onClick={(e) => {
            // @ts-ignore
            e.target.focus();
            document.execCommand("selectAll", false, null);
            // alert(title);
          }}
        >
          Item Name Here
        </p>
      </div>
      <div className="shelterLower">
        <div className="shelterQuantity">
          <p>Quantity</p>
          <div className="quantityCount">
            <p onClick={() => setQuantity(Math.max(quantity - 1, 1))}>-</p>
            <p>{quantity}</p>
            <p onClick={() => setQuantity(quantity + 1)}>+</p>
          </div>
          <p>Priority</p>
          <div className="priorityCheck">
            <p className="pFirst" onClick={() => setPriority(1)}>
              !
            </p>
            <p className="pSecond" onClick={() => setPriority(2)}>
              !
            </p>
            <p className="pThird" onClick={() => setPriority(3)}>
              !
            </p>
          </div>
          <SmallButton color="#62BCD3" onClick={submitPopup}>
            Submit
          </SmallButton>
        </div>
      </div>
    </div>
  );
}

export default ShelterPop;
