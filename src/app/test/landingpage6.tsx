import { FC } from "react";
import { 
  CircleHelp, 
  CircleDollarSign, 
  Euro, 
  Landmark, 
  BarChart3, 
  Package, 
  Layers 
} from "lucide-react";


const icons = [
  { icon: <CircleHelp className="h-6 w-6" />, label: "Help" },
  { icon: <CircleDollarSign className="h-6 w-6" />, label: "Rupiah" },
  { icon: <Euro className="h-6 w-6" />, label: "Euro" },
  { icon: <Landmark className="h-6 w-6" />, label: "Bank" },
  { icon: <BarChart3 className="h-6 w-6" />, label: "Chart" },
  { icon: <Package className="h-6 w-6" />, label: "Package" },
  { icon: <Layers className="h-6 w-6" />, label: "Layers" },
];

const SupportedAssets: FC = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-xl font-semibold mb-8">Supported Assets & Integrations</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {icons.map(({ icon, label }, idx) => (
          <div
            key={idx}
            className="bg-white hover:bg-gray-200 rounded-md p-4 transition duration-200 cursor-pointer"
            title={label}
          >
            {icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportedAssets;
