import React, { useState, useEffect } from "react";
import { getAllTables, addTable, deleteTable, updateTable } from "../tablesApi";
import "./AdminApp.css";

function AdminApp() {
    const [tables, setTables] = useState([]);
    const [newTable, setNewTable] = useState({ number: "", capacity: "", status: "" });
    const [editableTable, setEditableTable] = useState(null);

    // Fetch tables on page load
    useEffect(() => {
        const fetchTables = async () => {
            const data = await getAllTables();
            setTables(data);
        };
        fetchTables();
    }, []);

    // Handle new table addition
    const handleAddTable = async () => {
        try {
            const addedTable = await addTable(newTable);
            setTables([...tables, addedTable]); // Update local state
            setNewTable({ number: "", capacity: "", status: "" }); // Reset form
        } catch (error) {
            console.error("Eroare la adăugarea mesei:", error);
        }
    };

    // Handle table deletion
    const handleDeleteTable = async (id) => {
        try {
            await deleteTable(id);
            setTables(tables.filter((table) => table.id !== id)); // Update local state
        } catch (error) {
            console.error("Eroare la ștergerea mesei:", error);
        }
    };

    // Handle table update
    const handleUpdateTable = async () => {
        try {
            const updatedTable = await updateTable(editableTable.id, editableTable);
            setTables(tables.map((table) => (table.id === editableTable.id ? updatedTable : table)));
            setEditableTable(null); // Reset editing state
        } catch (error) {
            console.error("Eroare la actualizarea mesei:", error);
        }
    };

    return (
        <div className="admin-container">
            <h1>Admin: Gestionează Mese</h1>
            <ul className="admin-list">
                {tables.map((table) => (
                    <li key={table.id} className="admin-list-item">
                        <div>
                            Masa {table.number} - Capacitate: {table.capacity} - Status: {table.status}
                        </div>
                        <div>
                            <button className="admin-button" onClick={() => setEditableTable(table)}>Editează</button>
                            <button className="admin-button delete" onClick={() => handleDeleteTable(table.id)}>Șterge</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h2>Adaugă o masă</h2>
            <div className="form-group">
                <input
                    type="number"
                    placeholder="Număr masă"
                    value={newTable.number}
                    onChange={(e) => setNewTable({ ...newTable, number: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Capacitate"
                    value={newTable.capacity}
                    onChange={(e) => setNewTable({ ...newTable, capacity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={newTable.status}
                    onChange={(e) => setNewTable({ ...newTable, status: e.target.value })}
                />
                <button className="admin-button" onClick={handleAddTable}>Adaugă</button>
            </div>
            {editableTable && (
                <div className="edit-form">
                    <h2>Editează masa</h2>
                    <input
                        type="number"
                        value={editableTable.number}
                        onChange={(e) => setEditableTable({ ...editableTable, number: e.target.value })}
                    />
                    <input
                        type="number"
                        value={editableTable.capacity}
                        onChange={(e) => setEditableTable({ ...editableTable, capacity: e.target.value })}
                    />
                    <input
                        type="text"
                        value={editableTable.status}
                        onChange={(e) => setEditableTable({ ...editableTable, status: e.target.value })}
                    />
                    <button className="admin-button" onClick={handleUpdateTable}>Salvează</button>
                </div>
            )}
        </div>
    );
}

export default AdminApp;
