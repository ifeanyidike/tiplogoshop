import React, { useEffect, useState } from 'react'
import Content from "../Content"
import Services from "./Services"
import Schools from "./Schools"
import Courses from "./Courses"

const ServiceMain = () => {

    const [value, setValue] = useState(0);
    const labels = ["Manage Emails", "Manage Institutions/Courses", "Courses"]

    return (
        <div>
            <Content
                labels={labels}
                TabContent={[<Services setValue={setValue} value={0} />,
                <Schools setValue={setValue} value={1} />,
                <Courses setValue={setValue} value={2} />
                ]}
                value={value}
                setValue={setValue}
            />

        </div>
    )
}

export default ServiceMain
