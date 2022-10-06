import type { RootState } from "../app/store";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <span>{count}</span>
    </div>
  );
};

export default Header;
