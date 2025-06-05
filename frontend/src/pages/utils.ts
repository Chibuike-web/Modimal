import { v4 as uuidv4 } from "uuid";
import type { AccordionItemType, CardType, Principle } from "./types";
import Card1 from "../assets/Sustainability/First Image.png";
import Card2 from "../assets/Sustainability/Second Image.png";
import Card3 from "../assets/Sustainability/Third Image.png";
import Card4 from "../assets/Sustainability/Fourth Image.png";
import sustainppl1 from "../assets/Sustainability/Sustain ppl 1.png";
import sustainppl2 from "../assets/Sustainability/Sustain ppl 2.png";
import sustainppl3 from "../assets/Sustainability/Sustain ppl 3.png";
import sustainppl4 from "../assets/Sustainability/Sustain ppl 4.png";
import sustainppl5 from "../assets/Sustainability/Sustain ppl 5.png";
import sustainppl6 from "../assets/Sustainability/Sustain ppl 6.png";
import sustainppl7 from "../assets/Sustainability/Sustain ppl 7.png";

export const accordionData: AccordionItemType[] = [
	{
		id: uuidv4(),
		title: "How do I contact your Customer Service?",
		content:
			"Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.",
	},
	{
		id: uuidv4(),
		title: "When will my order ship?",
		content:
			"Orders are shipped on business days (Monday through Friday, excluding major holidays). Most orders are processed and shipped within 2 - 3 business days, depending on availability. However, please allow for extended order processing time during peak periods, such as major holidays.",
	},
	{
		id: uuidv4(),
		title: "Can I cancel or modify my order?",
		content:
			"Orders are processed as soon as you submit them so they cannot be cancelled or modified. This allows you to receive your modimal as quickly as possible. However, we do offer free exchanges and returns orders.",
	},
	{
		id: uuidv4(),
		title: "What are my shipping options?",
		content: `Modimal offers the following shipping options.
Note: Orders are shipped on business days (Monday through Friday, excluding major holidays). Most orders are processed and shipped within 2–3 business days, depending on product availability. However, please allow for extended order processing time during peak periods, such as major holidays.
US
Express via UPS 2nd Day (2 Business Days; Order by 12:30pm ET): $25  
Orders shipped with Express via UPS 2nd Day are typically delivered by the end of the second business day after they are shipped. Some locations in Alaska, Hawaii, and remote areas may require additional transit time. To be shipped the same day, your order must be submitted by no later than 12:30pm ET. All other orders will be shipped on the following business day.
Overnight via UPS Overnight (1 Business Day; Order by 12:30pm ET): $35  
Orders shipped with Overnight via UPS Overnight are typically delivered by 3pm (local time) the next business day after they are shipped. Shipments to some remote addresses are typically delivered by 4:30pm (local time) the next business day after they are shipped. Overnight via UPS Overnight is available for shipments to addresses within the 48 contiguous states, and to some addresses in Alaska and Hawaii. To be shipped the same day, your order must be submitted by no later than 12:30pm ET/9:30am PT. All other orders will be shipped on the following business day.
FREE shipping with any order over $175!  
We offer free shipping via DHL Expedited Max with any order over $175.
International
Internationally, we ship via DHL Air Express, so you can expect to receive your modimal within 3–8 business days depending on your shipping destination.
`,
	},
	{
		id: uuidv4(),
		title: "What type of payment methods do you offer?",
		content: "We accept all major credit cards, PayPal, Amazon Pay, Klarna and Catch.",
	},
	{
		id: uuidv4(),
		title: "Which size will fit me best?",
		content:
			"We offer product and body measurements on each of our product pages. Just click on 'Size Guide' to find your best fit. Measuring guides are included.",
	},
	{
		id: uuidv4(),
		title: "How do I take care of my modimal pieces?",
		content: `Each piece is different, so we recommend looking at the care instructions on the label of your piece before washing. All of our pieces are “machine cold wash” which saves over 2,000 pounds of CO2 per year vs. washing in hot water—every little bit counts, and we strongly believe in doing our part. We advise a temperature of 30 degrees Celsius / 85 Fahrenheit or lower when washing.
Please do not tumble dry. Tumble drying reverses the bonding process used in many of our pieces, reheating the glue which will cause the seams of your piece to break. It can also reduce the lifespan of products as the tumbling action is rough, causing fibers to break and elastic to warp. As a general rule, please don’t use fabric softener—it can damage the performance properties of our fabrics.
Do not bleach. Do not dry clean. Do not iron.`,
	},
	{
		id: uuidv4(),
		title: "Where and how do you manufacture your products?",
		content: `We conducted a worldwide search—seriously—for the best suppliers to manufacture our pieces. We found fantastic teams to partner with in Portugal, the US, China, Turkey and Italy.
What makes them the best? They’re perfectionists and innovators, and we like that (because we are too). They also feel strongly about ethics and the environment, along with the happiness of their workers, something that matters deeply to us at modimal. We require each supplier to sign our Commitment to People (as well as our Commitment to Planet) contract, demonstrating their commitment to high standards across manufacturing and taking care of workers, making each piece of modimal crafted with love and for the planet.`,
	},
	{
		id: uuidv4(),
		title: "How do you find and evaluate your suppliers?",
		content: `We find our suppliers through trusted recommendations from our existing partners, reputable innovators and sustainability pioneers as well as the various trade shows we visit. Before working with any supplier, we conduct extensive due diligence on their stance on both ethics and environment. Our due diligence consists of in person visits and conversations with both management and factory workers about their happiness, their hours, their pay and their safety. If you have any questions about our suppliers, please ask us: hello@modimal.com`,
	},
	{
		id: uuidv4(),
		title: "How do your suppliers support their workers?",
		content: `We only partner with factories and mills that put their workers first. We make sure they offer regular training, on-site services, employee benefits, clean and sanitary working environments and more. We visit all our factories and mills before working with them, and throughout our relationships, reviewing first hand how they support their employees.
We require our factories and mills to sign our Commitment to People (as well as our Commitment to Planet) contract. The contract is in line with the International Labor Oganisation’s conventions, there is absolutely no subcontracting, discrimination or working above 60 hours per week, all overtime must be paid in a timely manner and at a premium rate. Our suppliers are required to advocate for education and sustainable solutions to eradicate child labor within their local region. We ask that all our suppliers work to incorporate diversity and inclusivity into the workplace, starting with unbiased hiring practices.`,
	},
];

