import styled from "styled-components";

interface CategoryProps {
	$image: string;
	$is_right: boolean;
}

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0 42px;
`;

export const Category = styled.div<CategoryProps>`
    background-image: url(${({$image}) => $image});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 28px;
    border-radius: 24px;
    display: flex;
    justify-content: ${({$is_right}) => $is_right ? 'flex-start' : 'flex-end'};
`;

export const CategoryText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: fit-content;
`;

export const CategoryTitle = styled.div`
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const CategoryCount = styled.div`
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: baseline;
    gap: 6px;
    width: 100%;
    justify-content: center;
`;
