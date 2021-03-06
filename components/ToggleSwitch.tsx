import React, { useState } from "react";
import { FiPower } from "react-icons/fi";
import { useAppSelector } from "../app/hooks";

const ToggleSwitch = ({
  active,
  onToggle,
  disabled = false,
  powerIcon = false,
}: {
  active: boolean;
  onToggle: () => void;
  disabled?: boolean;
  powerIcon?: boolean;
}) => {
  const [enabled, setEnabled] = useState(active);
  const powerStatus = useAppSelector((state) => state.powerStatus);

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
          } w-5 h-5 bg-white rounded-full flex items-center justify-center`}
        >
          {powerIcon ? (
            <FiPower
              className={`${
                powerStatus.enabled ? "text-green-600" : "text-red-600"
              } text-lg`}
            />
          ) : null}
        </div>
      </div>

      {!powerIcon ? (
        <span
          className={`${
            enabled ? "text-green-600" : "text-red-600"
          } text-sm mt-1`}
        >
          {enabled ? "Allowed" : "Blocked"}
        </span>
      ) : null}
    </div>
  );
};

export default ToggleSwitch;
