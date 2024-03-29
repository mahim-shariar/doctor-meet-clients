import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------
type Props = {
  children: any;
  title: any;
  meta?: any;
  sx?: {};
};

const Page = forwardRef(
  ({ children, title = "", meta, ...other }: Props, ref) => (
    <>
      <Helmet>
        <title>{`${title} | Doctor Meet`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
