import React, {useState} from 'react';
import {Container} from "../../styles/styled.ts";
import Header from "../../components/header";
import {useTranslation} from "react-i18next";
import {
	AddLocationButton,
	AddLocationContainer,
	AddLocationTitle, ChangeMapContainer,
	CheckBoxContainer,
	InputContainer,
	InputLabel
} from "./styled.ts";
import InputComponent from "../../components/input";
import {MapContainer, TileLayer, Marker, useMapEvents} from "react-leaflet";
import L from "leaflet";
import {INITIAL_POSITION} from "../../utils/constants.ts";
import "leaflet/dist/leaflet.css";
import MapMarkerIcon from "../../components/icons/map-marker.icon.tsx";
import ReactDOMServer from "react-dom/server";
import {useNavigate} from "react-router-dom";

const markerIcon = L.divIcon({
	html: ReactDOMServer.renderToString(<MapMarkerIcon />),
	className: "",
});

const AddLocationView: React.FC = () => {
	const [position, setPosition] = useState<L.LatLng | undefined | L.LatLngExpression>(L.latLng(INITIAL_POSITION));
	const {t} = useTranslation();
	const navigate = useNavigate();

	const LocationMarker = () => {
		useMapEvents({
			click(e: L.LeafletMouseEvent) {
				setPosition(e.latlng);
				console.log(e.latlng)
			},
		});

		return position ? <Marker position={position} icon={markerIcon} /> : undefined;
	};

	const addLocation = () => {
		navigate(-1)
	}

	return (
		<>
			<Header/>
			<Container>
				<AddLocationContainer>
					<div className="add-location-content">
						<AddLocationTitle>{t('add_location')}</AddLocationTitle>
						<ChangeMapContainer>
							<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<LocationMarker />
							</MapContainer>
						</ChangeMapContainer>
						<InputContainer>
							<InputLabel>{t('street')}</InputLabel>
							<InputComponent placeholder={`(${t('required')})`} name='street' color="#CB3436"/>
						</InputContainer>
						<InputContainer>
							<InputLabel>{t('building_name')}</InputLabel>
							<InputComponent placeholder={`(${t('required')})`} name='building_name' color="#CB3436"/>
						</InputContainer>
						<InputContainer>
							<InputLabel>{t('phone_number')}</InputLabel>
							<InputComponent placeholder={`(${t('phone_number')})`} name='street' color="#CB3436"/>
						</InputContainer>
						<InputContainer>
							<InputLabel>{t('location_additional_information')}</InputLabel>
							<InputComponent placeholder={`(${t('optional')})`} name='location_additional_information'
							                color="#CB3436"/>
						</InputContainer>
						<CheckBoxContainer>
							<label htmlFor="default_location">{t('mark_as_default_location')}</label>
							<input type="checkbox" id="default_location"/>
						</CheckBoxContainer>
					</div>
					<AddLocationButton onClick={addLocation}>
						{t('add')}
					</AddLocationButton>
				</AddLocationContainer>
			</Container>
		</>
	);
};

export default AddLocationView;