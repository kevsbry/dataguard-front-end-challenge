import React from "react";
import { useAppSelector } from "../app/hooks";
import ToggleSwitch from "./ToggleSwitch";

interface PluginCardProps {
  pluginName: string;
  pluginDescription: string;
  active: boolean;
  disabled?: boolean;
}

const PluginCard = ({
  pluginName,
  pluginDescription,
  active,
  disabled = false,
}: PluginCardProps) => {
  const powerStatus = useAppSelector((state) => state.powerStatus);

  return (
    <div
      className={`prose max-w-sm border-2 rounded-lg p-6 min-w-[320px] mt-4 ${
        (disabled || !powerStatus.enabled) && "opacity-50"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="m-0 grey-700">{pluginName}</h3>
        <ToggleSwitch
          active={active}
          disabled={disabled || !powerStatus.enabled}
          onToggle={() => {}}
        />
      </div>

      <p className="text-gray-400 max-w-[250px] text-sm">{pluginDescription}</p>
    </div>
  );
};

export default PluginCard;
