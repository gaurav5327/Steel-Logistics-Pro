const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        cb(null, `${timestamp}-${file.originalname}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        if (ext !== '.xlsx' && ext !== '.xls' && ext !== '.csv') {
            return cb(new Error('Only Excel (.xlsx, .xls) and CSV files are allowed'));
        }
        cb(null, true);
    }
});

// Parse Excel file and extract data
const parseExcelFile = (filePath) => {
    try {
        const workbook = xlsx.readFile(filePath);
        const result = {};

        // Parse all sheets
        workbook.SheetNames.forEach(sheetName => {
            const worksheet = workbook.Sheets[sheetName];
            result[sheetName] = xlsx.utils.sheet_to_json(worksheet, {
                header: 1,
                defval: null
            });
        });

        return result;
    } catch (error) {
        throw new Error('Failed to parse Excel file: ' + error.message);
    }
};

// Validate and transform STEM data (Supplier, Transport, Economics, Material)
const validateSTEMData = (data) => {
    const requiredFields = ['supplier', 'loadport', 'parcelSize', 'laydays', 'material'];
    const validatedData = [];

    data.forEach((row, index) => {
        if (index === 0) return; // Skip header row

        const rowData = {};
        const headers = ['supplier', 'loadport', 'parcelSize', 'laydays', 'material', 'quality', 'contractPrice', 'eta', 'vesselName'];

        headers.forEach((header, i) => {
            rowData[header] = row[i];
        });

        const missingFields = requiredFields.filter(field => !rowData[field]);
        if (missingFields.length > 0) {
            throw new Error(`Row ${index + 1}: Missing required fields: ${missingFields.join(', ')}`);
        }

        validatedData.push({
            supplier: rowData.supplier,
            loadport: rowData.loadport,
            parcelSize: parseFloat(rowData.parcelSize) || 0,
            laydays: parseInt(rowData.laydays) || 0,
            material: rowData.material,
            quality: rowData.quality || 'Standard',
            contractPrice: parseFloat(rowData.contractPrice) || 0,
            eta: rowData.eta ? new Date(rowData.eta) : null,
            vesselName: rowData.vesselName || 'TBN'
        });
    });

    return validatedData;
};

// Validate vessel schedule data
const validateVesselData = (data) => {
    const requiredFields = ['vesselName', 'eta', 'cargoTonnage', 'loadport'];
    const validatedData = [];

    data.forEach((row, index) => {
        if (index === 0) return; // Skip header row

        const rowData = {};
        const headers = ['vesselName', 'eta', 'cargoTonnage', 'loadport', 'dischargePort', 'laydays', 'demurrageRate'];

        headers.forEach((header, i) => {
            rowData[header] = row[i];
        });

        const missingFields = requiredFields.filter(field => !rowData[field]);
        if (missingFields.length > 0) {
            throw new Error(`Row ${index + 1}: Missing required fields: ${missingFields.join(', ')}`);
        }

        validatedData.push({
            vesselName: rowData.vesselName,
            eta: new Date(rowData.eta),
            cargoTonnage: parseFloat(rowData.cargoTonnage) || 0,
            loadport: rowData.loadport,
            dischargePort: rowData.dischargePort,
            laydays: parseInt(rowData.laydays) || 0,
            demurrageRate: parseFloat(rowData.demurrageRate) || 5000
        });
    });

    return validatedData;
};

// SAP data integration helper
const processSAPExport = (filePath, dataType) => {
    try {
        const parsedData = parseExcelFile(filePath);
        const sheetNames = Object.keys(parsedData);

        if (sheetNames.length === 0) {
            throw new Error('No data sheets found in the Excel file');
        }

        const mainSheet = parsedData[sheetNames[0]];

        switch (dataType) {
            case 'stem':
                return validateSTEMData(mainSheet);
            case 'vessels':
                return validateVesselData(mainSheet);
            default:
                throw new Error('Invalid data type specified');
        }
    } catch (error) {
        throw new Error('SAP data processing failed: ' + error.message);
    }
};

// Clean up uploaded files
const cleanupFile = (filePath) => {
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    } catch (error) {
        console.error('Failed to cleanup file:', error);
    }
};

module.exports = {
    upload,
    parseExcelFile,
    validateSTEMData,
    validateVesselData,
    processSAPExport,
    cleanupFile
};
