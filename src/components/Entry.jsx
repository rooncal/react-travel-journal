import React from "react";

export default function Entry({img,location,googleMapsUrl,title,startDate,endDate,description}) {
    return (
        <div className="entry--container">
            <img className="entry--image" src={img} />
            <div className="entry--info">
                <div className="same--line">
                    <img className="location--logo" src="/react-travel-journal/location-logo.png" />
                    <h3 className="entry--location">{location.toUpperCase()}</h3>
                    <a className="entry--link" href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="entry--title">{title}</h1>
                <p className="entry--date">{startDate} - {endDate}</p>
                <p className="entry--description">{description}</p>
            </div>
        </div>
    )
}