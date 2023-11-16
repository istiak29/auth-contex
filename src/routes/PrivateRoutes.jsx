import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';



const PrivateRoutes = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex justify-center">
                <span className="loading loading-spinner text-error"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }
    
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}