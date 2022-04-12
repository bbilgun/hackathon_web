import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import LoginModalWrapper from "./loginModal.style";
import "rc-tabs/assets/index.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Icon from "react-icons-kit";
import { plusCircle } from "react-icons-kit/fa/plusCircle";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormComponent } from "../HackathonTeam";

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

const schoolValidation = (schoolName, value) => {
  switch (schoolName) {
    case "ШУТИС":
      // B180930008
      return /^[Bb]{1}[1-2]{1}[0-9]{8}$/.test(value);
    case "СЭЗИС":
      // b20fc1106
      return /^[Bb]{1}[1-2]{1}[0-9]{1}[Ff]{1}[Cc]{1}[0-9]{4}$/.test(value);
    case "МУИС":
      // SE19D011
      return /^[Ss]{1}[Ee]{1}[1-2]{1}[0-9]{1}[Dd]{1}[0-9]{3}$/.test(value);
    case "ХУИС":
      // E.PT20D141
      return /^[Ee]{1}[.]{1}[Pp]{1}[Tt]{1}[0-9]{2}[Dd]{1}[0-9]{3}$/.test(value);
    case "ИЗОИС":
      // ET21B178
      return /^[Ee]{1}[Tt]{1}[1-2]{1}[0-9]{1}[Bb]{1}[0-9]{3}$/.test(value);
    case "Этүгэн их сургууль":
      // MMS19D123
      return /^[Mm]{2}[Ss]{1}[1-2]{1}[0-9]{1}[Dd]{1}[0-9]{3}$/.test(value);
    case "Мандах их сургууль":
      // M.AB16D
      return /^[Mm]{2}[.]{1}[Aa]{1}[Bb]{1}[0-9]{2}[Dd]{1}$/.test(value);
    case "МҮИС":
      // d12345678
      return /^[Dd]{1}[0-9]{8}$/.test(value);
    case "Шинэ Монгол ТДС":
      //A.AR10D725
      return /^[Aa]{1}[.]{1}[Aa]{1}[Rr]{1}[0-9]{2}[Dd]{1}[0-9]{3}$/.test(value);
    case "Чингис-Соосэ":
      //SO21B026
      return /^[Aa]{1}[0-9]{3}[Bb]{1}[0-9]{3}$/.test(value);
    case "ХААИС":
      //3520008
      return /^[0-9]{7}$/.test(value);
    case "Letu University":
      //18121
      return /^[0-9]{5}$/.test(value);
    case "Улаанбаатар их сургууль":
      //ID21D001
      return /^[Ii]{1}[Dd]{1}[1-2]{1}[0-9]{1}[Dd]{1}[0-9]{3}$/.test(value);
    default:
      return value ? value.length > 2 : false;
  }
};

