import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [ data, setData ] = useState({});

    async function signIn({ email, password }) {

        try {
        const response = await api.post("/sessions", { email, password });
        const { user, token } = response.data

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setData( { user, token })

        localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
        localStorage.setItem("@rocketnotes:token", token);

        console.log(response)
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");

        setData({})
    }

    async function updateProfile({ user }) {
        try {

            await api.put("/users", user)
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

            setData({ user, token: data.token})
            alert("Perfil atualizado!")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil");
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user");
        const token = localStorage.getItem("@rocketnotes:token")

        if ( user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({token, user: JSON.parse(user)})
        }
    }, [])
    return(
        <AuthContext.Provider value={{ 
            signIn, 
            user: data.user,
            updateProfile,
            signOut 
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }