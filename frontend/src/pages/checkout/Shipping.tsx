import { Link } from "react-router";
import { LeftArrowIcon } from "../../Icons";

export default function Shipping() {
	return (
		<div className="w-full max-w-[624px] flex flex-col max-xl:max-w-[800px]">
			<div className="flex items-center w-full justify-between">
				<p className="text-lg leading-[1.8]">Contact</p>
				<span className="w-[124px] h-10 flex items-center justify-center text-sm text-primary">
					Change
				</span>
			</div>
			<span className="block w-full h-[1px] bg-gray-200 my-4" />
			<div className="flex items-center w-full justify-between">
				<p className="text-lg leading-[1.8]">Ship To</p>
				<span className="w-[124px] h-10 flex items-center justify-center text-sm text-primary">
					Change
				</span>
			</div>
			<h2 className="text-primary-800 font-bold mt-6">Delivery Options</h2>
			<span className="block w-full h-[1px] bg-gray-200 my-4" />
			<div className="flex items-center justify-between">
				<span className="font-bold leading-[1.4] text-gray-600">Express Courier (Air)</span>
				<span className="font-bold">Free</span>
			</div>
			<span className="text-sm font-semibold mt-2 mb-8">3 to 4 Business Days</span>
			<div className="flex items-start gap-12 max-md:flex-col max-md:gap-4">
				<span className="font-bold leading-[1.4] flex-shrink-0 text-gray-600">Expected Date:</span>
				<form action="" className="grid grid-cols-2 gap-x-3 gap-y-2 max-md:grid-cols-1">
					<label className="flex gap-2 items-center">
						<input type="radio" name="expected-date" className="w-4 h-4" />
						<span>Monday, August 14</span>
					</label>
					<label className="flex gap-2 items-center">
						<input type="radio" name="expected-date" className="w-4 h-4" />
						<span>Wednesday, August 16</span>
					</label>
					<label className="flex gap-2 items-center">
						<input type="radio" name="expected-date" className="w-4 h-4 flex-shrink-0" />
						<span>Tuesday, August 22</span>
					</label>
					<label className="flex gap-2 items-center">
						<input type="radio" name="expected-date" className="w-4 h-4 flex-shrink-0" />

						<span>Friday, August 25</span>
					</label>
				</form>
			</div>
			<span className="block w-full h-[1px] bg-gray-200 my-4" />
			<div className="flex items-start gap-12 max-xl:flex-col max-xl:gap-4">
				<div className="flex flex-col gap-2 ">
					<span className="font-bold text-gray-600">Guaranted By:</span>
					<span className="text-sm text-gray-800 text-nowrap font-semibold">
						UPS Next Day Air Saver
					</span>
				</div>
				<form action="" className="flex flex-col w-full gap-2">
					<fieldset className="flex w-full justify-between">
						<label className="flex gap-2 items-center">
							<input type="radio" name="guaranteed-date" className="w-4 h-4" />
							<span>Monday, August 11th By 8PM</span>
						</label>
						<span className="text-sm font-semibold">$24.00</span>
					</fieldset>
					<fieldset className="flex w-full justify-between">
						<label className="flex gap-2 items-center">
							<input type="radio" name="guaranteed-date" className="w-4 h-4" />
							<span>Monday, August 11th By Noon</span>
						</label>
						<span className="text-sm font-semibold">$24.00</span>
					</fieldset>
				</form>
			</div>
			<div className="flex items-center w-full justify-between mt-24 mb-16 gap-4 max-md:flex-col-reverse">
				<Link to="/checkout/info" className="flex">
					<LeftArrowIcon />
					<span>Return To Information</span>
				</Link>

				<Link to="/checkout/payment" className="w-full max-w-[184px] max-md:max-w-full">
					<button
						type="button"
						className="w-full text-[14px] h-[40px] bg-primary flex items-center justify-center text-white"
					>
						Continue To Payment
					</button>
				</Link>
			</div>
		</div>
	);
}
