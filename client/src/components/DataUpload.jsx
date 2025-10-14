import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from './Navbar';

const DataUpload = () => {
    const [uploadType, setUploadType] = useState('stem');
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadResults, setUploadResults] = useState(null);

    const uploadTypes = [
        { value: 'stem', label: 'STEM Data', description: 'Supplier, Transport, Economics, Material data' },
        { value: 'vessels', label: 'Vessel Schedules', description: 'Vessel arrival schedules and cargo details' },
        { value: 'ports', label: 'Port Stock Data', description: 'Current stock levels and port capacities' },
        { value: 'plants', label: 'Plant Demands', description: 'Steel plant demand requirements and specifications' }
    ];

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const validTypes = ['.xlsx', '.xls', '.csv'];
            const fileExtension = selectedFile.name.toLowerCase().substring(selectedFile.name.lastIndexOf('.'));

            if (validTypes.includes(fileExtension)) {
                setFile(selectedFile);
                setUploadResults(null);
            } else {
                toast.error('Please select a valid Excel (.xlsx, .xls) or CSV file');
                e.target.value = '';
            }
        }
    };

    const handleUpload = async () => {
        if (!file) {
            toast.error('Please select a file to upload');
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('dataType', uploadType);

        try {
            // Simulate upload process
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Mock successful upload response
            const mockResults = {
                recordsProcessed: Math.floor(Math.random() * 100) + 50,
                recordsUpdated: Math.floor(Math.random() * 50) + 20,
                recordsCreated: Math.floor(Math.random() * 30) + 10,
                errors: Math.floor(Math.random() * 3)
            };

            setUploadResults(mockResults);
            toast.success(`Successfully uploaded ${uploadType} data!`);
            setFile(null);

            // Reset file input
            const fileInput = document.getElementById('file-upload');
            if (fileInput) fileInput.value = '';

        } catch (error) {
            toast.error('Upload failed. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const downloadTemplate = (type) => {
        // Mock template download
        toast.success(`Downloading ${type} template...`);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header */}
                    <div className="bg-white shadow-sm border-b rounded-2xl p-4 sm:p-6 lg:p-8 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Data Upload & Integration
                        </h1>
                        <p className="text-gray-600">
                            Upload SAP exports and Excel data to update system information
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Upload Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Data File</h2>

                                {/* Data Type Selection */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Select Data Type
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {uploadTypes.map((type) => (
                                            <div
                                                key={type.value}
                                                className={`p-4 border-2 rounded-lg cursor-pointer transition duration-300 ${uploadType === type.value
                                                        ? 'border-blue-500 bg-blue-50'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                                onClick={() => setUploadType(type.value)}
                                            >
                                                <div className="flex items-center mb-2">
                                                    <input
                                                        type="radio"
                                                        name="uploadType"
                                                        value={type.value}
                                                        checked={uploadType === type.value}
                                                        onChange={() => setUploadType(type.value)}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                                    />
                                                    <label className="ml-2 font-medium text-gray-900">
                                                        {type.label}
                                                    </label>
                                                </div>
                                                <p className="text-sm text-gray-600 ml-6">
                                                    {type.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* File Upload */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Select File
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition duration-300">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                        accept=".xlsx,.xls,.csv"
                                                        onChange={handleFileChange}
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                Excel (.xlsx, .xls) or CSV files up to 10MB
                                            </p>
                                        </div>
                                    </div>

                                    {file && (
                                        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-sm text-green-800">
                                                    Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Upload Button */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={handleUpload}
                                        disabled={!file || uploading}
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {uploading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Uploading...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                Upload Data
                                            </>
                                        )}
                                    </button>

                                    <button
                                        onClick={() => downloadTemplate(uploadType)}
                                        className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300 font-medium flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Download Template
                                    </button>
                                </div>

                                {/* Upload Results */}
                                {uploadResults && (
                                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <h3 className="text-lg font-semibold text-green-800 mb-3">Upload Results</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-green-600">{uploadResults.recordsProcessed}</div>
                                                <div className="text-sm text-green-700">Records Processed</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-blue-600">{uploadResults.recordsUpdated}</div>
                                                <div className="text-sm text-blue-700">Records Updated</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-purple-600">{uploadResults.recordsCreated}</div>
                                                <div className="text-sm text-purple-700">Records Created</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-red-600">{uploadResults.errors}</div>
                                                <div className="text-sm text-red-700">Errors</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Instructions & Info */}
                        <div className="space-y-6">
                            {/* Instructions */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Instructions</h3>
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">1</span>
                                        <span>Select the appropriate data type for your file</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">2</span>
                                        <span>Download the template to ensure correct format</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">3</span>
                                        <span>Upload your Excel or CSV file (max 10MB)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">4</span>
                                        <span>Review the upload results and any errors</span>
                                    </div>
                                </div>
                            </div>

                            {/* Supported Formats */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Supported Formats</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm text-gray-700">Excel (.xlsx, .xls)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm text-gray-700">CSV (Comma Separated)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm text-gray-700">SAP Export Files</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Uploads */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Uploads</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">STEM Data</div>
                                            <div className="text-xs text-gray-500">2 hours ago</div>
                                        </div>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Success</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">Vessel Schedules</div>
                                            <div className="text-xs text-gray-500">1 day ago</div>
                                        </div>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Success</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataUpload;