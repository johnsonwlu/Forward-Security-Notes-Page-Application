const getNotes = async () => {
    const response = await fetch('http://localhost:3001/users',
    {
        method: 'GET'
    });
    return response.json();
}

const addNote = async (note) => {
    const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });
    const data = await response.json();

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

const removeNote = async (id) => {
    await fetch('http://localhost:3001/users/' + id, {
        method: 'DELETE'
    });
    return id;
};

const notesCommandsToExport = {
    getNotes,
    addNote,
    removeNote
};

export default notesCommandsToExport;