import React from "react";
import Entry from "./Entry";
import data from "../data.js";

export default function Log() {
    
    let log_entries = data.map(
        entry => {
            return <Entry 
                img={entry.imageUrl}
                location={entry.location}
                googleMapsUrl={entry.googleMapsUrl}
                title={entry.title}
                startDate={entry.startDate}
                endDate={entry.endDate}
                description={entry.description}
            />
        }
    )
    return (
        <section>
            {log_entries}
        </section>
    )
}

/*
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    }
*/