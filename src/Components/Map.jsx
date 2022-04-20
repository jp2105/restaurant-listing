import React, { useCallback, useState } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const MapDisplay = ({ restaurantData }) => {
    const center = { lat: 40.743394, lng: -73.954235 }
    const containerStyle = {
        width: '100vw',
        height: '400px'
    };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCNRjhnt7VdCYf1M9ufEcer_FKoNemttxo",
    })
    const [map, setMap] = useState(null)
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])


    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    const avgRating = (reviews) => {
        let totalRating = 0;
        reviews?.map(review => {
            totalRating += review?.rating;
        })
        return Math.round(totalRating / reviews.length);
    }
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {isLoaded && <GoogleMap
                onLoad={onLoad}
                onUnmount={onUnmount}
                center={center}
                mapContainerStyle={containerStyle}
                zoom={15}
                options={{
                    zoomControl: false,
                    fullscreenControl: false
                }
                }
            >
                {
                    restaurantData?.map(item => {
                        return <Marker key={item.id} label={`${item.name} \n rating: ${avgRating(item.reviews)}`} position={item.latlng} />
                    })
                }
            </GoogleMap>
            }
        </div>
    );
}

export default MapDisplay;