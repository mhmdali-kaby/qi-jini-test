import React from 'react';
import {IProductAttributeValue} from "../../../store/interfaces/product-attribute.interface.ts";
import {ColorProductAttributeContainer, ColorProductAttributeValue} from "./styled.ts";

const ColorProductAttribute: React.FC<{ data: IProductAttributeValue[] }> = ({data}) => {
	return (
		<ColorProductAttributeContainer>
			{data.map((item, index) => (
				<ColorProductAttributeValue key={index} $color={item.value}>
				</ColorProductAttributeValue>
			))}
		</ColorProductAttributeContainer>
	);
};

export default ColorProductAttribute;