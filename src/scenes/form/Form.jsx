import { Box, Button, ButtonBase, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import "./FormCSS.css";

const phoneRegExp =
  /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
// const phoneRegEx =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: "",
};

const userSchema = yup.object().shape({
  firstName: yup.string().required("لطفا نام خود را وارد کنید "),
  lastName: yup.string().required("لطفا نام خانوادگی خود را وارد کنید "),
  email: yup
    .string()
    .email("ایمیل نامعتبر است")
    .required("لطفا ایمیل خود را وارد کنید "),
  contact: yup
    .string()
    .matches(phoneRegExp, "شماره تماس نامعتبر است")
    .required("لطفا شماره تماس خود را وارد کنید "),
  address: yup.string().required("لطفا آدرس خود را وارد کنید "),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header title="کاربر جدید" subtitle="یک پروفایل کاربری جدید بسازید" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              justifyContent="center"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                className="textField-1"
                fullWidth
                variant="filled"
                type="text"
                label="نام"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                className="textField-1"
                fullWidth
                variant="filled"
                type="text"
                label="نام خانوادگی"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                className="textField-1"
                fullWidth
                variant="filled"
                type="email"
                label="ایمیل"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                className="textField-1"
                fullWidth
                variant="filled"
                type="number"
                label="شماره تماس"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                className="textField-1"
                fullWidth
                variant="filled"
                type="text"
                label="آدرس"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="success" variant="contained">
                تشکیل پروفایل کاربری
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
