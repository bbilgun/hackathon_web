import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import LoginModalWrapper from "./loginModal.style";
import "rc-tabs/assets/index.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Alert from "common/components/Alert";
import { db } from "common/plugins/firebase";
import { collection, getDocs } from "firebase/firestore";

const HackathonTeamSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Багийн нэрээ оруулна уу!")
    .required("Багийн нэрээ оруулна уу!"),
  email: Yup.string()
    .email("И-мэйл хаяг буруу байна!")
    .required("Заавал оруулах"),
  phoneNumber: Yup.number()
    .min(8, "Утасны дугаар аа зөв оруулан уу")
    .required("Утасны дугаар хоосон байна"),
  subSchoolName: Yup.string().test(
    "sub-school",
    "Суралцаж буй сургуулийн нэрийг бичнэ үү!",
    (value, data) => {
      const {
        parent: { schoolName },
      } = data;

      if (schoolName === "Бусад") {
        if (value && value.length > 1) {
          return true;
        }
        return false;
      }
      return true;
    }
  ),
});

export const Space = styled.div`
  height: 10px;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: block;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  -webkit-transition: 0.2s ease all;
  transition: 0.2s ease all;
`;

export const FormInput = styled.input`
  font-size: 16px;
  padding: 11px;
  display: block;
  width: 100%;
  color: #484848;
  box-shadow: none;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.error ? "#ff4362" : "#ebebeb")};
  transition: border-color 0.2s ease;
  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "#ff4362" : "#028489")};
  }
`;

export const FormError = styled.p`
  color: #e55353;
  margin-top: 5px;
`;

export const Select = styled.select`
  font-size: 16px;
  padding: 11px;
  display: block;
  width: 100%;
  color: #484848;
  box-shadow: none;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.error ? "#ff4362" : "#ebebeb")};
  transition: border-color 0.2s ease;
  padding-right: 20px;
  background-color: #fff;
`;

