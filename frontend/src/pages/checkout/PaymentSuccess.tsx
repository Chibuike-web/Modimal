import { CheckIcon } from "../../Icons";

export default function PaymentSuccess() {
	return (
		<section className="justify-items-center content-center min-h-[calc(100vh-126px)] px-6 md:px-0">
			<div className="flex flex-col items-center">
				<CheckIcon />
				<h1 className="mt-6 mb-8 text-center text-success text-[40px] font-bold">
					Payment Successful
				</h1>
			</div>
			<p className="text-[20px] text-center mb-6">
				Thank you for choosing Modimal, Your order will be generated based on your delivery request.{" "}
			</p>
			<p className="text-[20px] mb-10">the Receipt has been sent to your email </p>
			<p>Please Contact us for any query </p>
			<span className="block mt-4">+1(929)460-3208</span>
			<span className="block mt-4">OR</span>
			<span className="block mt-4">Hello @ modimal.com</span>
		</section>
	);
}
