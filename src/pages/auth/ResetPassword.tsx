// @mui
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
// layouts
import LogoOnlyLayout from "../../layouts/LogoOnlyLayout";
// routes
// components
import Page from "../../components/Page";
// sections
// import { ResetPasswordForm } from '../../sections/auth/reset-password';
// assets

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }: any) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ResetPassword() {
  // const [email, setEmail] = useState('');
  // const [sent, setSent] = useState(false);

  return (
    <Page title="Reset Password" sx={{ height: 1 }}>
      <RootStyle>
        <LogoOnlyLayout />

        <Container>
          {/* <Box sx={{ maxWidth: 480, mx: 'auto' }}>
            {!sent ? (
              <>
                <Typography variant="h3" paragraph>
                  Forgot your password?
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                  Please enter the email address associated with your account and We will email you a link to reset your
                  password.
                </Typography>

                {/* <ResetPasswordForm onSent={() => setSent(true)} onGetEmail={(value) => setEmail(value)} /> *

                <Button fullWidth size="large" component={RouterLink} to={PATH_AUTH.login} sx={{ mt: 1 }}>
                  Back
                </Button>
              </>
            ) : (
              <Box sx={{ textAlign: 'center' }}>
               

                <Typography variant="h3" gutterBottom>
                  Request sent successfully
                </Typography>
                <Typography>
                  We have sent a confirmation email to &nbsp;
                  <strong>{email}</strong>
                  <br />
                  Please check your email.
                </Typography>

                <Button size="large" variant="contained" component={RouterLink} to={PATH_AUTH.login} sx={{ mt: 5 }}>
                  Back
                </Button>
              </Box>
            )}
          </Box> */}
          Some examples
        </Container>
      </RootStyle>
    </Page>
  );
}
