import { v4 as uuidv4 } from "uuid";
import type { AccordionItemType } from "./types";

export const accordionData: AccordionItemType[] = [
	{
		id: uuidv4(),
		title: "How do I contact your Customer Service?",
		content:
			"Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom corner of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.",
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
		content:
			"US:\n- Express via UPS 2nd Day (2 Business Days; Order by 12:30pm ET): $25\n- Overnight via UPS Overnight (1 Business Day; Order by 12:30pm ET): $35\n- FREE shipping with any order over $175 via DHL Expedited Max\n\nInternational:\n- DHL Air Express (3–8 business days depending on destination)",
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
		content:
			"All our pieces are machine cold wash only (30°C / 85°F or lower). Do not tumble dry, bleach, dry clean, or iron. Avoid fabric softener. Tumble drying can damage bonding and reduce lifespan.",
	},
	{
		id: uuidv4(),
		title: "Where and how do you manufacture your products?",
		content:
			"We manufacture in Portugal, the US, China, Turkey, and Italy. Our suppliers are chosen based on ethics, innovation, and commitment to sustainability and worker well-being. They sign our Commitment to People and Planet contracts.",
	},
	{
		id: uuidv4(),
		title: "How do you find and evaluate your suppliers?",
		content:
			"We find suppliers through partner recommendations and trade shows. Due diligence includes in-person visits and discussions with factory workers and management about conditions, hours, and pay. Questions? Email hello@modimal.com.",
	},
	{
		id: uuidv4(),
		title: "How do your suppliers support their workers?",
		content:
			"Our partners offer training, benefits, and clean workspaces. They must sign our Commitment to People, adhering to ILO conventions—no child labor, no overwork, fair pay. We prioritize inclusivity and education.",
	},
];
