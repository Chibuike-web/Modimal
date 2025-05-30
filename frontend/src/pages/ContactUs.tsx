import { CallUsIcon, ChatIcon, EmailIcon } from "../Icons";

export default function ContactUs() {
	return (
		<main className="mx-auto w-full max-w-[1224px] max-xl:px-6">
			<div className="flex space-x-2 py-1 px-4 text-sm">
				<span className="text-primary">Home</span>
				<span>/</span>
				<span className="font-medium text-black">Contact Us</span>
			</div>

			<section className="mt-8">
				<h1 className="mb-4 text-[1.5rem] md:text-[2rem] font-semibold leading-[1.4]">
					Contact Us
				</h1>
				<div className="w-full bg-primary/15 p-4 mt-4 flex flex-col gap-4 leading-[1.8] text-sm text-gray-800">
					<p>
						We always love hearing from our customers! Please do not hesitate to contact us should
						you have any questions regarding our products and sizing recommendations or inquiries
						about your current order.
					</p>
					<p>
						Contact our Customer Care team through the contact form below, email us at
						hello@modimal.com or live chat with us via our chat widget on the bottom right hand
						corner of this page.
					</p>
					<p>We will aim to respond to you within 1-2 business days.</p>
				</div>
			</section>

			<section className="mt-10 space-y-6 justify-items-center content-center">
				<div className="max-w-[1016px] w-full flex flex-col">
					<div className="flex items-center gap-3">
						<EmailIcon />
						<h2 className="text-xl font-bold">Write Us</h2>
					</div>
					<h3 className="text-[20px] font-bold mt-8 mb-4">Your Information</h3>
					<form className="flex flex-col gap-6">
						<div className="space-y-4">
							<input
								type="text"
								placeholder="Full Name"
								className="w-full border-b border-gray-400 focus:border-primary focus:outline-none py-2 placeholder:text-gray-500"
							/>
							<input
								type="email"
								placeholder="Email"
								className="w-full border-b border-gray-400 focus:border-primary focus:outline-none py-2 placeholder:text-gray-500"
							/>
							<input
								type="text"
								placeholder="Subject"
								className="w-full border-b border-gray-400 focus:border-primary focus:outline-none py-2 placeholder:text-gray-500"
							/>
							<input
								type="tel"
								placeholder="Phone Number"
								className="w-full border-b border-gray-400 focus:border-primary focus:outline-none py-2 placeholder:text-gray-500"
							/>
							<textarea
								rows={4}
								placeholder="Message"
								className="w-full border-b border-gray-400 focus:border-primary focus:outline-none py-2 resize-none placeholder:text-gray-500"
							/>
						</div>

						<div className="flex items-start gap-2 text-sm text-gray-700">
							<input type="checkbox" className="mt-1" />
							<span>
								I have read and understood the{" "}
								<a href="/privacy-policy" className="underline text-primary">
									privacy policy
								</a>
								.
							</span>
						</div>

						<button
							type="submit"
							className="w-full max-w-full h-[40px] bg-primary text-white text-sm font-medium flex items-center justify-center md:self-end md:max-w-[288px]"
						>
							Send
						</button>
					</form>
				</div>
				<div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] w-full">
					<div className="bg-primary/15 p-4 flex flex-col items-center">
						<ChatIcon />
						<h5 className="font-bold my-[12px]">Chat With Us</h5>
						<p className="text-[12px] leading-[1.8] mb-[12px]">We are here and ready to chat</p>
						<button
							type="button"
							className="h-10 w-full border border-primary text-primary text-[14px]"
						>
							Start Chat
						</button>
					</div>
					<div className="bg-primary/15 p-4 flex flex-col items-center">
						<CallUsIcon />
						<h5 className="font-bold my-[12px]">Call Us</h5>
						<p className="text-[12px] leading-[1.8] mb-[12px]">We're Here to talk to you</p>
						<button
							type="button"
							className="h-10 w-full border border-primary text-primary text-[14px]"
						>
							+1(929)460-3208
						</button>
					</div>
					<div className="bg-primary/15 p-4 flex flex-col items-center">
						<EmailIcon />
						<h5 className="font-bold my-[12px]">Email Us</h5>
						<p className="text-[12px] leading-[1.8] mb-[12px]">
							You are welcome to send us an email
						</p>
						<button
							type="button"
							className="h-10 w-full border border-primary text-primary text-[14px]"
						>
							Send Email
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