export const principles: Principle[] = [
	{
		id: uuidv4(),
		title: "Minimalism",
		description:
			"We believe less is more. Our thoughtfully designed pieces embrace minimalism, ensuring each garment becomes a versatile and timeless addition to your wardrobe. By choosing quality over quantity, we encourage conscious consumption.",
	},
	{
		id: uuidv4(),
		title: "Circular",
		description:
			"Embracing the circular economy, we design with longevity in mind. Our pieces are intended to be treasured for years, encouraging a shift away from disposable fashion. When you invest in our clothing, you're investing in a more sustainable future.",
	},
	{
		id: uuidv4(),
		title: "Ethical",
		description:
			"Every stitch tells a story. Our garments are meticulously crafted by skilled artisans who share our values of ethical and fair labor practices. This dedication to craftsmanship not only ensures exceptional quality but also supports a network of talented individuals.",
	},
	{
		id: uuidv4(),
		title: "Transparency",
		description:
			"We value openness and transparency. We're on a journey to continuously improve our practices, and we're committed to sharing our progress with you. From sourcing to production, we want you to know the story behind each piece you wear. We update all information every six months.",
	},
	{
		id: uuidv4(),
		title: "Eco-Friendly Materials",
		description:
			"We are dedicated to reducing our environmental impact. Our clothing is made using sustainable materials, carefully sourced to minimize harm to the planet. From organic fabrics to innovative recycled materials, we aim to leave a lighter footprint.",
	},
	{
		id: uuidv4(),
		title: "Community and Empowerment",
		description:
			"Our brand is a part of a community that shares a vision for a better world. Through collaborations and initiatives, we aim to inspire and empower individuals to make conscious choices and contribute to positive change.",
	},
];

export const CardItems: CardType[] = [
	{
		id: uuidv4(),
		image: Card1,
		buttonText: "Processing",
	},
	{
		id: uuidv4(),
		image: Card2,
		buttonText: "Materials",
	},
	{
		id: uuidv4(),
		image: Card3,
		buttonText: "Packaging ",
	},
	{
		id: uuidv4(),
		image: Card4,
		buttonText: "Product Caring",
	},
];

export const sustainabilityPeople = [
	{
		id: uuidv4(),
		image: sustainppl1,
	},
	{
		id: uuidv4(),
		image: sustainppl2,
	},

	{
		id: uuidv4(),
		image: sustainppl3,
	},
	{
		id: uuidv4(),
		image: sustainppl4,
	},
	{
		id: uuidv4(),
		image: sustainppl5,
	},
	{
		id: uuidv4(),
		image: sustainppl6,
	},
	{
		id: uuidv4(),
		image: sustainppl7,
	},
];
