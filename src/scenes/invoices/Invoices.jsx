import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../mui/theme";
import { mockDataInvoices } from "../../data/data";

import Header from "../../components/Header";

const Invoices = () => {
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
    { field: "email", headerName: "ایمیل", flex: 1 },
    {
      field: "cost",
      headerName: "هزینه",
      flex: 1,
      renderCall: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.cost}
        </Typography>
      ),
    },
    { field: "date", headerName: "تاریخ", flex: 1 },

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

    footerRowSelected: (count) =>
      count !== 1
        ? `${count.toLocaleString()} ردیف انتخاب شدند`
        : `${count.toLocaleString()} ردیف انتخاب شد`,
  };

  return (
    <Box m="20px">
      <Header title="صورت حساب" subtitle="لیست صورت حساب ها" />
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          localeText={localTranslatedText}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
