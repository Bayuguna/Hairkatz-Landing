import AButton from "@/components/atoms/button/button";
import ATextfield from "@/components/atoms/textfield/textfield";
import { BiSearch } from "react-icons/bi";
import SearchProps from "./search.interface";
import { useState } from "react";

const ASearch = ({
  size = "medium",
  color = "primary",
  ...props
}: SearchProps) => {
  const [search, setSearch] = useState<string>(props.value || "");

  const handleSearch = () => {
    props.onSubmit(search);
  };
  return (
    <div className="flex items-center gap-2">
      <ATextfield
        onChange={(e) => setSearch(e.target.value)}
        value={props.value}
        size={size}
        color={color}
      />
      <AButton
        label="Search"
        suffixIcon={BiSearch}
        size={size}
        color={color}
        onClick={handleSearch}
      />
    </div>
  );
};

export default ASearch;
