import styled from "styled-components";

interface NotificationContainerProps {
	$read: boolean;
}

export const NotificationTitle = styled.div`
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    direction: rtl;
`;

export const NotificationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0;
`;

export const NotificationContainer = styled.div<NotificationContainerProps>`
		background: ${({$read}) => $read ? '#fff' : '#FFF7F3'};
		border-radius: 14px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid #EAEAEA;
    padding: 10px;
    position: relative;
`;

export const NotificationContent = styled.div`
		display: flex;
		gap: 8px;
`;

export const NotificationImage = styled.img`
    width: 16%;
    border-radius: 14px;
`;

export const NotificationMessage = styled.div`
    color: #000;
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
		width: 100%;
    direction: rtl;
    padding-top: 4px;
`;

export const NotificationTime = styled.div`
    font-size: 10px;
    position: absolute;
    bottom: 4px;
    color: #9D9D9D;
`;