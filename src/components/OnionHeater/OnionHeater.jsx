import React from "react";
const OnionHeater = () => {
  const handleChange = (e) => {
    if (e.target.value.includes("onion")) {
      alert("I heater the onion");
      e.target.value = "";
  };
}
  return (
    <div>
      <h1>Onion Heater</h1>
      <textarea name="review" cols="20" rows="3" onChange={handleChange} />
    </div>
  );
};
export default OnionHeater;
