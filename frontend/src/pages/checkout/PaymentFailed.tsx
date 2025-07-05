import { Link } from "react-router";
import { LeftArrowIcon, WarningIcon } from "../../Icons";

export default function PaymentFailed() {
	return (
		<section className="justify-items-center content-center min-h-[calc(100vh-126px)] px-6 md:px-0">
			<div className="flex flex-col items-center">
				<WarningIcon />
				<h1 className="mt-6 mb-8 text-center text-error text-[40px] font-bold">
					Sorry, Payment Failed
				</h1>
			</div>
			<p className="text-[20px] text-center mb-14">
				Unfortunately. your order Cannot Be Completed. <br /> Please ensure that the billing address
				you provided is the same one where your debit/credit card is registered. <br />
				Alternatively, please try a different payment method.
			</p>
			<Link to="/checkout/payment" className="block w-full md:max-w-[392px]">
				<button
					type="button"
					className="w-full text-[14px] h-[40px] bg-primary flex items-center justify-center text-white"
				>
					Pay Now
				</button>
			</Link>
			<Link to="/checkout/cart" className="flex mt-6 gap-2">
				<LeftArrowIcon />
				<span className="text-primary-600">Back to My Orders</span>
			</Link>
		</section>
	);
}
