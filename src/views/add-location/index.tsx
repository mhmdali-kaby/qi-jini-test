import React, {useRef, useState} from 'react';
import {Container} from "../../styles/styled.ts";
import {useTranslation} from "react-i18next";
import {
	AddLocationButton,
	AddLocationContainer,
	AddLocationTitle, AutocompleteContainer,
	ChangeMapContainer,
	CheckBoxContainer,
	InputContainer,
	InputLabel
} from "./styled.ts";
import InputComponent from "../../components/input";
import {INITIAL_POSITION} from "../../utils/constants.ts";
import "leaflet/dist/leaflet.css";
import MapMarkerIcon from "../../components/icons/map-marker.icon.tsx";
import {useNavigate} from "react-router-dom";
import {Autocomplete, GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import {renderToStaticMarkup} from "react-dom/server";

const getCustomMarkerIcon = () => {
	const svgString = encodeURIComponent(renderToStaticMarkup(<MapMarkerIcon />));
	return {
		url: `data:image/svg+xml;charset=UTF-8,${svgString}`,
	};
};

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
console.log(API_KEY)
const libraries: ('places')[] = ["places"];

const AddLocationView: React.FC = () => {
	const [selectedPosition, setSelectedPosition] = useState<google.maps.LatLngLiteral>({
		lat: INITIAL_POSITION.lat,
		lng: INITIAL_POSITION.lng,
	});
	const [zoom, setZoom] = useState(16);
	const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const {t} = useTranslation();
	const navigate = useNavigate();


	const addLocation = () => {
		navigate(-1)
	}
	const handleMapClick = (event: google.maps.MapMouseEvent) => {
		if (event.latLng) {
			setSelectedPosition({
				lat: event.latLng.lat(),
				lng: event.latLng.lng(),
			});
			setZoom(18);
		}
	};

	const handlePlaceSelect = () => {
		const place = autocompleteRef.current?.getPlace();
		if (place?.geometry?.location) {
			const newLocation = {
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			};
			setSelectedPosition(newLocation);
			setZoom(18);
			if (map) map.panTo(newLocation);
		}
	};

	return (
		<>
			<Container>
				<AddLocationContainer>
					<div className="add-location-content">
						<AddLocationTitle>{t('add_location')}</AddLocationTitle>
						<ChangeMapContainer className='prevent-swipe'>
							<LoadScript googleMapsApiKey={API_KEY} libraries={libraries}>
								<AutocompleteContainer>
									<Autocomplete onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)} onPlaceChanged={handlePlaceSelect}>
										<input
											type="text"
											placeholder="Search for a location..."
										/>
									</Autocomplete>
								</AutocompleteContainer>
								<GoogleMap
									center={selectedPosition}
									zoom={zoom}
									onClick={handleMapClick}
									onLoad={(map) => setMap(map)}
									options={{
										streetViewControl: false
									}}
								>
									{selectedPosition && <Marker position={selectedPosition} icon={getCustomMarkerIcon()} />}
								</GoogleMap>
							</LoadScript>
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
							<InputComponent placeholder={`(${t('optional')})`} name='street' color="#CB3436"/>
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