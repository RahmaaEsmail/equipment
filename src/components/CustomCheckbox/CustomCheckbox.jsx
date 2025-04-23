import React from "react";

export default function CustomCheckbox({ label, value, setValue }) {
  return (
    <label class="checkbox_container items-center gap-2">
      {/* <span className="text-[16px] font-medium">{label}</span> */}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  );
}
