import { useForm } from "../Hooks";
import { AppleIcon, ColouredFacebookIcon, GoogleIcon } from "../Icons";
import Image from "../assets/SignUp/SIgnUp.png";

export default function SignUp() {
	const { firstName, lastName, email, password, handleChange } = useForm();
	return (
		<section className="w-full max-w-[76.5rem] mx-auto flex flex-col gap-6 lg:gap-[128px] pt-8 lg:flex-row items-center ">
			<aside className="w-full lg:max-w-[600px] lg:h-full h-[218px] sm-[250px] md:h-[500px]">
				<img src={Image} alt="" className="w-full h-full object-cover object-center" />
			</aside>

			<aside className="flex flex-col justify-center items-center max-w-[424px] w-full px-4">
				<h1 className="text-[2rem] font-semibold leading-[1.4] mb-8">Create Account</h1>
				<form action="" className=" w-full ">
					<legend className="flex flex-col gap-[8px]">
						<input
							id="firstName"
							type="text"
							placeholder="First Name"
							value={firstName}
							className="border border-[#606060] h-10 w-full px-4"
							onChange={(e) => handleChange(e)}
						/>
						<input
							id="lastName"
							type="text"
							placeholder="Last Name"
							value={lastName}
							className="border border-[#606060] h-10 w-full px-4"
							onChange={(e) => handleChange(e)}
						/>
						<input
							id="email"
							type="email"
							placeholder="Email"
							value={email}
							className="border border-[#606060] h-10 w-full px-4"
							onChange={(e) => handleChange(e)}
						/>
						<input
							id="password"
							type="password"
							placeholder="Password"
							value={password}
							className="border border-[#606060] h-10 w-full px-4"
							onChange={(e) => handleChange(e)}
						/>
					</legend>
					<input
						type="submit"
						value="Register Now"
						className="w-full bg-primary h-10 text-white mt-4"
					/>
				</form>
				<div className="flex items-center gap-4 mt-4 leading-[1.8] mb-6">
					<p>Already have an account?</p>
					<span>Log in</span>
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
