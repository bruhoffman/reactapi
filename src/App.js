import { Router } from "./routes/router";
import { GlobalStyled } from "./global/globalTheme";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Router />
    </>
  );
};

export default App;
