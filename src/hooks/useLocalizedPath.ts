import { useParams } from "react-router-dom";

export const useLocalizedPath = () => {
    const {lang} = useParams<{lang: string}>();

    return (path: string) => {
        const clean = path.startsWith('/') ? path : `/${path}`
        return `/${lang}${clean}`
    }
};
