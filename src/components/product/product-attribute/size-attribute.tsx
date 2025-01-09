import React from 'react';
import {IProductAttributeValue} from "../../../store/interfaces/product-attribute.interface.ts";
import {SizeProductAttributeContainer, SizeProductAttributeValue} from "./styled.ts";

const SizeProductAttribute: React.FC<{ data: IProductAttributeValue[] }> = ({data}) => {
	return (
		<SizeProductAttributeContainer>
			{data.map((item, index) => (
				<SizeProductAttributeValue key={index}>
					{item.value}
				</SizeProductAttributeValue>
			))}
		</SizeProductAttributeContainer>
	);
};

export default SizeProductAttribute;