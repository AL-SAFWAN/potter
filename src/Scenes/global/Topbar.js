import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutline,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  InputBase,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
function Topbar({ landing = true }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const MyThemeComponent = (props) => (
    <Button
      variant="text"
      disableRipple="true"
      sx={{
        color: colors.grey[100],
        "&:hover": { borderBottom: `1px solid ${colors.greenAccent[500]}` },
        fontSize: 13,
        pl: 10,
        pr: 10,
        borderRadius: 0,
      }}
    >
      {props.children}
    </Button>
  );
  return (
    <>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent="space-between"
        p="2"
        height={56.57}
        sx={{
          backgroundColor: colors.primary[500],
        }}
      >
        <Box
          display="flex"
          borderRadius="3px"
          sx={{
            ml: 2,
            alignItems: "center",
            fontSize: "19px",
            fontWeight: 300,
            lineHeight: "15px",
          }}
        >
          <img
            src="logo.png"
            style={{
              width: "130px",
              paddingRight: "9px",
              filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
            }}
          ></img>
        </Box>
        {/* <ButtonGroup>
          <MyThemeComponent>About</MyThemeComponent>
          <MyThemeComponent>Discover</MyThemeComponent>
          <MyThemeComponent>Learn</MyThemeComponent>
        </ButtonGroup> */}
        <Box>
          <IconButton
            onClick={colorMode.toggleColorMode}
            type="button"
            sx={{ p: 1 }}
          >
            {theme.palette.mode === "dark" ? (
              <LightModeOutlined />
            ) : (
              <DarkModeOutlined />
            )}
          </IconButton>
          {landing && (
            <>
              <IconButton type="button" sx={{ p: 1 }}>
                <NotificationsOutlined />
              </IconButton>

              <IconButton type="button" sx={{ p: 1 }}>
                <PersonOutline />
              </IconButton>
              <IconButton type="button" sx={{ p: 1 }}>
                <SettingsOutlined />
              </IconButton>
            </>
          )}
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default Topbar;
