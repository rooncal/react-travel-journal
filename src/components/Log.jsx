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
