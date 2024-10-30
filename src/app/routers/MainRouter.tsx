import { useAuth } from "@features/auth"
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

export const MainRouter = () => {
    const { user } = useAuth(); 
    
    if (!user) {
        return <PublicRouter />
    }
    return <PrivateRouter />
    
}