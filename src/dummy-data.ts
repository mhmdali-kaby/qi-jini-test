import {AttributeType} from "./store/interfaces/product-attribute.interface.ts";

export const SplashesDummy = [
	{
		id: 1,
		order: 1,
		image: '/dummy/splash.png',
		title: 'اجاكم جني 1',
		description: 'خصم 20 % و اكثر على كل المنتجات في منصه جني لغاية نهايه السنه',
	},
	{
		id: 2,
		order: 2,
		image: '/dummy/splash.png',
		title: 'اجاكم جني 2',
		description: 'خصم 20 % و اكثر على كل المنتجات في منصه جني لغاية نهايه السنه',
	},
	{
		id: 3,
		order: 3,
		image: '/dummy/splash.png',
		title: 'اجاكم جني 3',
		description: 'خصم 20 % و اكثر على كل المنتجات في منصه جني لغاية نهايه السنه',
	}
];

export const OffersDummy = [
	{
		id: 1,
		title: 'خصم 50%',
		description: 'لكل المجموعة',
		image: '/dummy/offer.png'
	},
	{
		id: 2,
		title: 'خصم 60%',
		description: 'لكل المجموعة',
		image: '/dummy/offer.png'
	},
	{
		id: 3,
		title: 'خصم 70%',
		description: 'لكل المجموعة',
		image: '/dummy/offer.png'
	},
	{
		id: 4,
		title: 'خصم 80%',
		description: 'لكل المجموعة',
		image: '/dummy/offer.png'
	},
]

export const ProductsDummy = [
	{
		id: 1,
		image: '/dummy/product.png',
		title: 'منتج تي شيرت ابيض',
		description: 'وصف منتج تي شيرت ابيض',
		discount_time: null,
		rate: 4.5,
		price: 150000,
		old_price: null,
		label: 'خصم : 5 يوم و 10 ساعات و 13 دقيقة',
		label_color: '#F03636'
	},
	{
		id: 2,
		image: '/dummy/product.png',
		title: 'منتج تي شيرت احمر',
		description: 'وصف منتج تي شيرت ابيض',
		discount_time: '5 ايام و 10 ساعات و 25 دقيقه',
		rate: 5,
		price: 150000,
		old_price: 180000,
		label: 'منتج جديد .. تم اضافته مؤخرا',
		label_color: '#4936F0'
	},
	{
		id: 3,
		image: '/dummy/product.png',
		title: 'منتج تي شيرت اسود',
		description: 'وصف منتج تي شيرت ابيض',
		discount_time: null,
		rate: 4,
		price: 150000,
		old_price: null,
		label: 'منتج مميز من قبل منصة جني',
		label_color: '#189A3C'
	},
	{
		id: 4,
		image: '/dummy/product.png',
		title: 'منتج تي شيرت اخضر',
		description: 'وصف منتج تي شيرت ابيض',
		discount_time: null,
		rate: 4,
		price: 150000,
		old_price: null,
		label: 'خصم : 5 يوم و 10 ساعات و 13 دقيقة',
		label_color: '#F03636'
	},
];

export const CountDummy = {
	count: 4
}

export const StoreDummy = {
	id: 1,
	name: 'ترند موبايل',
	phone: '+9647722687441'
}

export const HomeFilterCategoriesDummy = [
	{
		id: 1,
		title: 'احذية',
	},
	{
		id: 2,
		title: 'ملابس',
	},
	{
		id: 3,
		title: 'اربطة',
	},
	{
		id: 4,
		title: 'احزمة',
	},
	{
		id: 5,
		title: 'ملابس اطفال',
	}
];

export const CategoriesDummy = [
	{
		id: 1,
		title: 'وصل حديثا',
		is_right: true,
		image: '/dummy/category-right.png',
		products: 208
	},
	{
		id: 2,
		title: 'ملابس',
		is_right: false,
		image: '/dummy/category-left.png',
		products: 506
	},
	{
		id: 3,
		title: 'اربطة',
		is_right: true,
		image: '/dummy/category-right.png',
		products: 986
	},
	{
		id: 4,
		title: 'احزمة',
		is_right: false,
		image: '/dummy/category-left.png',
		products: 77
	},
	{
		id: 5,
		title: 'ملابس اطفال',
		is_right: true,
		image: '/dummy/category-right.png',
		products: 21
	}
];