export const Space = styled.div`
  height: 10px;
  width: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HackathonUsersSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Оролцогчийн нэрээ оруулна уу!")
    .required("Оролцогчийн нэрээ оруулна уу!"),
  lastname: Yup.string()
    .min(2, "Оролцогчийн овог хоосон байна!")
    .required("Заавал оруулах"),
  studentCode: Yup.string()
    .required("Заавал оруулах")
    .test("student-code", "Оюутаны код буруу байна!", (value, data) => {
      const {
        parent: { schoolName },
      } = data;
      return schoolValidation(schoolName, value);
    }),
  email: Yup.string()
    .email("И-мэйл хаяг буруу байна!")
    .required("Заавал оруулах"),
  phoneNumber: Yup.number()
    .min(8, "Утасны дугаар аа зөв оруулан уу")
    .required("Утасны дугаар хоосон байна"),
  class: Yup.string()
    .min(8, "Суралцаж буй мэргэжил ээ бичнэ үү!!")
    .required("Заавал оруулах"),
  course: Yup.number().min(1, "Заавал оруулах").required("Заавал оруулах"),
  role: Yup.string().required("Заавал оруулах"),
});

const HackathonUserForm = ({
  row,
  col,
  btnStyle,
  contentWrapper,
  outlineBtnStyle,
  contentWrapper2,
  setValidTeam,
}) => {
  const [forms, setForms] = useState([]);
  const [rolesData, setRolesData] = useState([
    "Ахлагч",
    "Хөгжүүлэгч",
    "Дизайнер",
    "Шинжээч",
    "Гишүүн",
  ]);

  const initialValues = {
    firstname: "",
    lastname: "",
    studentCode: "",
    email: "",
    phoneNumber: "",
    class: "",
    course: 1,
    schoolName: schoolData[0],
    role: rolesData[0],
  };

  const createUserForm = () => {
    toast.warn("Багийн мэдээлэл олдсонгүй !!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const registerHackathonUser = async (data, id) => {
    const formData = data;
    const teamId = await localStorage.getItem("teamId");

    if (!teamId) {
      createUserForm();
      setValidTeam();
      return;
    }

    toast.promise(
      axios.post(
        `https://syscotech-api.herokuapp.com/api/v1/hackathonteams/${JSON.parse(
          teamId
        )}/users`,
        data,
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
          },
        }
      ),
      {
        pending: `Оролцогч ${id} бүртгэж байна... `,
        success: {
          render(data) {
            const index = rolesData.indexOf(formData.role);
            rolesData.splice(index, 1);
            setRolesData([...rolesData]);
            forms.push(formData);
            setForms([...forms]);
            return `Оролцогч ${id} амжилттай бүртгэгдлээ.`;
          },
        },
        error: {
          render(data) {
            return `Оролцогч ${id} бүртгэх үед алдаа гарлаа. `;
          },
        },
      }
    );
  };

  const handleRemove = (values, id) => {
    const confirmed = window.confirm(`Багийн гишүүн #${id} - ийг нэмэх ?`);

    if (confirmed) {
      if (values.role === "") {
        values.role = "Хөгжүүлэгч";
        registerHackathonUser(values, id);
        return;
      }

      registerHackathonUser(values, id);
    }
  };

  const SignupButtonGroup = () => (
    <Fragment>
      <Button
        type="submit"
        icon={<Icon className="close" icon={plusCircle} />}
        className="default"
        iconPosition={"left"}
        title="Багийн гишүүн нэмэх"
        {...btnStyle}
      />
    </Fragment>
  );

  const UserForm = ({ id, validTeam = false }) => (
    <Formik
      initialValues={initialValues}
      validationSchema={HackathonUsersSchema}
      onSubmit={(values) => handleRemove(values, id)}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <HeadingContainer>
            <Heading content={`Багийн гишүүн #${id}`} />
          </HeadingContainer>
          <Box className="row" {...row}>
            <Box className="col" {...col}>
              <Box {...contentWrapper2}>
                <Space />
                <FormComponent
                  name="firstname"
                  value={values.firstname}
                  label="Оролцогчийн нэр: "
                  onChange={handleChange}
                  error={errors.firstname && touched.firstname}
                  errorMsg={errors.firstname}
                  disabled={validTeam}
                />
                <Space />
                <FormComponent
                  name="lastname"
                  value={values.lastname}
                  label="Оролцогчийн овог: "
                  onChange={handleChange}
                  error={errors.lastname && touched.lastname}
                  errorMsg={errors.lastname}
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
                <FormComponent
                  name="studentCode"
                  value={values.studentCode}
                  label="Оюутны код: "
                  onChange={handleChange}
                  error={errors.studentCode && touched.studentCode}
                  errorMsg={errors.studentCode}
                  disabled={validTeam}
                />
                <Space />
                <FormComponent
                  name="course"
                  value={values.course}
                  label="Курс: "
                  onChange={handleChange}
                  error={errors.course && touched.course}
                  errorMsg={errors.course}
                  disabled={validTeam}
                  type="number"
                />
                <Space />
                <Space />
              </Box>
            </Box>
            <Box className="col" {...col}>
              <Box {...contentWrapper2}>
                <Space />
                <FormComponent
                  name="class"
                  value={values.class}
                  label="Ямар мэргэжлээр суралцдаг вэ:"
                  onChange={handleChange}
                  error={errors.class && touched.class}
                  errorMsg={errors.class}
                  disabled={validTeam}
                />
                <Space />
                <FormComponent
                  name="email"
                  value={values.email}
                  label="И-мэйл хаяг: "
                  onChange={handleChange}
                  error={errors.email && touched.email}
                  errorMsg={errors.email}
                  disabled={validTeam}
                />
                <Space />
                <FormComponent
                  type="number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  label="Утасны дугаар: "
                  onChange={handleChange}
                  error={errors.phoneNumber && touched.phoneNumber}
                  errorMsg={errors.phoneNumber}
                  disabled={validTeam}
                />
                <Space />
                <FormComponent
                  label="Үүрэг:"
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  error={errors.role && touched.role}
                  errorMsg={errors.role}
                  contentType="select"
                  disabled={validTeam}
                  options={rolesData}
                />
                <Space />
              </Box>
            </Box>
            <Space />
            <Space />
            {!validTeam && <SignupButtonGroup />}
          </Box>
        </form>
      )}
    </Formik>
  );

  const SuccessUsers = ({ id, value, validTeam = true }) => (
    <>
      <HeadingContainer>
        <Heading content={`Багийн гишүүн #${id}`} />
      </HeadingContainer>
      <Box className="row" {...row}>
        <Box className="col" {...col}>
          <Box {...contentWrapper2}>
            <Space />
            <FormComponent
              name="firstname"
              value={value.firstname}
              label="Оролцогчийн нэр: "
              disabled={validTeam}
            />
            <Space />
            <FormComponent
              name="lastname"
              value={value.lastname}
              label="Оролцогчийн овог: "
              disabled={validTeam}
            />
            <Space />
            <FormComponent
              name="studentCode"
              value={value.studentCode}
              label="Оюутны код: "
              disabled={validTeam}
            />
            <Space />
            <FormComponent
              name="email"
              value={value.email}
              label="И-мэйл хаяг: "
              disabled={validTeam}
            />
            <Space />
            <FormComponent
              name="phoneNumber"
              value={value.phoneNumber}
              label="Утасны дугаар: "
              disabled={validTeam}
            />
            <Space />
          </Box>
        </Box>
        <Box className="col" {...col}>
          <Box {...contentWrapper2}>
            <Space />
            <FormComponent
              name="class"
              value={value.class}
              label="Ямар мэргэжлээр суралцдаг вэ:"
              disabled={validTeam}
            />
            <Space />
            <FormComponent
              name="course"
              value={value.course}
              label="Курс: "
              disabled={validTeam}
            />
            <Space />
            <FormComponent
              label="Үүрэг:"
              name="role"
              value={value.role}
              disabled={validTeam}
            />
            <Space />
          </Box>
        </Box>
        <Space />
        <Space />
      </Box>
    </>
  );

  return (
    <LoginModalWrapper>
      <Box {...contentWrapper}>
        {forms.map((form, index) => {
          return (
            <>
              <SuccessUsers value={form} id={index + 1} />
              <Space />
              <Space />
            </>
          );
        })}
        {forms.length < 5 && <UserForm id={forms.length + 1} />}
        <Space />
        <Space />
        {/* <SignupButtonGroup /> */}
        {/* <LoginButtonGroup /> */}
      </Box>
    </LoginModalWrapper>
  );
};

// LoginModal style props
HackathonUserForm.propTypes = {
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
HackathonUserForm.defaultProps = {
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

  contentWrapper2: {
    pr: "32px",
  },
  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },

  iconStyle: {
    borderRadius: "50%",
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

export default HackathonUserForm;
