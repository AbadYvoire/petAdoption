document.addEventListener('DOMContentLoaded', function() {
    const salesTableBody = document.getElementById('salesTableBody');
    const salesForm = document.getElementById('salesForm');
    const salesIdInput = document.getElementById('salesId');
    const itemNameInput = document.getElementById('itemName');
    const quantitySoldInput = document.getElementById('quantitySold');
    const revenueInput = document.getElementById('revenue');
    const weekEndingInput = document.getElementById('weekEnding');

    let salesData = [
        { id: 1, itemName: 'Commodo leo sed porta', quantitySold: 10, revenue: 150.00, weekEnding: '2024-05-18' },
        { id: 2, itemName: 'Purus consequat congue sit', quantitySold: 5, revenue: 225.00, weekEnding: '2024-05-18' },
        { id: 3, itemName: 'Morbi vel arcu scelerisque', quantitySold: 8, revenue: 360.00, weekEnding: '2024-05-18' },
        { id: 4, itemName: 'Nam justo libero porta ege', quantitySold: 3, revenue: 255.00, weekEnding: '2024-05-18' },
        { id: 5, itemName: 'Etiam commodo leo sed', quantitySold: 7, revenue: 385.00, weekEnding: '2024-05-18' },
    ];

    function renderSalesTable() {
        salesTableBody.innerHTML = '';
        salesData.forEach(sale => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sale.id}</td>
                <td>${sale.itemName}</td>
                <td>${sale.quantitySold}</td>
                <td>$${sale.revenue.toFixed(2)}</td>
                <td>${sale.weekEnding}</td>
                <td>
                    <button onclick="editSale(${sale.id})">Edit</button>
                    <button onclick="deleteSale(${sale.id})">Delete</button>
                </td>
            `;
            salesTableBody.appendChild(row);
        });
    }

    salesForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const id = salesIdInput.value ? parseInt(salesIdInput.value) : Date.now();
        const newSale = {
            id: id,
            itemName: itemNameInput.value,
            quantitySold: parseInt(quantitySoldInput.value),
            revenue: parseFloat(revenueInput.value),
            weekEnding: weekEndingInput.value,
        };

        const existingIndex = salesData.findIndex(sale => sale.id === id);
        if (existingIndex > -1) {
            salesData[existingIndex] = newSale;
        } else {
            salesData.push(newSale);
        }

        renderSalesTable();
        salesForm.reset();
        salesIdInput.value = '';
    });

    window.editSale = function(id) {
        const sale = salesData.find(sale => sale.id === id);
        if (sale) {
            salesIdInput.value = sale.id;
            itemNameInput.value = sale.itemName;
            quantitySoldInput.value = sale.quantitySold;
            revenueInput.value = sale.revenue;
            weekEndingInput.value = sale.weekEnding;
        }
    };

    window.deleteSale = function(id) {
        salesData = salesData.filter(sale => sale.id !== id);
        renderSalesTable();
    };

    renderSalesTable();
});