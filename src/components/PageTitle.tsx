import { useEffect } from "react";
import { useLocation } from "react-router";

const PageTitle = ({ title }: { title: string }) => {
    const location = useLocation();

    // Change the document title whenever the location or title changes
    useEffect(() => {
        document.title = title;
    }, [location, title]);

    return null;
};

export default PageTitle;
