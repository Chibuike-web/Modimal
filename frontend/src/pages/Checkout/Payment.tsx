import { Link } from "react-router";
import { AmexLogo, HelpIcon, MasterCardLogo, PayPalLogo, VisaLogo } from "../../Icons";
import { useMediaQuery } from "../../Hooks";

export default function Payment() {
	const isMobile = useMediaQuery("(max-width: 950px)");
	return <>{isMobile ? <MobilePayment /> : <DesktopPayment />}</>;
}

const DesktopPayment = () => {
	return (
		<div className=" w-full">
			<div className="flex gap-[393px] w-full">
				<span className="font-bold">Billing Address</span>
				<span className="font-bold">Payment</span>
			</div>
			<span className="block w-full h-[1px] bg-gray-200 my-4" />
			<div className="flex gap-[128px]">
				<ContactForm />

				<PaymentForm />
			</div>
		</div>
	);
};

const MobilePayment = () => {
	return (
		<div className="flex flex-col w-full">
			<div>
				<span className="block font-bold mb-4">Billing Address</span>
				<ContactForm />
			</div>
			<div>
				<span className="block mt-6 font-bold">Payment</span>
				<span className="block w-full h-[1px] bg-gray-200 my-4" />
				<PaymentForm />
			</div>
		</div>
	);
};

const ContactForm = () => {
	return (
		<form className="w-full max-w-[392px] max-[950px]:max-w-full ">
			<legend className="flex flex-col gap-6">
				<label className="flex gap-2 items-center">
					<input type="radio" name="address" />
					<span>Default (same as Billing Address)</span>
				</label>
				<label className="flex gap-2 items-center">
					<input type="radio" name="address" />
					<span>Add An Alternative Delivery Address</span>
				</label>
			</legend>

			{/* Contact */}
			<input
				type="text"
				placeholder="Name"
				className="mt-8 block w-full border border-gray-600 px-3 py-2 focus:outline-none placeholder:text-[12px]"
			/>
			<input
				type="email"
				placeholder="Email"
				className="mt-2 block w-full border border-gray-600 px-3 py-2 focus:outline-none placeholder:text-[12px]"
			/>
			<input
				type="text"
				placeholder="Country"
				className="mt-2 block w-full border border-gray-600 px-3 py-2 focus:outline-none placeholder:text-[12px]"
			/>
			<input
				type="text"
				placeholder="Address Line 1"
				className="mt-2 block w-full border border-gray-600 px-3 py-2 focus:outline-none placeholder:text-[12px]"
			/>
			<input
				type="text"
				placeholder="Address Line 2"
				className="mt-2 block w-full border border-gray-600 px-3 py-2 focus:outline-none placeholder:text-[12px]"
			/>
			<input
				type="text"
				placeholder="City/Suburb"
				className="mt-2 block w-full border border-gray-600 px-3 py-2 focus:outline-none placeholder:text-[12px]"
			/>
			<input
				type="text"
				placeholder="Zip/Postcode"
				className="mt-2 block w-full border border-gray-600 px-3 py-2 focus:outline-none placeholder:text-[12px]"
			/>
			<input
				type="number"
				placeholder="Phone"
				className="mt-2 block w-full border border-gray-600 px-3 py-2 focus:outline-none placeholder:text-[12px]"
			/>
		</form>
	);
};

const PaymentForm = () => {
	return (
		<div className="flex flex-col">
			<span>Please Choose Your Payment Method</span>
			<div className="flex gap-2 items-center mt-6">
				<span className="w-25 h-10 flex items-center justify-center">
					<AmexLogo />
				</span>
				<span className="w-25 h-10 flex items-center justify-center">
					<VisaLogo />
				</span>
				<span className="w-25 h-10 flex items-center justify-center">
					<MasterCardLogo />
				</span>
				<span className="w-25 h-10 flex items-center justify-center">
					<PayPalLogo />
				</span>
			</div>

			<fieldset className="flex gap-8 items-center mt-8">
				<label htmlFor="cardNumber" className="text-nowrap">
					Card Number*
				</label>
				<input
					type="text"
					id="cardNumber"
					className="w-full border border-gray-600 px-3 py-2 focus:outline-none"
				/>
			</fieldset>
			<fieldset className="flex gap-12.5 items-center mt-6">
				<label htmlFor="monthYear" className="text-nowrap">
					Expiry Date*
				</label>
				<div className="flex gap-6 items-center">
					<input
						type="text"
						id="monthYear"
						className="w-full border border-gray-600 px-3 py-2 focus:outline-none"
						placeholder="Month"
					/>
					<input
						type="text"
						className="w-full border border-gray-600 px-3 py-2 focus:outline-none"
						placeholder="Year"
					/>
				</div>
			</fieldset>
			<fieldset className="flex gap-[33px] items-center mt-6 max-md:items-start">
				<label htmlFor="cardNumber" className="text-nowrap">
					Security Code*
				</label>
				<div className="flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-4">
					<input
						type="text"
						id="cardNumber"
						className="w-full border border-gray-600 px-3 py-2 focus:outline-none"
					/>
					<div className="flex text-nowrap items-center gap-2">
						<HelpIcon />
						<span className="text-primary underline">What is this?</span>
					</div>
				</div>
			</fieldset>
			<Link to="/checkout/shipping" className="w-full mt-16">
				<button
					type="button"
					className="w-full text-[14px] h-[40px] bg-primary flex items-center justify-center text-white"
				>
					Pay and Place Order
				</button>
			</Link>
			<p className="capitalize text-[12px] my-4 leading-[1.8]">
				by clicking on ‘pay and place order’,you agree (i) to make your purchease from global -e as
				marchant of record for this transaction, subject to global-e’s{" "}
				<span className="text-primary underline">term of sale</span>;(ii) that your information will
				be handled by global-e in accordance with the global-e{" "}
				<span className="text-primary underline">privacy policy</span>; and (iii) that global-e will
				share your information (excluding the payment details)with modimal.
			</p>
		</div>
	);
};
