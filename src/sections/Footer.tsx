import {
	FacebookIcon,
	FooterChatBotIcon,
	InstagramIcon,
	PinterestIcon,
	TiktokIcon,
} from "../Icons";

export default function Footer() {
	return (
		<footer className="bg-gray-800 mt-[5.5rem]">
			<section className="mx-auto max-w-[76.5rem] pt-[52px] pb-[2rem] text-white flex-col px-6">
				<div className="flex gap-[104px] max-xl:flex-col">
					<div className="w-full max-w-[496px]">
						<h3 className="text-[20px] font-bold mb-6">
							Join our club, get 15% off for your Birthday
						</h3>
						<form action="">
							<input
								type="email"
								name="email"
								placeholder="Enter your Email Address"
								className="placeholder:text-[12px] leading-[1.8] border border-white w-full py-[0.5rem] pl-4 pr-[36px] mb-4 "
							/>
							<label htmlFor="checkbox" className="flex gap-[0.5rem]">
								<input type="checkbox" name="checkbox" id="" />
								<p className="text-[12px] font-semibold tracking-[0.8px]">
									By Submittng your email, you agree to receive advertising emails from Modimal.
								</p>
							</label>
						</form>
						<div className="flex mt-[104px] gap-4">
							<InstagramIcon />
							<FacebookIcon />
							<PinterestIcon />
							<TiktokIcon />
						</div>
					</div>
					<div className="grid grid-cols-3 gap-10 max-md:grid-cols-2">
						{footerLinks.map(({ id, title, links }: FooterLinkSection) => (
							<FooterLinks key={id} id={id} title={title} links={links} />
						))}
					</div>
				</div>

				<p className="mt-[29px]">2023 modimal. All Rights Reserved.</p>
				<FooterChatBotIcon className="fixed bottom-[56px] right-[calc((100vw-76.5rem)/2)] max-xl:right-[1.5rem]" />
			</section>
		</footer>
	);
}

type FooterLinkSection = {
	id: number;
	title: string;
	links: string[];
};

const footerLinks: FooterLinkSection[] = [
	{
		id: 1,
		title: "About Modimal",
		links: [
			"Collection",
			"Sustainability",
			"Privacy Policy",
			"Support System",
			"Terms & Condition",
			"Copyright Notice",
		],
	},
	{
		id: 2,
		title: "Help & Support",
		links: ["Orders & Shipping", "Returns & Refunds", "FAQs", "Contact Us"],
	},
	{
		id: 3,
		title: "Join Up",
		links: ["Modimal Club", "Careers", "Visit Us"],
	},
];

const FooterLinks = ({ id, title, links }: FooterLinkSection) => {
	return (
		<div className="flex flex-col gap-6">
			<h3 className="text-[20px] font-bold">{title}</h3>
			<div className="flex flex-col gap-[8px]">
				{links.map((link) => (
					<p key={link} className="text-[18px] leading-[1.8]">
						{link}
					</p>
				))}
			</div>
		</div>
	);
};
