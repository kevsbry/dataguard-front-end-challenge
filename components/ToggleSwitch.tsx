import React, { useState } from "react";

const ToggleSwitch = ({
  active,
  onToggle,
  disabled = false,
}: {
  active: boolean;
  onToggle: () => void;
  disabled?: boolean;
}) => {
  const [enabled, setEnabled] = useState(active);

  return (
    <div
      className="flex flex-col cursor-pointer transition-all items-center"
      onClick={() => {
        if (disabled) {
          return;
        }

        onToggle();
        setEnabled(!enabled);
      }}
    >
      <div
        className={`${
          enabled ? "bg-green-600" : "bg-red-600"
        } rounded-full p-1 w-12`}
      >
        <div
          className={`${
            enabled ? "ml-auto" : "mr-auto"
          } w-5 h-5 bg-white rounded-full`}
        ></div>
      </div>

      <span
        className={`${
          enabled ? "text-green-600" : "text-red-600"
        } text-sm mt-1`}
      >
        {enabled ? "Allowed" : "Blocked"}
      </span>
    </div>
  );
};

export default ToggleSwitch;
