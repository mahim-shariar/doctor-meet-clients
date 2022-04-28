// components
import Iconify from "../../../components/Iconify";
import SvgIconStyle from "../../../components/SvgIconStyle";
import { PATH_DASHBOARD } from "../../../routes/paths";

// ----------------------------------------------------------------------

const getIcon = (name: any) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon("ic_user"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
};
const ICON_SIZE = {
  width: 22,
  height: 22,
};
const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      { title: "Home", path: "/dashboard/home", icon: ICONS.dashboard },
      // {
      //   title: "Doctors",
      //   path: "/dashboard/doctors",
      //   icon: <Iconify icon={"fa6-solid:user-doctor"} />,
      // },
      {
        title: "Pharmacy",
        path: "/dashboard/three",
        icon: <Iconify icon={"fluent:more-circle-20-filled"} {...ICON_SIZE} />,
      },
      {
        title: "Analytics",
        path: "/dashboard/analytics",
        icon: <Iconify icon={"fluent:more-circle-20-filled"} {...ICON_SIZE} />,
      },
      {
        title: "Banking",
        path: "/dashboard/banking",
        icon: <Iconify icon={"fluent:more-circle-20-filled"} {...ICON_SIZE} />,
      },
      {
        title: "Booking",
        path: "/dashboard/booking",
        icon: <Iconify icon={"fluent:more-circle-20-filled"} {...ICON_SIZE} />,
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    items: [
      {
        title: "user",
        path: "/dashboard/user",
        icon: ICONS.user,
        children: [
          {
            title: "Doctors",
            path: "/dashboard/user/doctors",
            icon: (
              <Iconify icon={"fluent:more-circle-20-filled"} {...ICON_SIZE} />
            ),
          },
          {
            title: "Favorite",
            path: "/dashboard/user/favorite-doctors",
            icon: ICONS.analytics,
          },
          {
            title: "Appointments",
            path: "/dashboard/user/my-appointments",
            icon: ICONS.analytics,
          },
          {
            title: "Get Appointments",
            path: "/dashboard/user/get-appointments",
            icon: ICONS.analytics,
          },
          {
            title: "Profile",
            path: "/dashboard/user/profile",
            icon: ICONS.analytics,
          },
          {
            title: "Cards",
            path: "/dashboard/user/cards",
            icon: ICONS.analytics,
          },
          {
            title: "List",
            path: "/dashboard/user/list",
            icon: ICONS.analytics,
          },
          {
            title: "Create",
            path: "/dashboard/user/new",
            icon: ICONS.analytics,
          },
          {
            title: "Edit",
            path: `/dashboard/{user}/edit`,
            icon: ICONS.analytics,
          },
          {
            title: "Account",
            path: "/dashboard/user/account",
            icon: ICONS.analytics,
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "admin",
        path: "/dashboard/admin",
        icon: ICONS.user,
        children: [
          {
            title: "Doctors",
            path: "/dashboard/admin/manage-doctors",
            icon: ICONS.analytics,
          },
          {
            title: "Donors",
            path: "/dashboard/admin/manage-donors",
            icon: ICONS.analytics,
          },
          {
            title: "Appointments",
            path: "/dashboard/admin/all-appointments",
            icon: ICONS.analytics,
          },
        ],
      },
    ],
  },
];

export default sidebarConfig;
