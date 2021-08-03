import React from "react"
import { Animal } from "./animal/Animal"
import "./Kennel.css"
import { Employee } from "./employees/employees.js"
import { Location } from "./locations/locations.js"
import { Customer } from "./customers/customers.js"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Employees</h2>
        <article className="employee">
            <Employee />
            <Employee />
            <Employee />
        </article>

        <h2>Locations</h2>
        <article className="location">
            <Location />
            <Location />
            <Location />
        </article>

        <h2>Customers</h2>
        <article className="customer">
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)
