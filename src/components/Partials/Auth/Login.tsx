"use client";

import React from "react";
import { Controller } from "react-hook-form";
import styles from "@/styles/Auth.module.css";
import { Input } from "@/components/FormCompenent/input";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
const avenirNext = localFont({ src: "../../../fonts/AvenirNextCyr-Bold.ttf" });

// import ROUTES from "@/utilities/routes";

interface ILoginPage {
  handleSubmit: any;
  onSubmit: any;
  control: any;
  errors: any;
  formData: any;
  setFormData: any;
}

const Login: React.FC<ILoginPage> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  formData,
  setFormData,
}) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {/* <div className={styles.left_section}> */}
      <div className={styles.sign_up_section_image_wrapper}>
        <Image
          src={"/auth/logo.svg"}
          width={196.76}
          height={46}
          alt="Logo"
          className={styles.logo}
        ></Image>
        <Image
          className={styles.banner}
          src={"/auth/login-banner.png"}
          width={680}
          height={367.57}
          alt="Logo"
        ></Image>
      </div>

      <div className={styles.form_wrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {/* TODO: Apply correct header and subheader styles */}

          <div className={styles.top}>
            <h1 className={`${avenirNext.className} ${styles.header}`}>
              Welcome!
            </h1>
            <span className={styles.subheader}>Enter details to login.</span>
          </div>

          <div className={styles.inputs}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => {
                return (
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    error={errors.email?.message as string}
                    field={field}
                  ></Input>
                );
              }}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Password is required" }}
              render={({ field }) => {
                return (
                  <Input
                    id="password"
                    placeholder="Password"
                    error={errors.password?.message as string}
                    field={{
                      ...field,
                      onChange: (e: any) => {
                        field.onChange(e);

                        setFormData({
                          ...formData,
                          password: e.target.value,
                        });
                      },
                    }}
                    type="password"
                  ></Input>
                );
              }}
            />
          </div>

          <span className={styles.text}>
            <Link
              className={styles.forgot_password_cta}
              href="#"
              data-cy="login-link"
            >
              Forgot Password
            </Link>
          </span>

          <button
            onClick={() => router.push("/dashboard")}
            className={styles.button_primary}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
