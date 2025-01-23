import styled from '@emotion/styled';

interface ColorProductAttributeValueProps {
	$color: string;
}

export const ColorProductAttributeContainer = styled.div`
		display: flex;
    border: 1px solid #EEEEEE;
    border-radius: 20px;
    gap: 6px;
    padding: 8px;
`;

export const ColorProductAttributeValue = styled.div<ColorProductAttributeValueProps>`
		background: ${props => props.$color};
		width: 22px;
		height: 22px;
		border-radius: 50%;
`;

export const SizeProductAttributeContainer = styled.div`
		display: flex;
    gap: 6px;
    padding: 2px;
`;

export const SizeProductAttributeValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 6px 4px;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		border: 1px solid #EEEEEE;
    font-weight: bold;
`;