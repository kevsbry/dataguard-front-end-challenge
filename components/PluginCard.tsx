import React from "react";
import PluginSwitch from "./PluginSwitch";

interface PluginCardProps {
  pluginName: string;
  pluginDescription: string;
  allowed?: boolean;
}

const PluginCard = ({
  pluginName,
  pluginDescription,
  allowed,
}: PluginCardProps) => {
  return (
    <div className="prose max-w-sm border-2 rounded-lg p-6">
      <div className="flex justify-between">
        <h3 className="m-0 grey-700">{pluginName}</h3>
        <PluginSwitch active={true} onToggle={() => {}} />
      </div>

      <p className="text-gray-400 max-w-[250px] text-sm">{pluginDescription}</p>
    </div>
  );
};

export default PluginCard;
