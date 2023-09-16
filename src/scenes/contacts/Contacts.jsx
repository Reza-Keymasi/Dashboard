import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../mui/theme";
import { mockDataContacts } from "../../data/data";

import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme(true);
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "شناسه کاربر", flex: 0.5 },
    { field: "registrarId", headerName: "شناسه ثبت " },
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
    { field: "address", headerName: "آدرس ", flex: 1 },
    { field: "city", headerName: "شهر ", flex: 1 },
    { field: "phone", headerName: "شماره تماس", flex: 1 },
  ];
  const localTranslatedText = {
    toolbarColumns: "ستون ها",
    columnsPanelTextFieldLabel: "جست و جوی ستون",
    columnsPanelTextFieldPlaceholder: "عنوان ستون",
    toolbarDensity: "اندازه",
    toolbarDensityLabel: "اندازه",
    toolbarDensityCompact: "کوچک",
    toolbarDensityStandard: "متوسط",
    toolbarDensityComfortable: "بزرگ",
    toolbarExport: "تبدیل",
    toolbarExportCSV: "دانلود فایل CSV",
    toolbarExportPrint: "چاپ",
    toolbarFilters: "فیلترها",
    filterPanelColumns: "ستون ها",
    filterOperatorContains: "شامل",
    filterPanelOperator: "عملگر",
    filterOperatorEquals: "برابر",
    filterOperatorStartsWith: "شروع شده با",
    filterOperatorEndsWith: "تمام شده با",
    filterOperatorIsEmpty: "خالی است",
    filterOperatorIsNotEmpty: "خالی نیست",
    filterOperatorIsAnyOf: "هرکدام از",
    filterPanelInputLabel: "مقدار",
    filterPanelInputPlaceholder: "مقدار فیلتر",
    toolbarFiltersTooltipShow: "نمایش فیلترها",
    toolbarFiltersTooltipHide: "پنهان کردن فیلترها",

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
      <Header title="مخاطبان" subtitle="لیست مخاطبان" />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          localeText={localTranslatedText}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
