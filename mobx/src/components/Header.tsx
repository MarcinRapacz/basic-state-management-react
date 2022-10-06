import { observer } from "mobx-react";

import store from "../store";

const Header = () => {
  return <div>{store.counter}</div>;
};

export default observer(Header);
