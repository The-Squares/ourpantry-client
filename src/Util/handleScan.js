async function handleScan(code, switchScan, itemList, shelterId, password) {
  let getProductInfo = async () => {
    let response = await fetch(
      `${process.env.REACT_APP_SERVER_IP}/shelter/barcode?UPC=${code}`
    );
    let data = await response.json();
    return data.name;
  };

  let getItemByName = async (name) => {
    return itemList.find((item) => item?.name === name);
  };

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

  let createItem = async (productName) => {
    let payload = {
      item: {
        name: productName,
        quant: 1,
        priority: 0,
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
    if (response.status !== 200) throw TypeError;
  };

  let submitScan = async () => {
    let productName = await getProductInfo();
    if (!productName) return;
    let item = await getItemByName(productName);
    try {
      if (item) addItem(item);
      else createItem(productName);
    } catch (e) {
      alert(e);
      return;
    }

    alert(code);
  };

  await submitScan();
  switchScan();
  window.location.reload();
}

export default handleScan;
