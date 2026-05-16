import { motion } from "motion/react";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const menuItems = [
  { label: "Ecosystem", hasDropdown: false },
  { label: "Economics", hasDropdown: true },
  { label: "Developers", hasDropdown: false },
  { label: "Governance", hasDropdown: true },
];

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8 lg:px-10 py-4 md:py-6">
      <div className="hidden md:block flex-1" />

      <ul className="hidden md:flex items-center gap-8 text-[rgba(30,50,90,0.9)] text-sm font-normal">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
          >
            {item.label}
            {item.hasDropdown && (
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </li>
        ))}
      </ul>

      <div className="md:hidden text-[rgba(30,50,90,0.95)] text-xl font-normal tracking-tight">
        RIVR
      </div>

      <div className="flex-1 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group"
        >
          <span className="bg-white/15 rounded-full p-1.5 md:p-2 flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </span>
          <span className="text-xs md:text-sm font-normal">Book Demo</span>
        </motion.button>
      </div>
    </nav>
  );
}