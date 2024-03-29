import PropTypes from "prop-types";
// icons
import { Icon } from "@iconify/react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

// Iconify.propTypes = {
//   icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
//   sx: PropTypes.object,
// };

export default function Iconify({
  icon,
  width,
  height,
  sx,
  ...other
}: {
  icon?: any;
  width?: number;
  height?: number;
  sx?: any;
}) {
  return (
    <Box
      component={Icon}
      height={height}
      width={width}
      icon={icon}
      sx={{ ...sx }}
      {...other}
    />
  );
}
