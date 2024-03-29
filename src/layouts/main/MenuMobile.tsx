import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Link,
  Drawer,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
// config
import { NAVBAR } from "../../config";
// components
import Logo from "../../components/Logo";
import Iconify from "../../components/Iconify";
import Scrollbar from "../../components/Scrollbar";
import { NavSectionVertical } from "../../components/nav-section/index";
import logo from "../../assets/img/logo.png";
// ----------------------------------------------------------------------

const ListItemStyle: any = styled(ListItemButton)(({ theme }: any) => ({
  ...theme.typography.body2,
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

MenuMobile.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function MenuMobile({ isOffset, isHome, navConfig }: any) {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          ...(isHome && { color: "common.dark" }),
          ...(isOffset && { color: "text.primary" }),
        }}
      >
        <Iconify icon={"eva:menu-2-fill"} />
      </IconButton>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Logo />

          <List disablePadding>
            {navConfig.map((link: any) => (
              <MenuMobileItem
                key={link.title}
                item={link}
                isOpen={open}
                onOpen={handleOpen}
              />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
  isOpen: PropTypes.bool,
  item: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.any,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  onOpen: PropTypes.func,
};

function MenuMobileItem({ item, isOpen, onOpen }: any) {
  const { title, path, icon, children } = item;

  if (children) {
    return (
      <>
        <ListItemStyle onClick={onOpen}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          <Iconify
            icon={
              isOpen
                ? "eva:arrow-ios-downward-fill"
                : "eva:arrow-ios-forward-fill"
            }
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <NavSectionVertical
              navConfig={children}
              sx={{
                "& .MuiList-root:last-of-type .MuiListItemButton-root": {
                  height: 200,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  bgcolor: "background.neutral",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(https://doctor-meet.web.app/assets/illustrations/illustration_dashboard.png)",
                  "& > *:not(.MuiTouchRipple-root)": { display: "none" },
                },
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }

  if (title === "Documentation") {
    return (
      <ListItemStyle
        href={path}
        target="_blank"
        rel="noopener"
        component={Link}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText disableTypography primary={title} />
      </ListItemStyle>
    );
  }

  return (
    <ListItemStyle
      to={path}
      component={RouterLink}
      end={path === "/"}
      sx={{
        "&.active": {
          color: "primary.main",
          fontWeight: "fontWeightMedium",
          bgcolor: (theme: any) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  );
}
