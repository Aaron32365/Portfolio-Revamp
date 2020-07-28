import React from "react";

const ItemContext = React.createContext({
    title: "",
    description: "",
    git: "",
    app: "",
    gifUrl: ""
});

export default ItemContext;