export const NotificationsDummy = [
	{
		id: 1,
		message: 'ويكيبيديا مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل',
		time: '14/06/2024 - 12:50 PM',
		read: false,
		image: '/dummy/notification.png',
	},
	{
		id: 2,
		message: 'ويكيبيديا مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل',
		time: '15/06/2024 - 12:50 PM',
		read: true,
		image: '/dummy/notification.png',
	},
	{
		id: 3,
		message: 'ويكيبيديا مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل',
		time: '16/06/2024 - 12:50 PM',
		read: true,
		image: '/dummy/notification.png',
	},
	{
		id: 4,
		message: 'ويكيبيديا مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل',
		time: '17/06/2024 - 12:50 PM',
		read: false,
		image: '/dummy/notification.png',
	},
	{
		id: 5,
		message: 'ويكيبيديا مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل',
		time: '19/06/2024 - 12:50 PM',
		read: false,
		image: '/dummy/notification.png',
	},
	{
		id: 6,
		message: 'ويكيبيديا مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل',
		time: '14/06/2024 - 12:50 PM',
		read: false,
		image: '/dummy/notification.png',
	},
	{
		id: 7,
		message: 'ويكيبيديا مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل',
		time: '14/06/2024 - 12:50 PM',
		read: true,
		image: '/dummy/notification.png',
	},
	{
		id: 8,
		message: 'ويكيبيديا مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل',
		time: '14/06/2024 - 12:50 PM',
		read: false,
		image: '/dummy/notification.png',
	},
];

export const OrdersDummy = [
	{
		id: 1,
		status: 1,
		price: 120000,
		items: [
			{
				quantity: 1,
				product: {
					id: 1,
					image: '/dummy/product-details.png',
					title: 'سماعة ايربودز',
					description: 'وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة',
					price: 250000,
					attributes: [
						{
							id: 1,
							title: 'اللون',
							type: AttributeType.COLOR,
							value: 'black'
						},
						{
							id: 1,
							title: 'القياس',
							type: AttributeType.SIZE,
							value: 'S'
						},
					]
				}
			}
		]
	},
	{
		id: 2,
		status: 1,
		price: 50000,
		items: [
			{
				quantity: 7,
				product: {
					id: 1,
					image: '/dummy/product-details.png',
					title: 'ملابس',
					description: 'وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة',
					price: 250000,
					attributes: [
						{
							id: 1,
							title: 'اللون',
							type: AttributeType.COLOR,
							value: 'red'
						},
						{
							id: 1,
							title: 'القياس',
							type: AttributeType.SIZE,
							value: 'S'
						},
					]
				}
			}
		]
	},
	{
		id: 3,
		status: 1,
		price: 220000,
		items: [
			{
				quantity: 2,
				product: {
					id: 1,
					image: '/dummy/product-details.png',
					title: 'سماعة ايربودز',
					description: 'وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة',
					price: 250000,
					attributes: [
						{
							id: 1,
							title: 'اللون',
							type: AttributeType.COLOR,
							value: 'blue'
						},
						{
							id: 1,
							title: 'القياس',
							type: AttributeType.SIZE,
							value: 'S'
						},
					]
				}
			}
		]
	},
];

export const OrderDummy = {
	id: 1,
	status: 2,
	price: 120000,
	pending_at: 'SUN, SEP 29, 2024 8:14 PM',
	approved_at: 'MON, SEP 29, 2024 8:14 PM',
	on_delivery_at: 'TUS, SEP 29, 2024 8:14 PM',
	delivered_at: 'WEN, SEP 29, 2024 8:14 PM',
	items: [
		{
			quantity: 1,
			product: {
				id: 1,
				image: '/dummy/product-details.png',
				title: 'سماعة ايربودز',
				description: 'وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة',
				price: 250000,
				attributes: [
					{
						id: 1,
						title: 'اللون',
						type: AttributeType.COLOR,
						value: 'black'
					},
					{
						id: 1,
						title: 'القياس',
						type: AttributeType.SIZE,
						value: 'S'
					},
				]
			}
		},
		{
			quantity: 2,
			product: {
				id: 2,
				image: '/dummy/product-details.png',
				title: 'ملابس',
				description: 'وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة',
				price: 250000,
				attributes: [
					{
						id: 1,
						title: 'اللون',
						type: AttributeType.COLOR,
						value: 'red'
					},
					{
						id: 1,
						title: 'القياس',
						type: AttributeType.SIZE,
						value: 'S'
					},
				]
			}
		}
	]
};

