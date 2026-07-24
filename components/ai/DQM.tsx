"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import { UploadCloud, CheckCircle, AlertCircle } from "lucide-react";

// 1. Define the expected structure of the incoming Excel data
interface ExcelRow {
  ID?: string | number;
  Name?: string;
  Date?: string | number;
  [key: string]: unknown; // Allows for other unexpected columns without throwing errors
}

// 2. Define the structure of your processed results
interface DQResult {
  rowNumber: number;
  rowData: string;
  status: "Pass" | "Fail";
  issues: string;
}

export default function DQM() {
  const [results, setResults] = useState<DQResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState("");

  const processExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsProcessing(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      setTimeout(() => {
        const data = new Uint8Array(event.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        
        // Tell TypeScript that the parsed JSON matches our ExcelRow interface
        const jsonData = XLSX.utils.sheet_to_json(firstSheet) as ExcelRow[];

        const dqMatrix: DQResult[] = jsonData.map((row: ExcelRow, index: number) => {
          const issues: string[] = [];
          
          // Rule 1: ID must be an integer
          if (!row.ID || !Number.isInteger(Number(row.ID))) {
            issues.push("ID is missing or not a valid integer.");
          }

          // Rule 2: Name must not be null
          if (!row.Name || String(row.Name).trim() === "") {
            issues.push("Name cannot be null or empty.");
          }

          // Rule 3: Date must be a valid format and not null
          if (!row.Date) {
            issues.push("Date is missing.");
          } else if (isNaN(Date.parse(String(row.Date)))) {
            issues.push("Date format is invalid.");
          }

          return {
            rowNumber: index + 2, 
            rowData: JSON.stringify(row),
            status: issues.length === 0 ? "Pass" : "Fail",
            issues: issues.join(" | "),
          };
        });

        setResults(dqMatrix);
        setIsProcessing(false);
      }, 1500); 
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white">AI Data Steward</h2>
        <p className="text-gray-400">
          Upload an Excel file to validate: Integer IDs, Non-Null Names, and Valid Dates.
        </p>
      </div>

      <div className="mb-8 flex w-full items-center justify-center">
        <label className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-gray-800 hover:bg-gray-700 transition">
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <UploadCloud className="mb-2 h-8 w-8 text-blue-500" />
            <p className="mb-2 text-sm text-gray-400">
              <span className="font-semibold text-white">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">{fileName || "XLSX, XLS (MAX. 10MB)"}</p>
          </div>
          <input type="file" className="hidden" accept=".xlsx, .xls" onChange={processExcel} />
        </label>
      </div>

      {isProcessing && (
        <div className="text-center text-blue-400 animate-pulse font-medium">
          Scanning data and generating DQ Matrix...
        </div>
      )}

      {results.length > 0 && !isProcessing && (
        <div className="mt-8 overflow-x-auto rounded-lg border border-gray-800">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-800 text-xs uppercase text-gray-400">
              <tr>
                <th className="px-6 py-3">Row</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Identified Issues</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, i) => (
                <tr key={i} className="border-b border-gray-800 bg-gray-900 hover:bg-gray-800/50 transition">
                  <td className="px-6 py-4 font-medium text-white">{res.rowNumber}</td>
                  <td className="px-6 py-4">
                    {res.status === "Pass" ? (
                      <span className="flex items-center text-green-400"><CheckCircle className="mr-2 h-4 w-4"/> Pass</span>
                    ) : (
                      <span className="flex items-center text-red-400"><AlertCircle className="mr-2 h-4 w-4"/> Fail</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-red-300">{res.issues || "None"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}