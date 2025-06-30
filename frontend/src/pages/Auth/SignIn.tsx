import { useState } from "react";
import {
	AppleIcon,
	ColouredFacebookIcon,
	GoogleIcon,
	VisibilityOffIcon,
	VisibilityOnIcon,
} from "../../Icons";
import Image from "../../assets/SignUp/SignUp.png";
import { Link } from "react-router";

export default function SignIn() {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const handleShowPassword = () => {
		setIsShowPassword((prev) => !prev);
	};
	return (
		<section className="w-full max-w-[76.5rem] mx-auto flex flex-col gap-6 lg:gap-[128px] pt-8 lg:flex-row items-center ">
			<aside className="w-full lg:max-w-[600px] lg:h-full h-[218px] sm-[250px] md:h-[500px]">
				<img src={Image} alt="" className="w-full h-full object-cover object-center" />
			</aside>

			<aside className="flex flex-col justify-center items-center max-w-[424px] w-full px-4">
				<h1 className="font-semibold leading-[1.4] mb-8  md:text-[2rem]">Log in</h1>
				<form action="" className=" w-full ">
					<legend className="flex flex-col gap-[8px]">
						<input
							id="email"
							type="email"
							placeholder="Email"
							className="border border-[#606060] h-10 w-full px-4"
						/>
						<fieldset className="relative">
							<input
								id="password"
								type={isShowPassword ? "text" : "password"}
								placeholder="Password"
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
						</fieldset>
						<p className="text-primary mb-6">Forget Your Password?</p>
					</legend>
					<input
						type="submit"
						value="Log In"
						className="w-full bg-primary h-10 text-white mt-4 mb-8"
					/>
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
