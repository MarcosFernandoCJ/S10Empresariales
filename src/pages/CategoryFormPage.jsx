import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

function CategoryFormPage() {
    const initData = {
        cod: "",
        nom: "",
    };

    const categories = [
        { cod: 1, nom: "Horror" },
        { cod: 2, nom: "Comedy" },
        { cod: 3, nom: "Action" },
        { cod: 4, nom: "Drama" },
        { cod: 5, nom: "Anime" },
    ];

    const { id } = useParams();
    const [category, setCategory] = useState(initData);

    const onChangeNombreCat = (e) => {
        const nData = { ...category, nom: e.target.value }; // Corrige "data" por "category"
        setCategory(nData);
    };

    const setCategoryForm = (codigo) => {
        const selectedCategory = categories.find((cat) => cat.cod === parseInt(codigo));
        if (selectedCategory) {
            setCategory(selectedCategory);
        }
    };

    useEffect(() => {
        setCategoryForm(id);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando:", category);
        // Aquí puedes agregar la lógica para guardar los cambios en la base de datos
    };

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Editar Categoría</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Nombre de la Categoría</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="nom"
                            value={category.nom}
                            onChange={onChangeNombreCat}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary me-2">Guardar</button>
                        <Link to="/categories" className="btn btn-secondary">Cancelar</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CategoryFormPage;
