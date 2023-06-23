import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [user, setUser] = useState("");
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            user, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                    <input className="Input"
                        type="text"
                        value={user}
                        onChange={({ target }) => setUser(target.value)}
                    />
                </label>
                <label className="Label">
                    Telefono
                    <input className="Input"
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className="Label">
                    E-Mail
                    <input className="Input"
                        type="text"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div className="Label">
                    <button type="submit" className="Button">Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;