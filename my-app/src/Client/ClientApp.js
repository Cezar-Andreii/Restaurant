import React, { useState, useEffect } from "react";
import { getAllTables, updateTable } from "../tablesApi";
import "./ClientApp.css";

function ClientApp() {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        const fetchTables = async () => {
            const data = await getAllTables();
            setTables(data);
        };
        fetchTables();
    }, []);

    const handleReserveTable = async (id) => {
        try {
            const updatedTable = await updateTable(id, { status: "reserved" });
            setTables(tables.map((table) => (table.id === id ? updatedTable : table)));
        } catch (error) {
            console.error("Eroare la rezervarea mesei:", error);
        }
    };

    return (
        <div className="client-container">
            <h1>Planul Restaurantului</h1>
            <div className="legend">
                <span className="legend-item available">Disponibil</span>
                <span className="legend-item reserved">Rezervat</span>
            </div>
            <div className="restaurant-layout">
                {tables.map((table) => (
                    <div
                        key={table.id}
                        className={`table ${table.type}`}
                        style={{
                            top: `${table.positionY}px`,
                            left: `${table.positionX}px`,
                            backgroundColor: table.status === "reserved" ? "#f44336" : "#4caf50",
                        }}
                        onClick={() => {
                            if (table.status === "available") {
                                handleReserveTable(table.id);
                            }
                        }}
                        title={`Masa ${table.number}: Capacitate ${table.capacity}`}
                    >
                        Masa {table.number}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientApp;
