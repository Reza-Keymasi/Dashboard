import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../mui/theme";
import { DataTeam } from "../../data/data";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme(true);
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "شناسه کاربر" },
    {
      field: "name",
      headerName: "نام و نام خانوادگی",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "سن",
      type: "number",
      headerAlign: "right",
      align: "right",
    },
    { field: "email", headerName: "ایمیل", flex: 1 },
    { field: "phone", headerName: "شماره تماس", flex: 1 },
    {
      field: "access",
      headerName: "سطح دسترسی",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p={1}
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "ادمین"
                ? colors.greenAccent[600]
                : colors.blueAccent[600]
            }
            borderRadius={1}
          >
            {access === "ادمین" && <AdminPanelSettingsOutlinedIcon />}
            {access === "مدیریت" && <SecurityOutlinedIcon />}
            {access === "کاربر" && <LockOpenOutlinedIcon />}
            <Typography
              color={access === "ادمین" ? "blue" : "yellow"}
              sx={{ ml: 1 }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  const localTranslatedText = {
    columnMenuLabel: "منو",
    columnMenuShowColumns: "نمایش ستون ها",
    columnMenuManageColumns: "مدیریت ستون ها",
    columnMenuFilter: "فیلتر",
    columnMenuHideColumn: "پنهان کردن ستون ها",
    columnMenuUnsort: "عدم مرتب سازی",
    columnMenuSortAsc: "مرتب سازی از ابتدا به انتها",
    columnMenuSortDesc: "مرتب سازی از انتها به ابتدا",
    columnHeaderSortIconLabel: "مرتب سازی",
  };

  return (
    <Box m="20px">
      <Header title="اعضاء تیم شما" subtitle="مدیریت اعضاء تیم" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            color: colors.blueAccent[300],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            borderBottom: "none",
          },
        }}
      >
        <DataGrid
          rows={DataTeam}
          columns={columns}
          localeText={localTranslatedText}
        />
      </Box>
    </Box>
  );
};

export default Team;
