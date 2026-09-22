import React, { useState } from 'react';
import Header from '../components/Header';

const Dataset = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedFileInfo, setUploadedFileInfo] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setUploading(true);

    try {
      const response = await fetch('http://localhost:5000/api/dataset/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert('Dataset uploaded and saved successfully!');
        setUploadedFileInfo(data);
      } else {
        alert(`Upload error: ${data.error || data.message || 'Failed to upload'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to backend server on port 5000.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex-1 bg-slate-950 flex flex-col min-h-screen">
      <Header title="Dataset Management" />
      <main className="p-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-2xl mx-auto shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Upload Dataset</h2>
          <p className="text-slate-400 text-sm mb-6">
            Upload your CSV or transaction dataset file to store it on the server for mining.
          </p>

          <div className="space-y-4">
            <input
              type="file"
              accept=".csv,.txt"
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer"
            />

            <button
              onClick={handleUpload}
              disabled={uploading || !selectedFile}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              {uploading ? 'Uploading...' : 'Upload & Save Dataset'}
            </button>
          </div>

          {uploadedFileInfo && (
            <div className="mt-6 p-4 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-300">
              <p className="font-semibold text-emerald-400 mb-1">? File Saved on Server</p>
              <p><span className="text-slate-500">Filename:</span> {uploadedFileInfo.filename}</p>
              <p><span className="text-slate-500">Size:</span> {uploadedFileInfo.size} bytes</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dataset;
