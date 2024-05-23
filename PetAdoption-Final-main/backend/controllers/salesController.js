const Sales = require('../models/salesSchema');

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sales.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSalesById = async (req, res) => {
  try {
    const sales = await Sales.findById(req.params.id);
    if (!sales) return res.status(404).json({ message: 'Sales record not found' });
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSales = async (req, res) => {
  const { petType, quantitySold, revenue, weekEnding } = req.body;

  const newSales = new Sales({
    petType,
    quantitySold,
    revenue,
    weekEnding
  });

  try {
    const savedSales = await newSales.save();
    res.status(201).json(savedSales);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateSales = async (req, res) => {
  try {
    const updatedSales = await Sales.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSales) return res.status(404).json({ message: 'Sales record not found' });
    res.status(200).json(updatedSales);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSales = async (req, res) => {
  try {
    const deletedSales = await Sales.findByIdAndDelete(req.params.id);
    if (!deletedSales) return res.status(404).json({ message: 'Sales record not found' });
    res.status(200).json({ message: 'Sales record deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};