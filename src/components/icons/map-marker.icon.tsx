import React from 'react';

const MapMarkerIcon: React.FC = () => {
	return (
		<svg width="58" height="64" viewBox="0 0 58 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="42.5853" cy="14.4693" r="6.46931" fill="#F97316"/>
			<g filter="url(#filter0_d_302_4163)">
				<path fillRule="evenodd" clipRule="evenodd"
				      d="M42.6142 23.3844C43.6317 23.3844 44.6085 23.2107 45.5167 22.8912C47.8593 29.2159 46.4899 36.6039 41.4083 41.6855L30.0724 53.0214C29.3767 53.717 28.2489 53.717 27.5533 53.0214L16.2173 41.6855C9.26105 34.7292 9.26105 23.4508 16.2173 16.4946C21.0932 11.6187 28.0925 10.1605 34.2385 12.1199C33.9988 12.9179 33.8699 13.764 33.8699 14.6401C33.8699 19.4694 37.7849 23.3844 42.6142 23.3844ZM29.1613 38.8523C34.3621 38.8523 38.5782 34.6362 38.5782 29.4353C38.5782 24.2345 34.3621 20.0184 29.1613 20.0184C23.9604 20.0184 19.7443 24.2345 19.7443 29.4353C19.7443 34.6362 23.9604 38.8523 29.1613 38.8523Z"
				      fill="white"/>
			</g>
			<defs>
				<filter id="filter0_d_302_4163" x="0.600122" y="0.877344" width="56.4254" height="63.0656"
				        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					               result="hardAlpha"/>
					<feOffset/>
					<feGaussianBlur stdDeviation="5.2"/>
					<feComposite in2="hardAlpha" operator="out"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_302_4163"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_302_4163" result="shape"/>
				</filter>
			</defs>
		</svg>
	);
};

export default MapMarkerIcon;