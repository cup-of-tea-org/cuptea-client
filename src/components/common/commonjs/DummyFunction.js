import axios from "axios";
import { useNavigate } from "react-router-dom";

export function dummyFunction() {

    const navigate = useNavigate();

    if (axios.defaults.headers.common["Authorization"] == null) {
        navigate("/login");
    }
}