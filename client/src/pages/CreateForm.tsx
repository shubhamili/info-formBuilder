import { useState } from "react";

type FormField = {
    id: string;
    label: string;
    type: "text" | "number" | "boolean" | "select";
    required?: boolean;
    options?: string[];
};

const CreateForm = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [fields, setFields] = useState<FormField[]>([]);


    const addTextField = () => {
        setFields(prev => [
            ...prev,
            {
                id: crypto.randomUUID(),
                label: "Untitled field",
                type: "text",
                required: false
            }
        ]);
    };



    return (
        <div className="flex flex-col justify-center items-center">
            <label htmlFor="name">Form Name</label>
            <input type="text" name="name" id="name" className="border border-black" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="description">description</label>
            <input type="text" name="description" id="description" className="border border-black" value={description} onChange={(e) => setDescription(e.target.value)} />

            <h2 className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Create Form Fields</h2>

            <div className="flex flex-col mt-4 cursor-pointer hover:bg-gray-200 border border-gray-300 rounded px-4 py-2" onClick={addTextField}>+ Add Field</div>

            <div>
                {fields.map((field) => (
                    <div key={field.id} className="border border-gray-400 rounded p-4 mt-4">
                        <label htmlFor={`label-${field.id}`}>Field Label:</label>
                        <input
                            type="text"
                            id={`label-${field.id}`}
                            value={field.label}
                            onChange={(e) => {
                                const newLabel = e.target.value;
                                setFields((prevFields) =>
                                    prevFields.map((f) =>
                                        f.id === field.id ? { ...f, label: newLabel } : f
                                    )
                                );
                            }}
                            className="border border-black ml-2"
                        />
                        <p>Type: {field.type}</p>
                    </div>
                ))}
            </div>




        </div>
    )
}

export default CreateForm