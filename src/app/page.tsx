"use client";
// import Loader from "@/components/loader";
import Login from "@/components/Partials/Auth/Login";
// import openNotification from "@/components/shared/Notification";
// import AuthRepository, { ILogin } from "@/repositories/AuthRepository";
import ROUTES from "@/utilities/routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    isTermsChecked: false,
    isAgreementChecked: false,
    isPasswordValid: false,
    password: undefined,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });

  // const onSubmit: SubmitHandler<ILogin> = async (data: ILogin) => {
  //   setLoading(true);
  //   const response = await AuthRepository.login(data);
  //   if (response.response?.status === 400) {
  //     setLoading(false);
  //     openNotification({
  //       type: "error",
  //       message: "Error with Log in",
  //     });
  //   }
  //   if (response.response?.status === 500) {
  //     setLoading(false);
  //     openNotification({
  //       type: "error",
  //       message: "Invalid credentials",
  //     });
  //   }

  //   if (response.status === 200) {
  //     localStorage.setItem("access_token", response?.data?.data?.access_token);
  //     console.log(response);
  //     setLoading(false);
  //     openNotification({
  //       type: "success",
  //       message: "Login Successful",
  //     });
  //     router.push(ROUTES.DASHBOARD.MAIN);
  //   }
  // };
  const onSubmit = () => {};
  // if (loading) return <Loader />;

  return (
    <Login
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
      formData={formData}
      setFormData={setFormData}
    />
  );
};

export default LoginPage;
