// import { useForm } from "../../Hooks";
import { useForm } from "react-hook-form";
import {
	AppleIcon,
	ColouredFacebookIcon,
	GoogleIcon,
	VisibilityOffIcon,
	VisibilityOnIcon,
} from "../../Icons";
import Image from "../../assets/SignUp/SignUp.png";
import { useState } from "react";
import { Link } from "react-router";

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export default function SignUp() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>();

	const [isShowPassword, setIsShowPassword] = useState(false);
	const [registrationError, setRegistrationError] = useState("");
	const [registrationSuccess, setRegistrationSuccess] = useState("");
	const handleShowPassword = () => {
		setIsShowPassword((prev) => !prev);
	};
	const onSubmit = async (data: FormValues) => {
		try {
			const res = await fetch("http://localhost:2222/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			if (!res.ok) {
				const errorData = await res.json();
				setRegistrationError(errorData.message || "Issue creating account");
			} else {
				const result = await res.json();
				setRegistrationSuccess(result.message || "Successfull account creation");
				reset();
			}
		} catch (error) {
			console.error(error);
			setRegistrationError("Something went wrong.");
		}
	};
	return (
		<section className="w-full max-w-[76.5rem] mx-auto flex flex-col gap-6 lg:gap-[128px] pt-8 lg:flex-row items-center ">
			<aside className="w-full lg:max-w-[600px] lg:h-full h-[218px] sm-[250px] md:h-[500px]">
				<img src={Image} alt="" className="w-full h-full object-cover object-center" />
			</aside>

			<aside className="flex flex-col justify-center items-center max-w-[424px] w-full px-4">
				<h1 className="font-semibold leading-[1.4] mb-8  md:text-[2rem]">Create Account</h1>
				{registrationSuccess && (
					<p className="text-green-600 bg-green-100 border border-green-300 px-4 py-2 rounded-md mb-4">
						{registrationSuccess}
					</p>
				)}
				{registrationError && (
					<p className="text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md mb-4">
						{registrationError}
					</p>
				)}
				<form onSubmit={handleSubmit(onSubmit)} className=" w-full ">
					<legend className="flex flex-col gap-[8px]">
						<fieldset>
							<input
								id="firstName"
								type="text"
								{...register("firstName", { required: "first name is required" })}
								placeholder="First Name"
								className="border border-[#606060] h-10 w-full px-4"
							/>
							{errors.firstName && (
								<p className="text-red-500">{errors.firstName.message?.toString()}</p>
							)}
						</fieldset>
						<fieldset>
							<input
								id="lastName"
								type="text"
								{...register("lastName", { required: "last name is required" })}
								placeholder="Last Name"
								className="border border-[#606060] h-10 w-full px-4"
							/>
							{errors.lastName && (
								<p className="text-red-500">{errors.lastName.message?.toString()}</p>
							)}
						</fieldset>
						<fieldset>
							<input
								id="email"
								{...register("email", {
									required: "Email is required",
									minLength: {
										value: 6,
										message: "Email should be at least 6 characters",
									},
									pattern: {
										value: /^\S+@\S+$/i,
										message: "Invalid email address",
									},
								})}
								placeholder="Email"
								className="border border-[#606060] h-10 w-full px-4"
							/>
							{errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
						</fieldset>
						<fieldset className="relative">
							<input
								id="password"
								type={isShowPassword ? "text" : "password"}
								placeholder="Password"
								className="border border-[#606060] h-10 w-full px-4"
								{...register("password", {
									required: {
										value: true,
										message: "Password is required",
									},
									validate: {
										hasNumber: (v: string) => /\d/.test(v) || "Must include a number",
										hasUpper: (v: string) => /[A-Z]/.test(v) || "Must include an uppercase letter",
										hasLower: (v: string) => /[a-z]/.test(v) || "Must include a lower case letter",
										hasSpecialChar: (v: string) =>
											/[-!@#$%^&*(),.?":{}|_<>]/.test(v) || "Must include a special character",
									},
								})}
							/>
							{errors.password && (
								<p className="text-red-500">{errors.password.message?.toString()}</p>
							)}
							<button
								type="button"
								onClick={handleShowPassword}
								aria-label={isShowPassword ? "Hide password" : "Show password"}
								className="absolute right-4 top-1/2 -translate-y-1/2"
							>
								{isShowPassword ? <VisibilityOffIcon /> : <VisibilityOnIcon />}
							</button>
						</fieldset>
					</legend>
					<button
						type="submit"
						className="w-full bg-primary h-10 text-white mt-4"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Submitting..." : "Register Now"}
					</button>
				</form>
				<div className="flex items-center gap-4 mt-4 leading-[1.8] mb-6">
					<p>Already have an account?</p>
					<Link to="/signin">Log in</Link>
				</div>
				<span className="text-[12px] text-gray-950">Or</span>
				<div className=" flex items-center gap-4 my-6">
					<AppleIcon /> <GoogleIcon />
					<ColouredFacebookIcon />
				</div>
				<p className="text-[12px] text-gray-950 w-full leading-[1.8] text-center">
					By Clicking Register Now. You Agree To{" "}
					<span className="text-primary underline">Terms</span> &{" "}
					<span className="text-primary underline">Conditions</span> and
					<span> Privacy Policy.</span>
				</p>
			</aside>
		</section>
	);
}
