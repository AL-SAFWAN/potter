import {
  ComputerOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  PeopleOutlined,
  ReceiptOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useState } from "react";
import { tokens } from "../../theme";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { useSpring, animated } from "@react-spring/web";
import { config } from "react-spring";
import { useNavigate, useLocation, matchRoutes } from "react-router-dom";

const Item = ({
  style,
  title,
  width,
  to,
  icon,
  selected,
  setSelected,
  isCollapsed,
}) => {
  const theme = useTheme();
  const AnimatedListText = animated(ListItemText);
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = () => {
    setSelected(title);
    navigate(to);
  };
  const isCurrentPath = () => {
    return location.pathname === to;
  };
  console.log(selected, title, to, isCurrentPath());

  const translateX = useSpring({
    delay: 170,
    opacity: !isCollapsed ? 1 : 0,
  });

  return (
    <animated.div
      style={{
        ...width,
        color: colors.grey[100],
        ...style,
      }}
      onClick={() => {
        handleOnClick();
      }}
    >
      <MenuItem
        disableGutters
        divider={true}
        key={title}
        sx={{
          p: 2,
          color: isCurrentPath() ? colors.greenAccent[200] : colors.grey[100],
          // &	.Mui-focusVisible{}

          borderLeft: ` ${selected === title ? "3px" : "3px"}  solid ${
            isCurrentPath() ? colors.greenAccent[500] : "transparent"
          }`,

          "&:hover": {
            borderLeft: ` ${selected === title ? "3px" : "3px"}  solid ${
              isCurrentPath() ? colors.greenAccent[500] : colors.grey[100]
            }`,
          },
        }}
      >
        <ListItemIcon
          sx={{
            color: isCurrentPath() ? colors.greenAccent[500] : colors.grey[100],
          }}
        >
          {icon}
        </ListItemIcon>
        <AnimatedListText style={translateX}>
          {!isCollapsed && title}
        </AnimatedListText>
      </MenuItem>
    </animated.div>
  );
};

export default function Menu() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  console.log(selected);
  const props = useSpring({
    transform: isCollapsed ? "rotateY(0deg)" : "rotateY(180deg)",
  });

  const width = useSpring({
    width: isCollapsed ? "60px" : "250px",
  });
  const translateX = useSpring({
    delay: 140,
    opacity: !isCollapsed ? 1 : 0,
    display: !isCollapsed ? "block" : "none",
  });

  const nmb = 500;
  console.log(colors.primary[nmb]);
  const AnimatedPaper = animated(Paper);

  return (
    <AnimatedPaper
      elevation={6}
      style={{
        width: width.width,
        background: `${colors.primary[nmb]}`,
        height: "inherit",
        flexDirection: "column",
        borderRight: `1px solid ${colors.grey[100]}21`,
      }}
    >
      <Paper
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
        style={{
          backgroundColor: colors.primary[nmb],
          flex: "auto",
          display: "flex",
          alignItems: "flex-start",
          borderRadius: 0,
        }}
        elevation={0}
      >
        <MenuList sx={{ p: 0 }}>
          <Item
            style={{
              // borderTop: `1px solid ${colors.grey[100]}21`,
              ...width,
            }}
            title="New Customer"
            to="/customerselection"
            icon={<PeopleOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title="New Customer From Exsisting "
            to="/team"
            icon={<PeopleOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
            style={width}
          />
          <Item
            title="New Deal Structure"
            to="/newdealstructure"
            icon={<HomeOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
            style={width}
          />
          <Item
            title="Exisiting Customer"
            to="/contacts"
            icon={<ContactsOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
            style={width}
          />
          <Item
            title="Exisiting Deal"
            to="/invoices"
            icon={<ReceiptOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
            style={width}
          />
          <Item
            title="Work Flow"
            to="/form"
            icon={<SearchOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
            style={width}
          />
          <Item
            title="Rejection and Approval"
            to="/calendar"
            icon={<HelpOutlineOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
            style={width}
          />
          <Item
            title="Queue Monitor"
            to="/calendar"
            icon={<ComputerOutlined />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
            style={width}
          />
        </MenuList>
      </Paper>
    </AnimatedPaper>
  );
}
