import Link from "next/link";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Building2 } from "lucide-react";
import { Target } from "lucide-react";
import { Tag } from "lucide-react";
import { Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div
      className="flex-row lg:flex"
      style={{
        borderRadius: "16px",
        background:
          "linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)",
      }}
    >
      <div className="flex flex-col lg:h-screen p-5 w-full md:w-72">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <InventoryIcon className="text-white" />
            <h2 className="text-base font-extrabold text-white">
              TASK PILOT FRONTEND
            </h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  href="/"
                  className="flex items-center space-x-3 rounded-md"
                >
                  <Button style={{ width: "-webkit-fill-available" }}>
                    <Building2 className="mr-2 h-4 w-4" /> Company
                  </Button>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/project"
                  className="flex items-center space-x-3 rounded-md"
                >
                  <Button style={{ width: "-webkit-fill-available" }}>
                    <Layers3 className="mr-2 h-4 w-4" /> Project
                  </Button>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/tag"
                  className="flex items-center space-x-3 rounded-md"
                >
                  <Button style={{ width: "-webkit-fill-available" }}>
                    <Tag className="mr-2 h-4 w-4" /> Tag
                  </Button>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/task"
                  className="flex items-center space-x-3 rounded-md"
                >
                  <Button style={{ width: "-webkit-fill-available" }}>
                    <Target className="mr-2 h-4 w-4" /> Task
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
