import FilterButton from "./FilterButton";
import { Text, TextProps } from "../utils/types";

const Sidebar = ({ t }: TextProps) => {
  return (
    <aside className="w-sidebar_desktop h-desktop px-6 red">
      <FilterButton t={(t.filter as Text).sort_filter as string} />
    </aside>
  );
};

export default Sidebar;
