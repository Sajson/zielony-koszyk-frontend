import { Box } from "@mui/material";
import Nav from "./Nav.tsx";
import CartBadge from "./CartBadge.tsx";

function Header() {
  return (
    <Box
      component="header"
      id="app-header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        padding: 2,
        bgcolor: "background.paper",
        color: "text.primary",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <img src="logo192.png" alt="logo" />
      <Nav />
      <Box
        id="user-actions-wrapper"
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          "& img": {
            width: 20,
            height: 20,
            objectFit: "cover",
          },
          "& div": {
            cursor: "pointer",
          },
        }}
      >
        <Box>
          <CartBadge />
        </Box>
        <Box>Logowanie</Box>
      </Box>
    </Box>
  );
}

export default Header;
