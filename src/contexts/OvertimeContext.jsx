import { createContext, useState } from "react";

const OvertimeContext = createContext();

export const OvertimeContextProvider = ({ children }) => {

    const [overtime, setOvertime] = useState(0);

    return (
        <OvertimeContext.Provider value={{ overtime, setOvertime }}>
            {children}
        </OvertimeContext.Provider>
    );
}

export default OvertimeContext;