export const ProfileInfoDummy = {
	id: 1234,
	name: 'احمد محمد احمد',
	phone: '07722687441',
	avatar: '/dummy/profile.png',
};

export const DiscountDummy = [
	{
		id: 1,
		title: 'الملابس والاحذية',
		discounts: [
			{
				id: 1,
				discount: 20,
				thumbnail: '/dummy/discount-thumbnail.png',
				image: '/dummy/discount1.png',
			},
			{
				id: 2,
				discount: 30,
				thumbnail: '/dummy/discount-thumbnail.png',
				image: '/dummy/discount2.png',
			},
			{
				id: 3,
				discount: 40,
				thumbnail: '/dummy/discount-thumbnail.png',
				image: '/dummy/discount1.png',
			},
			{
				id: 4,
				discount: 50,
				thumbnail: '/dummy/discount-thumbnail.png',
				image: '/dummy/discount2.png',
			},
		],
		border_type: 'solid',
		border_color: '#4B556326',
	},
	{
		id: 2,
		title: 'الاجهزة والالكترونيات',
		discounts: [
			{
				id: 5,
				discount: 20,
				thumbnail: '/dummy/discount-thumbnail.png',
				image: '/dummy/discount1.png',
			},
			{
				id: 6,
				discount: 30,
				thumbnail: '/dummy/discount-thumbnail.png',
				image: '/dummy/discount2.png',
			},
			{
				id: 7,
				discount: 40,
				thumbnail: '/dummy/discount-thumbnail.png',
				image: '/dummy/discount1.png',
			},
			{
				id: 8,
				discount: 50,
				thumbnail: '/dummy/discount-thumbnail.png',
				image: '/dummy/discount2.png',
			},
		],
		border_type: 'dashed',
		border_color: '#F97316',
	},
];

export const ProductDummy = {
	id: 1,
	image: '/dummy/product-details.png',
	title: 'سماعة ايربودز',
	type: 'سماعة',
	description: 'وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة وصف يخص هذه السلعة بكامل تفاصيلها مع امكانية اضافة جدول يحتوي على خصائص المادة',
	rate: 4.5,
	rate_count: 100,
	price: 250000,
	attributes: [
		{
			id: 1,
			title: 'اللون',
			type: AttributeType.COLOR,
			values: [
				{
					id: 1,
					value: 'red',
					available_count: 10,
				},
				{
					id: 2,
					value: 'blue',
					available_count: 11,
				},
				{
					id: 3,
					value: 'green',
					available_count: 11,
				},
				{
					id: 4,
					value: 'yellow',
					available_count: 11,
				},
			]
		},
		{
			id: 1,
			title: 'القياس',
			type: AttributeType.SIZE,
			values: [
				{
					id: 1,
					value: 'S',
					available_count: 10,
				},
				{
					id: 2,
					value: 'M',
					available_count: 11,
				},
				{
					id: 2,
					value: 'L',
					available_count: 11,
				},
			]
		},
	]
};

export const CartItemsDummy = [
	{
		id: 1,
		title: 'حذاء رياضي',
		type: 'حذاء',
		image: '/dummy/product-details.png',
		count: 2,
		price: 250000
	},
	{
		id: 2,
		title: 'حذاء رياضي',
		type: 'حذاء',
		image: '/dummy/product-details.png',
		count: 4,
		price: 30000
	},
	{
		id: 3,
		title: 'حذاء رياضي',
		type: 'حذاء',
		image: '/dummy/product-details.png',
		count: 2,
		price: 40000
	},
	{
		id: 4,
		title: 'حذاء رياضي',
		type: 'حذاء',
		image: '/dummy/product-details.png',
		count: 2,
		price: 50000
	},
	{
		id: 5,
		title: 'حذاء رياضي',
		type: 'حذاء',
		image: '/dummy/product-details.png',
		count: 2,
		price: 550000
	},
];