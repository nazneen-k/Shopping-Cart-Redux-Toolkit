import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
import Store from "../store/Store";

const RootLayout = ({ children }) => {
  return (
    <>
      <Provider store={Store}>
        <NavBarPanel />
        <main>{children}</main>
      </Provider>
    </>
  );
};

export default RootLayout;
