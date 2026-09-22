import React, { useState } from 'react';
import { UploadCloud, FileCheck } from 'lucide-react';

const UploadBox = ({ onFileUpload }) => {
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      if (onFileUpload) onFileUpload(file);
    }
  };

  return (
    <div className="relative border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-xl p-8 text-center bg-slate-900/50 hover:bg-slate-900 transition-all cursor-pointer">
      <input
        type="file"
        accept=".csv,.json"
        onChange={handleChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div className="flex flex-col items-center">
        {fileName ? (
          <>
            <FileCheck className="w-12 h-12 text-emerald-400 mb-3" />
            <p className="text-sm font-semibold text-slate-200">{fileName}</p>
            <p className="text-xs text-slate-400 mt-1">File ingested successfully</p>
          </>
        ) : (
          <>
            <UploadCloud className="w-12 h-12 text-indigo-400 mb-3" />
            <p className="text-sm font-medium text-slate-200">
              Drop CSV/JSON dataset or click to browse
            </p>
            <p className="text-xs text-slate-500 mt-1">Maximum file size: 50MB</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadBox;
