import { useState } from "react";
import { useForm } from "react-hook-form";
import {
	AppleIcon,
	ColouredFacebookIcon,
	GoogleIcon,
	VisibilityOffIcon,
	VisibilityOnIcon,
} from "../../Icons";
import Image from "../../assets/SignUp/SignUp.png";
import { Link } from "react-router";

type LoginForm = {
	email: string;
	password: string;
};

export default function SignIn() {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [loginSuccess, setLoginSuccess] = useState("");
	const handleShowPassword = () => {
		setIsShowPassword((prev) => !prev);
	};

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<LoginForm>();

	async function onSubmit(data: LoginForm) {
		try {
			const res = await fetch("http://localhost:2222/signin", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			if (!res.ok) {
				const errorData = await res.json();
				if (errorData.error === "Email doesn't exist") {
					setError("email", { type: "server", message: errorData.error });
				} else if (errorData.error === "Incorrect password") {
					setError("password", { type: "server", message: errorData.error });
				} else {
					setError("root", { type: "server", message: "Something went wrong" });
				}
				return;
			}
			const result = await res.json();
			setLoginSuccess(result.message || "Successfull account creation");
			reset();
		} catch (error) {
			console.error(error);
			setError("root", { type: "server", message: "Network error" });
		}
	}
	return (
		<section className="w-full max-w-[76.5rem] mx-auto flex flex-col gap-6 lg:gap-[128px] pt-8 lg:flex-row items-center ">
			<aside className="w-full lg:max-w-[600px] lg:h-full h-[218px] sm-[250px] md:h-[500px]">
				<img src={Image} alt="" className="w-full h-full object-cover object-center" />
			</aside>

			<aside className="flex flex-col justify-center items-center max-w-[424px] w-full px-4">
				{loginSuccess && (
					<p className="text-green-600 bg-green-100 border border-green-300 px-4 py-2 rounded-md mb-4">
						{loginSuccess}
					</p>
				)}
				<h1 className="font-semibold leading-[1.4] mb-8 md:text-[2rem]">Log in</h1>
				<form onSubmit={handleSubmit(onSubmit)} className=" w-full ">
					<legend className="flex flex-col gap-[8px]">
						<fieldset>
							<input
								id="email"
								type="email"
								placeholder="Email"
								{...register("email", {
									required: "Email is required",
								})}
								className="border border-[#606060] h-10 w-full px-4"
							/>
							{errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
						</fieldset>
						<fieldset className="relative">
							<input
								id="password"
								type={isShowPassword ? "text" : "password"}
								placeholder="Password"
								{...register("password", {
									required: "Password is required",
								})}
								className="border border-[#606060] h-10 w-full px-4"
							/>

							<button
								type="button"
								onClick={handleShowPassword}
								aria-label={isShowPassword ? "Hide password" : "Show password"}
								className="absolute right-4 top-1/2 -translate-y-1/2"
							>
								{isShowPassword ? <VisibilityOffIcon /> : <VisibilityOnIcon />}
							</button>
							{errors.password && (
								<p className="text-red-500">{errors.password.message?.toString()}</p>
							)}
						</fieldset>
						<p className="text-primary mb-6">Forget Your Password?</p>
					</legend>
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full bg-primary h-10 text-white mt-4 mb-8"
					>
						{isSubmitting ? "Submitting..." : "Login"}
					</button>
				</form>

				<span className="text-[12px] text-gray-950">Or</span>
				<div className=" flex items-center gap-4 my-6">
					<AppleIcon /> <GoogleIcon />
					<ColouredFacebookIcon />
				</div>

				<p className="flex items-center gap-[4px] leading-[1.8] mb-6">
					New to modimal?
					<Link to="/signup" className="text-primary">
						Create An Account
					</Link>
				</p>
			</aside>
		</section>
	);
}