export const Option = styled.option`
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

export const FormComponent = ({
  value,
  onChange,
  name,
  label,
  error,
  errorMsg,
  type = "text",
  contentType = "input",
  disabled = false,
  options = [],
}) => {
  return (
    <div>
      <FormLabel>{label}</FormLabel>
      {contentType === "input" ? (
        <FormInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          error={error}
          disabled={disabled}
        />
      ) : options.length > 0 ? (
        <Select
          name={name}
          value={value}
          defaultValue={options[0]}
          onChange={onChange}
          error={error}
          disabled={disabled}
        >
          {options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      ) : (
        <Select
          name={name}
          value={value}
          defaultValue="ШУТИС"
          onChange={onChange}
          error={error}
          disabled={disabled}
        >
          <Option value="ШУТИС">ШУТИС</Option>
          <Option value="МУТС">МУТС</Option>
        </Select>
      )}
      {error && <FormError>{errorMsg}</FormError>}
    </div>
  );
};

const schoolData = [
  "ШУТИС",
  "СЭЗИС",
  "МУИС",
  "ХУИС",
  "МУБИС",
  "ИЗОИС",
  "Этүгэн их сургууль",
  "Мандах их сургууль",
  "Улаанбаатар их сургууль",
  "МҮИС",
  "Шинэ Монгол ТДС",
  "Чингис-Соосэ",
  "ХААИС",
  "Letu University",
  "MIU",
  "Ider University",
  "Бусад",
];

const HackathonTeam = ({
  row,
  col,
  btnStyle,
  contentWrapper,
  validTeam,
  setValidTeam,
  registerSuccess,
}) => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    schoolName: schoolData[0],
    subSchoolName: "",
  };

  const SignupButtonGroup = () => (
    <Fragment>
      <Button
        type="submit"
        className="primary"
        title="Багийн гишүүн нэмэх"
        {...btnStyle}
        style={{ borderRadius: 5 }}
      />
    </Fragment>
  );

  const checkTeamName = (data) => {
    const formData = data;
    toast.promise(
      new Promise((res, rej) => {
        try {
          getDocs(collection(db, "teams")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              data = doc.data();
              if (data.name == formData.name) {
                rej();
              }
            });
            res();
          });
        } catch (e) {
          console.error("Error adding document: ", e);
          rej();
        }
      }),
      {
        pending: "Багийн мэдээллийг шалгаж байна... ",
        success: {
          render(data) {
            localStorage.setItem("hackathonTeam", JSON.stringify(formData));
            setValidTeam(true);
            return "Тэмцээнд бүртгүүлэх боломжтой.";
          },
        },
        error: {
          render(data) {
            return `${formData.name} нэртэй баг бүртгэлтэй байна!!!`;
          },
        },
      }
    );
  };

  const registerHackathonTeam = async (data) => {
    if (data.schoolName === "Бусад") {
      data.schoolName = data.subSchoolName;
    }

    await checkTeamName(data);
  };

  return (
    <LoginModalWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={HackathonTeamSchema}
        onSubmit={(values) => registerHackathonTeam(values)}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box style={{ paddingBottom: 32 }} {...contentWrapper}>
              {!registerSuccess && (
                <Alert
                  style={{
                    backgroundColor: "#6C247E",
                    color: '#ffffff',
                    marginBottom: 30,
                  }}
                >
                  Нэг баг нь 3-5 хүний бүрэлдэхүүнтэй оролцох боломжтой бөгөөд
                  багийн гишүүний тоо хүрээгүй тохиолдолд тэмцээнд оролцох
                  боломжгүйг анхаарна уу!
                </Alert>
              )}
              <Heading content="Багийн мэдээлэл" />
              <Box className="row" {...row}>
                <Box className="col" {...col}>
                  <Box className="formComponent">
                    <Space />
                    <FormComponent
                      label="Багийн нэр:"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      error={errors.name && touched.name}
                      errorMsg={errors.name}
                      disabled={validTeam}
                    />
                    <Space />
                    <FormComponent
                      label="Сургуулийн нэр:"
                      name="schoolName"
                      value={values.schoolName}
                      onChange={handleChange}
                      error={errors.schoolName && touched.schoolName}
                      errorMsg={errors.schoolName}
                      contentType="select"
                      disabled={validTeam}
                      options={schoolData}
                    />
                    <Space />
                    {values.schoolName === "Бусад" && (
                      <>
                        <FormComponent
                          label="Суралцаж буй сургууль:"
                          name="subSchoolName"
                          value={values.subSchoolName}
                          onChange={handleChange}
                          error={errors.subSchoolName && touched.subSchoolName}
                          errorMsg={errors.subSchoolName}
                          disabled={validTeam}
                        />
                        <Space />
                      </>
                    )}
                  </Box>
                </Box>
                <Box className="col" {...col}>
                  <Box className="formComponent">
                    <Space />
                    <FormComponent
                      label="И-мэйл хаяг: "
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email && touched.email}
                      errorMsg={errors.email}
                      disabled={validTeam}
                    />
                    <Space />
                    <FormComponent
                      label="Утасны дугаар:"
                      name="phoneNumber"
                      type="number"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      error={errors.phoneNumber && touched.phoneNumber}
                      errorMsg={errors.phoneNumber}
                      disabled={validTeam}
                    />
                    <Space />
                  </Box>
                </Box>
              </Box>
              {!validTeam && (
                <>
                  <Space />
                  <Space />
                  <SignupButtonGroup />
                </>
              )}
            </Box>
          </form>
        )}
      </Formik>
    </LoginModalWrapper>
  );
};

// LoginModal style props
HackathonTeam.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

// LoginModal default style
HackathonTeam.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    height: "auto",
    ml: "15px",
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "20px", "2px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mb: "10px",
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px",
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["32px", "56px"],
    pl: ["17px", "32px", "38px", "40px", "56px"],
    pr: "32px",
    pb: ["32px", "56px"],
  },

  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84",
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "540px",
    maxWidth: "100%",
  },
};

export default HackathonTeam;
