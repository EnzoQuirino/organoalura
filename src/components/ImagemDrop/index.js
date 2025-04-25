import "./ImagemDrop.css";

const ImagemDrop = (props) => {
    const aoEnviar = (url) => {
        props.aoAlterado(url);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                aoEnviar(reader.result); // isso é a string base64
            };
            reader.readAsDataURL(file); // lê a imagem como base64
        }
    };

    return (
        <>
            <div className="label">
                <label>{props.label}</label>
            </div>
            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="dropzone"
            >
                {props.valor ? (
                    <img
                        src={props.valor}
                        alt="Imagem enviada"
                        style={{
                            width: "100%",
                            maxWidth: "300px",
                            borderRadius: "8px",
                        }}
                    />
                ) : (
                    <p>{props.placeholder}</p>
                )}
            </div>
        </>
    );
};

export default ImagemDrop;
