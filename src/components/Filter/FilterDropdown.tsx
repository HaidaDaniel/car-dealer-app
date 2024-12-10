// "use client";
// import React from "react";

// interface Props {
//   label: string;
//   options: { value: string | number; label: string }[];
//   selectedValue: string | number;
//   onChange: (value: string | number) => void;
// }

// const FilterDropdown: React.FC<Props> = ({
//   label,
//   options,
//   selectedValue,
//   onChange,
// }) => {
//   return (
//     <label className="block mb-4">
//       <span className="text-gray-300">{label}</span>
//       <select
//         value={selectedValue}
//         onChange={(e) => onChange(e.target.value)}
//         className="mt-1 block w-full rounded border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//       >
//         <option value="">-- Select --</option>
//         {options.map((option) => (
//           <option
//             key={option.value}
//             value={option.value}
//             className="bg-gray-800 text-white hover:bg-gray-700"
//           >
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
// };

// export default FilterDropdown;
