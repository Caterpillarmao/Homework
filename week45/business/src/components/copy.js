setGrid([
    ...grid,
    {
      action: action,
      symbol: symbol,
      orderType: orderType,
      tif: tif,
      qty: qty,
      price: price,
      stopPrice: stopPrice,
      comment: comment,
    },
  ]);
  setAction("");
  setSymbol("");
  setOrderType("");
  setTif("");
  setQty(357);
  setPrice(0);
  setStopPrice(0);
  setComment("");