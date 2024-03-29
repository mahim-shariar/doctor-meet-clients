import PropTypes, { any } from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Stack, Drawer } from "@mui/material";
// hooks
import useResponsive from "../../../hooks/useResponsive";
import useCollapseDrawer from "../../../hooks/useCollapseDrawer";
// utils
import cssStyles from "../../../utils/cssStyles";
// config
import { NAVBAR } from "../../../config";
// components
import Logo from "../../../components/Logo";
import Scrollbar from "../../../components/Scrollbar";
import { NavSectionVertical } from "../../../components/nav-section/index";
//
import {
  sidebarConfigAdmin,
  sidebarConfigUser,
  sidebarConfigModerator,
  sidebarConfigDoctor,
} from "./NavConfig";
import NavbarAccount from "./NavbarAccount";
import CollapseButton from "./CollapseButton";
import logo from "../../../assets/img/logo.png";
import { useAppSelector } from "../../../redux/store";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }: any) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

NavbarVertical.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function NavbarVertical({ isOpenSidebar, onCloseSidebar }: any) {
  const { user }: any = useAppSelector((state) => state?.user);
  console.log(user);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  }: any = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && { alignItems: "center" }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo />

          {isDesktop && !isCollapse && (
            <CollapseButton
              onToggleCollapse={onToggleCollapse}
              collapseClick={collapseClick}
            />
          )}
        </Stack>

        <NavbarAccount isCollapse={isCollapse} />
      </Stack>
      {user?.role === "admin" ? (
        <NavSectionVertical
          navConfig={sidebarConfigAdmin}
          isCollapse={isCollapse}
        />
      ) : user?.role === "modaretor" ? (
        <NavSectionVertical
          navConfig={sidebarConfigModerator}
          isCollapse={isCollapse}
        />
      ) : user?.role === "doctor" ? (
        <NavSectionVertical
          navConfig={sidebarConfigDoctor}
          isCollapse={isCollapse}
        />
      ) : (
        <NavSectionVertical
          navConfig={sidebarConfigUser}
          isCollapse={isCollapse}
        />
      )}

      <Box sx={{ flexGrow: 1 }} />
      {!isCollapse && <Box p={2} />}
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse
            ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH
            : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: "absolute",
        }),
      }}
    >
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: NAVBAR.DASHBOARD_WIDTH,
              borderRightStyle: "dashed",
              bgcolor: "background.default",
              transition: (theme) =>
                theme.transitions.create("width", {
                  duration: theme.transitions.duration.standard,
                }),
              ...(isCollapse && {
                width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                ...cssStyles(theme).bgBlur(any),
                boxShadow: (theme: any) => theme.customShadows.z24,
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
