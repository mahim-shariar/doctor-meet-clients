import { Helmet } from "react-helmet-async";
import { forwardRef, ReactNode } from "react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------
type Props = {
  children: ReactNode;
  title: string;
  meta?: ReactNode;
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

export default Page;
