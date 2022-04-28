// routes
import { PATH_AUTH, PATH_PAGE } from "../../routes/paths";
// components
// components
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/",
  },
  {
    title: "Find Doctors",
    icon: <Iconify icon={"fa6-solid:user-doctor"} {...ICON_SIZE} />,
    path: "/doctors",
  },

  {
    title: "More Services",
    path: "/pages",
    icon: <Iconify icon={"fluent:more-circle-20-filled"} {...ICON_SIZE} />,
    children: [
      {
        items: [
          {
            title: "Covid Portal",
            icon: <Iconify icon={"fa6-solid:virus-covid"} {...ICON_SIZE} />,
            path: "covid-portal",
          },
          {
            title: "Blood Donors",
            icon: <Iconify icon={"fontisto:blood-drop"} {...ICON_SIZE} />,
            path: "find-donors",
          },
          {
            title: "Pharmacy",
            icon: <Iconify icon={"healthicons:medicines"} {...ICON_SIZE} />,
            path: "pharmacy",
          },
          {
            title: "Premium Membership",
            icon: (
              <Iconify
                icon={"fluent:premium-person-20-filled"}
                {...ICON_SIZE}
              />
            ),
            path: "premium-membership",
          },
        ],
      },
    ],
  },
  {
    title: "Virtual Meet",
    icon: <Iconify icon={"clarity:video-camera-solid"} {...ICON_SIZE} />,
    path: "/virtual-meet",
  },
  {
    title: "Contact Us",
    icon: <Iconify icon={"fluent:contact-card-20-filled"} {...ICON_SIZE} />,
    path: "/contact-us",
  },
  {
    title: "About us",
    icon: <Iconify icon={"medical-icon:i-information-us"} {...ICON_SIZE} />,
    path: "/about-us",
  },
];

export default menuConfig;
