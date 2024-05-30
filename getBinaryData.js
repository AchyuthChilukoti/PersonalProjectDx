const fs = require('fs');

// Read the binary data of the PDF file
const fileData = fs.readFileSync('/Users/achilukoti/Downloads/Achyuth_Chilukoti__857296__-_Technical_Support_Engineer_reviewed_by_Compensation_Review__FY25_Annual_Stock__Merit___Gratitude_Program_2024_03_26.pdf');

// Write the binary data to a text file
fs.writeFileSync('pdf_binary_data1.txt', fileData);

console.log('PDF binary data has been saved to pdf_binary_data.txt');