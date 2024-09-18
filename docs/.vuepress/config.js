import { defaultTheme } from "vuepress";

export default {
	// title: "Ziik API Documentation",
	// description: "Ziik is the complete solution for internal communication.",
	theme: defaultTheme({
		lastUpdated: false,
		navbar: [
			{ text: "Home", link: "/" },
			{ text: "Ziik.io", link: "https://ziik.io" },
		],
		sidebar: [
			{
				text: "Introduction",
				link: "/",
			},
			"/authentication",
			"/alerts",
			"/counters",
			"/devices",
			"/feed",
			{
				text: "Chat",
				children: [
					"/conversations/conversations",
					"/conversations/messages",
					"/conversations/participants",
					"/conversations/service-messages",
				],
			},
			{
				text: "Comments",
				children: [
					"/comments",
					"/comments/interaction",
					"/comments/files",
				],
			},
			{
				text: "Content",
				children: [
					"/content",
					"/content/files",
					"/content/interaction",
					"/content/participation",
				],
			},
			{
				text: "Documents",
				children: ["/documents/folders", "/documents"],
			},
			{
				text: "Calendar",
				children: ["/calendar"],
			},
			{
				text: "FAQ",
				children: ["/faq", "/faq/files", "/faq/categorization"],
			},
			{
				text: "Files",
				children: ["/file", "/file/upload"],
			},
			{
				text: "Groups",
				children: [
					"/groups",
					"/groups/image",
					"/groups/files",
					"/groups/membership",
					"/groups/auto",
				],
			},
			{
				text: "Manuals",
				children: [
					"/manuals",
					"/manuals/image",
					"/manuals/chapters",
					"/manuals/paragraphs",
					"/manuals/paragraphfiles",
				],
			},
			"/quicklinks",
			{
				text: "Schedule",
				children: [
					"/schedule",
					"/schedule/trade",
					"/schedule/export",
					"/schedule/templates",
					"/schedule/vacations",
				],
			},
			"/search",
			{
				text: "Settings",
				children: [
					"/settings",
					"/settings/images",
					"/settings/modules",
					"/settings/twofactor",
					"/settings/countries",
					"/settings/languages",
				],
			},
			{
				text: "Suppliers",
				children: [
					"/suppliers",
					"/suppliers/files",
					"/suppliers/categorization",
					"/suppliers/contacts",
				],
			},
			{
				text: "Units",
				children: [
					"/units",
					"/units/image",
					"/units/tree",
					"/units/import",
					"/units/addresses",
					"/units/features",
				],
			},
			{
				text: "Users",
				children: [
					"/users",
					"/users/unit-memberships",
					"/users/image",
					"/users/operations",
					"/users/notifications",
					"/users/specialties",
					"/users/twofactor",
					"/users/import",
				],
			},
			{
				text: "User Types",
				children: ["/usertypes"],
			},
			{
				text: "Webhooks",
				children: [
					"/webhooks",
					"/webhooks/triggers",
					"/webhooks/logs",
					"/webhooks/units",
					"/webhooks/users",
				],
			},
			"/errors",
		],
	}),
};
