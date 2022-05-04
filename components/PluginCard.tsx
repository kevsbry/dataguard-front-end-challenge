import React from "react";
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
  return (
    <div
      className={`prose max-w-sm border-2 rounded-lg p-6 min-w-[320px] mt-4 ${
        disabled && "opacity-50"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="m-0 grey-700">{pluginName}</h3>
        <ToggleSwitch active={active} disabled={disabled} onToggle={() => {}} />
      </div>

      <p className="text-gray-400 max-w-[250px] text-sm">{pluginDescription}</p>
    </div>
  );
};

export default PluginCard;
