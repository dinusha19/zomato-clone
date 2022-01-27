import React from "react";

const HomeLayout = (props) => {
    return (
        <>
            <h1 className="text=xl">Home Layout</h1>
            {props.children}
        </>
    )
}

export default HomeLayout;